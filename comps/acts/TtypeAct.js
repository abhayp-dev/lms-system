// comps/acts/TtypeAct.js
import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./TtypeAct.module.css";

const COLORS = ["#FF9A9E", "#A18CD1", "#FBC2EB", "#84FAB0", "#A6C1EE"];

// Path Configuration
const CY = 300; // Center Y of the path
const AMP = 120; // Amplitude (how tall the waves are)
const FREQ = 0.015; // Frequency (how tight the waves are)
const SPEED = 0.8; // Snake Speed (pixels per frame)

export default function TtypeAct({ data }) {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [snakeLength, setSnakeLength] = useState(5); 
  
  const [gameState, setGameState] = useState("INTRO"); 
  const [feedback, setFeedback] = useState(null); 
  const [trackWords, setTrackWords] = useState([]);
  
  // 🟢 NEW: This forces React to redraw the screen every frame so the snake is visible immediately
  const [tick, setTick] = useState(0);

  const requestRef = useRef();
  const snakeRef = useRef({
    x: 0,
    y: CY,
    body: [],
    dizzy: false,
  });

  const questions = data?.questions || [];
  const currentQ = questions[currentLevel];
  const totalQuestions = questions.length;

  const initLevel = useCallback(() => {
    if (!currentQ) return;

    // 1. Shuffle Options
    let options = [...currentQ.options];
    options.sort(() => Math.random() - 0.5);

    // 2. FORCE correct option to NOT be first (Index 0)
    const correctIdx = options.indexOf(currentQ.correct);
    if (correctIdx === 0) {
        // Swap it with the 2nd, 3rd, or 4th position
        const swapIdx = 1 + Math.floor(Math.random() * 3);
        [options[0], options[swapIdx]] = [options[swapIdx], options[0]];
    }

    // 3. Place words along the sine wave path
    const words = options.map((text, i) => {
      const x = 200 + i * 160; // Spread out horizontally: 200, 360, 520, 680
      const y = CY + Math.sin(x * FREQ) * AMP;
      return {
        text,
        x,
        y,
        color: COLORS[i % COLORS.length],
        isCorrect: text === currentQ.correct,
      };
    });

    setTrackWords(words);

    // Reset snake to far left
    snakeRef.current = {
      x: 30, // Start just off-screen left
      y: CY + Math.sin(30 * FREQ) * AMP,
      body: [],
      dizzy: false,
    };

    setGameState("PLAYING");
    setFeedback(null);
  }, [currentQ]);

  useEffect(() => {
    if (gameState === "LOADING_LEVEL") {
      initLevel();
    }
  }, [gameState, initLevel]);

  const update = useCallback(() => {
    if (gameState !== "PLAYING") return;

    const s = snakeRef.current;

    if (!s.dizzy) {
      // Move snake forward along the X axis
      s.x += SPEED;
      
      // Calculate Y based on Sine Wave
      s.y = CY + Math.sin(s.x * FREQ) * AMP;

      // Calculate Angle (Derivative of sine wave)
      const dy = Math.cos(s.x * FREQ) * FREQ * AMP;
      const angle = Math.atan2(dy, 1);

      s.body.unshift({ x: s.x, y: s.y, angle: angle });
      if (s.body.length > snakeLength * 12) s.body.pop();

      // Check if snake has reached the CORRECT word
      const correctWord = trackWords.find(w => w.isCorrect);
      if (correctWord && s.x >= correctWord.x - 30) {
         handleTimeout();
      }
    }

    // 🟢 Magic Line: Tells React "Hey, the snake moved, redraw the screen!"
    setTick(t => t + 1);

    requestRef.current = requestAnimationFrame(update);
  }, [gameState, snakeLength, trackWords]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current);
  }, [update]);

  const handleWordClick = (word) => {
    if (gameState !== "PLAYING") return;
    
    setGameState("FEEDBACK");
    if (word.isCorrect) {
      setFeedback("correct");
      setScore((s) => s + 10);
      setSnakeLength((l) => l + 2);
    } else {
      setFeedback("wrong");
      snakeRef.current.dizzy = true;
    }

    setTimeout(() => moveToNextLevel(), 2000);
  };

  const handleTimeout = () => {
    setGameState("FEEDBACK");
    setFeedback("timeout");
    snakeRef.current.dizzy = true;
    
    setTimeout(() => moveToNextLevel(), 2000);
  };

  const moveToNextLevel = () => {
    if (currentLevel < questions.length - 1) {
      setCurrentLevel((l) => l + 1);
      setGameState("LOADING_LEVEL");
    } else {
      setGameState("FINISHED");
    }
  };

  const handleNext = () => {
    try {
      window.parent.postMessage(
        JSON.stringify({ done: true, score: score, total: totalQuestions * 10 }),
        "*"
      );
    } catch (_) {}
  };

  const resetActivity = () => {
    if (!window.confirm("Are you sure you want to reset this activity?")) return;
    setCurrentLevel(0);
    setScore(0);
    setSnakeLength(5);
    setGameState("INTRO");
  };

  // Generate SVG path points for the dashed line
  const svgPathD = Array.from({ length: 85 }, (_, i) => {
    const x = i * 10;
    const y = CY + Math.sin(x * FREQ) * AMP;
    return `${i === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainCard}>
        <div className={styles.main}>
          <div className={styles.mainInner}>
            
            <div className={styles.header}>
              <div className={styles.titleText}>
                {data.title || "Emotion Snake"}
              </div>
            </div>

            {gameState === "INTRO" && (
              <div className={styles.introScreen}>
                <h2>How to Play</h2>
                <p>The snake will start crawling down the path immediately.</p>
                <p>Read the question and click the <b>correct word</b> before the snake reaches it!</p>
                <button 
                  className={`${styles.btn} ${styles.primary} ${styles.startBtn}`}
                  onClick={() => setGameState("LOADING_LEVEL")}
                >
                  Start Activity
                </button>
              </div>
            )}

            {gameState !== "INTRO" && (
              <div className={styles.gameArea}>
                {gameState !== "FINISHED" && currentQ && (
                   <h2 className={styles.question}>{currentQ.questionText}</h2>
                )}

                <div className={styles.gameWindow}>
                  
                  {/* SVG Winding Path */}
                  <svg className={styles.svgTrack} width="800" height="600">
                     <path d={svgPathD} fill="none" stroke="rgba(139, 195, 74, 0.3)" strokeWidth="15" strokeDasharray="20, 15" strokeLinecap="round" />
                  </svg>

                  {/* Render Cartoon Snake */}
                  {snakeRef.current.body.map((p, i) => {
                    if (i % 6 !== 0) return null;
                    const isHead = i === 0;
                    const rotationDegree = isHead ? (p.angle * 180) / Math.PI + 90 : 0;

                    return (
                      <div
                        key={i}
                        className={`${styles.snakeSegment} ${isHead ? styles.snakeHead : styles.snakeBody} ${
                          (feedback === "wrong" || feedback === "timeout") && isHead ? styles.wobble : ""
                        }`}
                        style={{
                          left: p.x,
                          top: p.y,
                          transform: `translate(-50%, -50%) scale(${1 - i / 300}) ${isHead ? `rotate(${rotationDegree}deg)` : ""}`,
                          backgroundColor: feedback === "correct" ? "#FFD54F" : (i % 12 === 0 ? "#388E3C" : "#4CAF50"),
                          zIndex: 50 - i, // Ensure snake is under words but head is above body
                        }}
                      >
                        {isHead && (
                          <>
                            <div className={styles.eyeLeft}><div className={styles.pupil} /></div>
                            <div className={styles.eyeRight}><div className={styles.pupil} /></div>
                            <div className={styles.tongue} />
                          </>
                        )}
                      </div>
                    );
                  })}

                  {/* Render Words */}
                  {(gameState === "PLAYING" || gameState === "FEEDBACK") &&
                    trackWords.map((w, i) => {
                      // If snake slithered past a wrong word, make it semi-transparent so user knows it was ignored
                      const isPassed = snakeRef.current.x > w.x + 20;

                      return (
                        <div
                          key={i}
                          className={`${styles.wordCapsule} ${isPassed ? styles.passedWord : ""}`}
                          onClick={() => !isPassed && handleWordClick(w)}
                          style={{
                            left: w.x,
                            top: w.y,
                            background: `linear-gradient(135deg, ${w.color}, #fff)`,
                          }}
                        >
                          {w.text}
                        </div>
                      )
                    })}

                  {/* Feedback Overlays */}
                  {feedback === "correct" && <div className={styles.correctOverlay}>Amazing! 🌟</div>}
                  {feedback === "wrong" && <div className={styles.wrongOverlay}>Whoops! 😵</div>}
                  {feedback === "timeout" && <div className={styles.wrongOverlay}>Too Slow! 🐢</div>}
                  
                  {gameState === "FINISHED" && (
                    <div className={styles.finalScreen}>
                      <h1>🎉 Activity Complete!</h1>
                      <p>Your snake grew to size {snakeLength}!</p>
                      <div className={styles.finalScore}>Total Score: {score} / {totalQuestions * 10}</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className={styles.gameFooter}>
            <div className={styles.scoreBadge}>Score: {score}</div>
            <div style={{ display: "flex", gap: "10px" }}>
              {(gameState === "PLAYING" || gameState === "FINISHED" || gameState === "FEEDBACK") && (
                <button className={`${styles.btn} ${styles.primary}`} onClick={resetActivity}>
                  Reset Activity
                </button>
              )}
              {gameState === "FINISHED" && (
                <button className={`${styles.btn} ${styles.primary}`} onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}