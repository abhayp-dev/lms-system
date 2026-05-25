// comps/acts/BlockSentenceAct.js
import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./BlockSentenceAct.module.css";

const BLOCK_COLORS = [
  { bg: "#FF6B6B", shadow: "#C0392B", text: "#fff" },
  { bg: "#4ECDC4", shadow: "#1A9B93", text: "#fff" },
  { bg: "#FFD93D", shadow: "#C9A800", text: "#333" },
  { bg: "#6BCB77", shadow: "#3A9B45", text: "#fff" },
  { bg: "#A78BFA", shadow: "#6D28D9", text: "#fff" },
  { bg: "#F97316", shadow: "#C2560E", text: "#fff" },
  { bg: "#38BDF8", shadow: "#0284C7", text: "#fff" },
];

function parseSentences(text) {
  if (!text) return [];
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      // Support "sentence | hint" or just "sentence"
      const [sentence, hint] = line.split("|").map((s) => s.trim());
      const words = sentence.split(/\s+/).filter(Boolean);
      return { sentence, words, hint: hint || "" };
    });
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function BlockSentenceAct({ data }) {
  const activityId = data?.id || "block_sentence_act";

  // Parse all sentences from text
  const [sentences, setSentences] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  // Per-sentence state
  const [slots, setSlots] = useState([]); // placed words in order
  const [queue, setQueue] = useState([]); // shuffled blocks waiting
  const [activeBlock, setActiveBlock] = useState(null); // { word, colorIdx, id }
  const [dropAnim, setDropAnim] = useState(false);
  const [wrongAnim, setWrongAnim] = useState(false);
  const [successAnim, setSuccessAnim] = useState(false);
  const [completedSentences, setCompletedSentences] = useState([]);
  const [allDone, setAllDone] = useState(false);
  const [score, setScore] = useState(0);
  const [shake, setShake] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  const dropTimer = useRef(null);
  const idCounter = useRef(0);

  // Initialize
  useEffect(() => {
    if (!data) return;
    let parsed = [];

    if (data.text) {
      parsed = parseSentences(data.text);
    } else if (data.blocks && data.sentence) {
      parsed = [{ sentence: data.sentence, words: data.blocks, hint: "" }];
    }

    if (parsed.length === 0) return;

    const saved = localStorage.getItem(activityId);
    if (saved) {
      try {
        const s = JSON.parse(saved);
        setSentences(parsed);
        setCurrentIdx(s.currentIdx || 0);
        setCompletedSentences(s.completedSentences || []);
        setScore(s.score || 0);
        if (s.currentIdx >= parsed.length) setAllDone(true);
        return;
      } catch (_) {}
    }

    setSentences(parsed);
    initSentence(parsed, 0, []);
  }, [data]);

  const initSentence = useCallback((allSentences, idx, completed) => {
    if (idx >= allSentences.length) {
      setAllDone(true);
      return;
    }
    const { words } = allSentences[idx];
    const shuffled = shuffle(words).map((w, i) => ({
      word: w,
      colorIdx: i % BLOCK_COLORS.length,
      id: ++idCounter.current,
    }));
    setSlots([]);
    setQueue(shuffled);
    setActiveBlock(null);
    setDropAnim(false);
    setSuccessAnim(false);
    setWrongAnim(false);

    // Pop first block after short delay
    setTimeout(() => popNextBlock(shuffled, []), 400);
  }, []);

  const popNextBlock = (q, currentSlots) => {
    if (q.length === 0) {
      setActiveBlock(null);
      return;
    }
    const [next, ...rest] = q;
    setQueue(rest);
    setActiveBlock(next);
    setDropAnim(true);
    setTimeout(() => setDropAnim(false), 500);
  };

  const handlePlaceBlock = () => {
    if (!activeBlock) return;

    const sentence = sentences[currentIdx];
    const nextSlotIdx = slots.length;
    const correctWord = sentence.words[nextSlotIdx];

    if (activeBlock.word === correctWord) {
      // Correct!
      const newSlots = [...slots, activeBlock];
      setSlots(newSlots);
      setSuccessAnim(true);
      spawnSparkles();
      setTimeout(() => setSuccessAnim(false), 400);

      const newQueue = queue;

      if (newSlots.length === sentence.words.length) {
        // Sentence complete!
        setTimeout(() => {
          const newCompleted = [...completedSentences, sentence.sentence];
          const newScore = score + sentence.words.length;
          setCompletedSentences(newCompleted);
          setScore(newScore);
          const nextIdx = currentIdx + 1;
          setCurrentIdx(nextIdx);

          localStorage.setItem(
            activityId,
            JSON.stringify({
              currentIdx: nextIdx,
              completedSentences: newCompleted,
              score: newScore,
            })
          );

          if (nextIdx >= sentences.length) {
            setAllDone(true);
          } else {
            initSentence(sentences, nextIdx, newCompleted);
          }
        }, 800);
      } else {
        setTimeout(() => popNextBlock(newQueue, newSlots), 300);
      }
    } else {
      // Wrong!
      setWrongAnim(true);
      setShake(true);
      setTimeout(() => {
        setWrongAnim(false);
        setShake(false);
        // Re-shuffle and put block back into queue
        const recycled = [...queue, activeBlock];
        const reshuffled = shuffle(recycled);
        setQueue(reshuffled);
        popNextBlock(reshuffled, slots);
      }, 600);
    }
  };

  const spawnSparkles = () => {
    const newSparkles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: 30 + Math.random() * 40,
      y: 20 + Math.random() * 60,
      color: BLOCK_COLORS[i % BLOCK_COLORS.length].bg,
    }));
    setSparkles(newSparkles);
    setTimeout(() => setSparkles([]), 700);
  };

  const handleNext = () => {
    try {
      window.parent.postMessage(
        JSON.stringify({ done: true, score, total: sentences.reduce((a, s) => a + s.words.length, 0) }),
        "*"
      );
    } catch (_) {}
  };

  const resetActivity = () => {
    if (!window.confirm("Reset this activity?")) return;
    localStorage.removeItem(activityId);
    setCurrentIdx(0);
    setCompletedSentences([]);
    setScore(0);
    setAllDone(false);
    initSentence(sentences, 0, []);
  };

  const sentence = sentences[currentIdx];
  const totalWords = sentences.reduce((a, s) => a + s.words.length, 0);
  const progress = sentences.length > 0 ? ((currentIdx) / sentences.length) * 100 : 0;

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainCard}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleText}>
            {data?.title || "Build the Sentence!"}
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>
          <div className={styles.progressLabel}>
            {currentIdx} / {sentences.length} sentences
          </div>
        </div>

        {!allDone && sentence && (
          <div className={styles.gameArea}>
            {/* Hint */}
            {sentence.hint && (
              <div className={styles.hint}>💡 {sentence.hint}</div>
            )}

            {/* Sentence Slots */}
            <div className={`${styles.slotsRow} ${shake ? styles.shake : ""}`}>
              {sentence.words.map((word, i) => {
                const placed = slots[i];
                return (
                  <div
                    key={i}
                    className={`${styles.slot} ${placed ? styles.slotFilled : ""}`}
                    style={
                      placed
                        ? {
                            backgroundColor: BLOCK_COLORS[placed.colorIdx].bg,
                            boxShadow: `0 4px 0 ${BLOCK_COLORS[placed.colorIdx].shadow}`,
                            color: BLOCK_COLORS[placed.colorIdx].text,
                          }
                        : {}
                    }
                  >
                    {placed ? placed.word : <span className={styles.slotDash}>?</span>}
                  </div>
                );
              })}
            </div>

            {/* Drop Zone */}
            <div className={styles.dropZone}>
              <div className={styles.dropLabel}>▼ Place here ▼</div>

              {/* Active Block */}
              <div className={styles.activeBlockArea}>
                {activeBlock && (
                  <div
                    className={`${styles.fallingBlock}
                      ${dropAnim ? styles.dropIn : ""}
                      ${successAnim ? styles.popSuccess : ""}
                      ${wrongAnim ? styles.wobbleWrong : ""}
                    `}
                    style={{
                      backgroundColor: BLOCK_COLORS[activeBlock.colorIdx].bg,
                      boxShadow: `0 6px 0 ${BLOCK_COLORS[activeBlock.colorIdx].shadow}`,
                      color: BLOCK_COLORS[activeBlock.colorIdx].text,
                    }}
                    onClick={handlePlaceBlock}
                  >
                    {activeBlock.word}
                  </div>
                )}

                {/* Sparkles */}
                {sparkles.map((s) => (
                  <div
                    key={s.id}
                    className={styles.sparkle}
                    style={{ left: `${s.x}%`, top: `${s.y}%`, backgroundColor: s.color }}
                  />
                ))}
              </div>

              <button
                className={styles.placeBtn}
                onClick={handlePlaceBlock}
                disabled={!activeBlock}
              >
                Place It! 🎯
              </button>
            </div>

            {/* Upcoming queue preview */}
            <div className={styles.queueRow}>
              <span className={styles.queueLabel}>Next blocks:</span>
              {queue.slice(0, 4).map((block) => (
                <div
                  key={block.id}
                  className={styles.queueBlock}
                  style={{
                    backgroundColor: BLOCK_COLORS[block.colorIdx].bg + "55",
                    border: `2px solid ${BLOCK_COLORS[block.colorIdx].bg}`,
                    color: "#333",
                  }}
                >
                  {block.word}
                </div>
              ))}
              {queue.length > 4 && (
                <div className={styles.queueMore}>+{queue.length - 4}</div>
              )}
            </div>
          </div>
        )}

        {/* All Done */}
        {allDone && (
          <div className={styles.victoryArea}>
            <div className={styles.victoryEmoji}>🏆</div>
            <div className={styles.victoryTitle}>Amazing Work!</div>
            <div className={styles.victorySubtitle}>
              You built {completedSentences.length} sentence{completedSentences.length !== 1 ? "s" : ""}!
            </div>
            <div className={styles.completedList}>
              {completedSentences.map((s, i) => (
                <div key={i} className={styles.completedItem}>
                  ✅ {s}
                </div>
              ))}
            </div>
            <div className={styles.footerBtns}>
              <button className={`${styles.btn} ${styles.secondary}`} onClick={resetActivity}>
                Play Again 🔁
              </button>
              <button className={`${styles.btn} ${styles.primary}`} onClick={handleNext}>
                Next ➡️
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        {!allDone && (
          <div className={styles.gameFooter}>
            <button className={`${styles.btn} ${styles.ghost}`} onClick={resetActivity}>
              Reset
            </button>
            <div className={styles.scoreBadge}>⭐ {score} pts</div>
          </div>
        )}
      </div>
    </div>
  );
}
