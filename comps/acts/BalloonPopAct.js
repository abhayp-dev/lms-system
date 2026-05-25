import React, { useEffect, useState } from "react";
import styles from "./BalloonPopAct.module.css";
import { apiService } from "../../utils/apiService";
import Confetti from "react-confetti";

function parseOptions(raw) {
  return (raw || "")
    .split(/\n|,/)
    .map((x) => x.trim())
    .filter(Boolean);
}

function normalizeData(rawQuestions) {
  const allOptions = [];

  rawQuestions.forEach((q) => {
    const opts = parseOptions(q.options);

    opts.forEach((o) => {
      const clean = o.replace("*", "").trim();

      if (!allOptions.includes(clean)) {
        allOptions.push(clean);
      }
    });
  });

  const questions = rawQuestions.map((q) => {
    const opts = parseOptions(q.options);

    let correctAnswer = "";

    opts.forEach((o) => {
      if (o.includes("*")) {
        correctAnswer = o.replace("*", "").trim();
      }
    });

    return {
      qText: q.qText,
      correctAnswer,
      answered: false,
    };
  });

  return {
    questions,
    commonOptions: allOptions,
  };
}

export default function WordClimbAct({ data }) {
  const [questions, setQuestions] = useState([]);
  const [commonOptions, setCommonOptions] = useState([]);
  const [removedOptions, setRemovedOptions] = useState([]);
  const [shaking, setShaking] = useState(null);
  const [popping, setPopping] = useState(null);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState("STARTED");
  const [showConfetti, setShowConfetti] = useState(false);

  const total = questions.length;

  const activityId = data?.id;

  useEffect(() => {
    if (data) {
      const normalized = normalizeData(data.questions);

      setQuestions(
        normalized.questions.map((q) => ({
          ...q,
          answered: false,
        })),
      );

      setCommonOptions(normalized.commonOptions);
    }
  }, [data]);
  const currentQ = questions[current];

  const handleSelect = (selectedOption) => {
    const q = questions[current];

    if (q.answered) return;

    if (selectedOption === q.correctAnswer) {
      setPopping(selectedOption); // trigger blast animation

      const updatedQuestions = [...questions];
      updatedQuestions[current].answered = true;
      setQuestions(updatedQuestions);

      setFeedback("🎉 Correct!");
      setShowConfetti(true);

      setTimeout(() => {
        setRemovedOptions((prev) => [...prev, selectedOption]);

        setScore((prev) => prev + 1);

        setPopping(null);
        setShowConfetti(false);

        if (current + 1 < questions.length) {
          setCurrent((prev) => prev + 1);
        } else {
          setStatus("SUMMARY");
        }
      }, 800);
    } else {
      setFeedback("❌ Try again");

      setShaking(selectedOption);

      setTimeout(() => {
        setShaking(null);
      }, 500);
    }
  };

  const handleNext = async () => {
    if (current + 1 < total) {
      setCurrent(current + 1);
    } else {
      const percentage = Math.round((score / total) * 100);

      const finalStatus = percentage >= 60 ? "COMPLETED" : "FAILED";

      try {
        await apiService.saveMcqProgress({
          activity_id: activityId,

          score,

          attempted: total,

          status: finalStatus,

          progress_json: JSON.stringify({
            score,
            total,
            status: finalStatus,
          }),
        });
      } catch (err) {
        console.log(err);
      }

      setStatus("SUMMARY");
    }
  };

  const resetQuiz = () => {
    const normalized = normalizeData(data.questions);

    setQuestions(normalized.questions);

    setCommonOptions(normalized.commonOptions);

    setRemovedOptions([]);

    setCurrent(0);

    setScore(0);

    setFeedback("");

    setShaking(null);

    setShowConfetti(false);

    setStatus("STARTED");
  };
  if (!questions.length) return null;

  const percentage = Math.round((score / total) * 100);
  const correctCount = score;

  const wrongCount = total - score;
  return (
    <div className={styles.wrapper}>
      {showConfetti && <Confetti />}

      {status !== "SUMMARY" ? (
        <div className={styles.container}>
          <div className={styles.instructionCard}>
            <div className={styles.instrIcon}>🎈</div>

            <div>
              <div className={styles.instrTitle}>गुब्बारा फोड़ो</div>

              <div className={styles.instrSub}>
                Pop the Correct answer balloon.
              </div>
            </div>
          </div>

          <div className={styles.questionCard}>
            <div className={styles.qHeader}>Question {current + 1}</div>

            <div className={styles.optionsGrid}>
              <div className={styles.questionText}>{currentQ.qText}</div>

              <div className={styles.balloonArea}>
                {commonOptions
                  .filter((opt) => !removedOptions.includes(opt))
                  .map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(opt)}
                      className={`
  ${styles.balloon}
  ${shaking === opt ? styles.balloonWrong : ""}
  ${popping === opt ? styles.balloonPop : ""}
`}
                    >
                      <div className={styles.balloonShape}>🎈</div>

                      <div className={styles.balloonText}>{opt}</div>
                    </button>
                  ))}
              </div>
            </div>

            {currentQ.answered && (
              <div className={styles.explanation}>{feedback}</div>
            )}
          </div>

          <div className={styles.actionBar}>
            <div className={styles.scoreDisplay}>
              Score {score}/{total}
            </div>

            {currentQ.answered ? (
              <button
                className={`${styles.btn} ${styles.btnNext}`}
                onClick={handleNext}
              >
                {current + 1 === total ? "Finish 🎓" : "Next →"}
              </button>
            ) : (
              <div>🎈 Tap a balloon</div>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.resultOverlay}>
          <div className={styles.resultBox}>
            <div className={styles.resultEmoji}>
              {score / total >= 0.8 ? "🏆" : score / total >= 0.6 ? "🎉" : "📚"}
            </div>

            <div className={styles.resultTitle}>
              {score === total
                ? "Perfect Score!"
                : score / total >= 0.6
                  ? "Well Done!"
                  : "Keep Practising!"}
            </div>

            <div className={styles.resultSub}>
              You scored {percentage}% on this activity.
            </div>

            <div className={styles.resultScoreBig}>{score}</div>

            <div className={styles.resultScoreLbl}>out of {total} points</div>

            <div className={styles.resultBreakdown}>
              <div
                className={`${styles.rbItem}
            ${styles.rbCorrect}`}
              >
                ✓ {correctCount} correct
              </div>

              <div
                className={`${styles.rbItem}
            ${styles.rbWrong}`}
              >
                ✗ {wrongCount} wrong
              </div>
            </div>

            <div className={styles.resultBtns}>
              <button
                className={`${styles.btn}
            ${styles.btnOutline}`}
                onClick={resetQuiz}
              >
                ↺ Try Again
              </button>

              <button
                className={`${styles.btn}
            ${styles.btnPrimary}`}
                onClick={() => {
                  try {
                    window.parent.postMessage(
                      JSON.stringify({
                        done: true,
                        score,
                        total,
                      }),
                      "*",
                    );
                  } catch (_) {}
                }}
              >
                Finish 🎓
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
