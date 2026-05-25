import React, { useEffect, useState } from "react";
import styles from "./WordClimbAct.module.css";
import { apiService } from "../../utils/apiService";
import Confetti from "react-confetti";

const LABELS = ["A", "B", "C", "D", "E"];

function parseOptions(raw) {
  return (raw || "")
    .split(/\n|,/)
    .map((x) => x.trim())
    .filter(Boolean);
}

function normalizeQuestions(raw) {
  return raw.map((q) => {
    const opts = parseOptions(q.options);

    let correctIndex = 0;

    const cleaned = opts.map((o, i) => {
      if (o.includes("*")) {
        correctIndex = i;
        return o.replace("*", "");
      }

      return o;
    });

    return {
      qText: q.qText,
      options: cleaned,
      correctIndex,
      selectedOption: null,
      answered: false,
      userChoice: null,
    };
  });
}

export default function WordClimbAct({ data }) {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [stageStatus, setStageStatus] = useState([]);
  const [position, setPosition] = useState(1);
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState("STARTED");
  const [showConfetti, setShowConfetti] = useState(false);

  const total = questions.length;

  const activityId = data?.id;

  useEffect(() => {
    if (data?.questions) {
      const q = normalizeQuestions(data.questions);

      setQuestions(q);

      setStageStatus(Array(q.length).fill("pending"));

      setPosition(1);
    }
  }, [data]);

  const currentQ = questions[current];

  const handleSelect = (i) => {
    if (currentQ.answered) return;

    const updated = [...questions];

    updated[current].selectedOption = i;

    setQuestions(updated);
  };

  const handleSubmit = () => {
    if (currentQ.selectedOption == null) return;

    const updated = [...questions];
    const q = { ...updated[current] };

    q.answered = true;
    q.userChoice = q.selectedOption;

    let newScore = score;
    const correct = q.userChoice === q.correctIndex;

    const updatedStages = [...stageStatus];

    if (correct) {
      newScore++;

      updatedStages[current] = "correct";

      setFeedback("🎉 Correct!");

      // move ahead ONLY for correct answer
      setPosition((prev) => Math.min(prev + 1, total));

      setShowConfetti(true);

      setTimeout(() => {
        setShowConfetti(false);
      }, 1500);
    } else {
      updatedStages[current] = "wrong";

      setFeedback(`❌ Wrong! Correct answer: ${q.options[q.correctIndex]}`);

      // don't move
    }

    updated[current] = q;

    setQuestions(updated);
    setStageStatus(updatedStages);
    setScore(newScore);

    // Reach finish only if ALL answers are correct
    if (newScore === total) {
      setPosition(total + 1);
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
    const q = normalizeQuestions(data.questions);

    setQuestions(q);
    setCurrent(0);
    setScore(0);
    setStageStatus(Array(q.length).fill("pending"));
    setPosition(1);
    setFeedback("");
    setShowConfetti(false);
    setStatus("STARTED");
  };

  if (!questions.length) return null;

  const percentage = Math.round((score / total) * 100);

  return (
    <div className={styles.wrapper}>
      {showConfetti && <Confetti />}

      {status !== "SUMMARY" ? (
        <div className={styles.container}>
          <div className={styles.instructionCard}>
            <div className={styles.instrIcon}>🏃</div>

            <div>
              <div className={styles.instrTitle}>Word Climb Challenge</div>
            </div>
          </div>

          <div className={styles.progressContainer}>
            <div className={styles.raceTrack}>
              <div className={styles.trackLine}></div>

              <div
                className={styles.runner}
                style={{
                  right: `calc(${(position / (total + 1)) * 100}% - 24px)`,
                }}
              >
                🏃‍♂️
              </div>

              <div className={styles.finish}>🏁</div>
            </div>
          </div>

          <div className={styles.questionCard}>
            <div className={styles.qHeader}>Question {current + 1}</div>

            <div className={styles.optionsGrid}>
              <div className={styles.questionText}>{currentQ.qText}</div>

              {currentQ.options.map((opt, i) => (
                <button
                  key={i}
                  className={`${styles.option}
${currentQ.selectedOption === i ? styles.optionSelected : ""}`}
                  onClick={() => handleSelect(i)}
                >
                  <div className={styles.optLabel}>{LABELS[i]}</div>

                  <div className={styles.optText}>{opt}</div>
                </button>
              ))}
            </div>

            {currentQ.answered && (
              <div className={styles.explanation}>{feedback}</div>
            )}
          </div>

          <div className={styles.actionBar}>
            <div className={styles.scoreDisplay}>
              Score {score}/{total}
            </div>

            {!currentQ.answered ? (
              <button
                className={`${styles.btn}
${styles.btnPrimary}`}
                onClick={handleSubmit}
              >
                Submit
              </button>
            ) : (
              <button
                className={`${styles.btn}
${styles.btnNext}`}
                onClick={handleNext}
              >
                {current + 1 === total ? "Finish 🎓" : "Next →"}
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.resultOverlay}>
          <div className={styles.resultBox}>
            <div className={styles.resultEmoji}>
              {percentage === 100 ? "🏆" : percentage >= 60 ? "🥈" : "😔"}
            </div>

            <div className={styles.resultTitle}>
              {percentage === 100
                ? "Winner!"
                : percentage >= 60
                  ? "Runner Up!"
                  : "You Lost"}
            </div>

            <div className={styles.resultSub}>
              {percentage === 100
                ? "Amazing! All answers correct."
                : percentage >= 60
                  ? "Good job! You passed."
                  : "Practice and try again."}
            </div>

            <div className={styles.resultBtns}>
              <button
                className={`${styles.btn}
${styles.btnOutline}`}
                onClick={resetQuiz}
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
