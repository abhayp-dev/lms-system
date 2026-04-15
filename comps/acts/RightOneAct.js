import React, { useState, useEffect } from "react";
import styles from "./RightOneAct.module.css";

export default function RightOneAct({ data, onNext }) {
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false); // Changed isFinished logic to showResult

  useEffect(() => {
    if (!data?.text) return;
    const lines = data.text.split("\n").filter((line) => line.trim() !== "");
    const parsed = lines.map((line) => {
      const parts = line.split(",").map((s) => s.trim());
      const correctValue = parts[0];
      const shuffledOptions = [...parts].sort(() => Math.random() - 0.5);
      return { options: shuffledOptions, correctValue: correctValue };
    });
    setQuestions(parsed);
    setScore(0);
    setShowResult(false);
    setCurrentIdx(0);
  }, [data]);

  const handleOptionClick = (option) => {
    if (showFeedback) return;
    const isCorrect = option === questions[currentIdx].correctValue;
    if (isCorrect) setScore((prev) => prev + 1);
    setSelectedOption({ text: option, isCorrect });
    setShowFeedback(true);
  };

  const handleNextBtn = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setShowResult(true); // Show results screen instead of immediately finishing
    }
  };

  const handleFinalFinish = () => {
    try {
      window.parent.postMessage(JSON.stringify({ done: true }), "*");
    } catch (e) {
      console.error("PostMessage failed", e);
    }

    if (onNext) {
      onNext();
    }
  };

  const renderTitle = () => {
    const title = data.title || "";
    const parts = title.split("\n");
    return (
      <div className={styles.titleContainer}>
        <div className={styles.hindiTitle}>{parts[0]}</div>
        {parts[1] && <div className={styles.englishTitle}>{parts[1]}</div>}
      </div>
    );
  };

  if (questions.length === 0) return null;

  const currentQ = questions[currentIdx];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.main}>
          {renderTitle()}

          {!showResult ? (
            <>
              <div className={styles.optionsGrid}>
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedOption?.text === option;
                  const isCorrectTarget = option === currentQ.correctValue;

                  let cardClass = styles.optionCard;
                  if (showFeedback) {
                    if (isCorrectTarget) cardClass += ` ${styles.correct}`;
                    if (isSelected && !selectedOption.isCorrect)
                      cardClass += ` ${styles.wrong}`;
                  }

                  return (
                    <div
                      key={idx}
                      className={cardClass}
                      onClick={() => handleOptionClick(option)}
                    >
                      <span className={styles.optionText}>{option}</span>
                    </div>
                  );
                })}
              </div>

              <div className={styles.footer}>
                <div className={styles.progress}>
                  Question {currentIdx + 1} of {questions.length}
                </div>
                <div className={styles.actionRow}>
                  {showFeedback && (
                    <button className={styles.nextBtn} onClick={handleNextBtn}>
                      {currentIdx === questions.length - 1 ? "Finish" : "Next"}
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <h2 className={styles.hindiTitle}>अभ्यास पूर्ण हुआ!</h2>
              <div className={styles.finalScoreDisplay}>
                Score: {score} / {questions.length}
              </div>
              <div
                className={styles.actionRow}
                style={{ justifyContent: "center" }}
              >
                <button className={styles.nextBtn} onClick={handleFinalFinish}>
                  Next Exercise
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import styles from "./RightOneAct.module.css";

// export default function RightOneAct({ data, onNext }) {
//   const [questions, setQuestions] = useState([]);
//   const [currentIdx, setCurrentIdx] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [score, setScore] = useState(0);
//   const [isFinished, setIsFinished] = useState(false);

//   useEffect(() => {
//     if (!data?.text) return;
//     const lines = data.text.split("\n").filter((line) => line.trim() !== "");
//     const parsed = lines.map((line) => {
//       const parts = line.split(",").map((s) => s.trim());
//       const correctValue = parts[0];
//       const shuffledOptions = [...parts].sort(() => Math.random() - 0.5);
//       return { options: shuffledOptions, correctValue: correctValue };
//     });
//     setQuestions(parsed);
//   }, [data]);

//   const handleOptionClick = (option) => {
//     if (showFeedback) return;
//     const isCorrect = option === questions[currentIdx].correctValue;
//     if (isCorrect) setScore((prev) => prev + 1);
//     setSelectedOption({ text: option, isCorrect });
//     setShowFeedback(true);
//   };

//   const handleNextBtn = () => {
//     if (currentIdx < questions.length - 1) {
//       setCurrentIdx(currentIdx + 1);
//       setSelectedOption(null);
//       setShowFeedback(false);
//     } else {
//       setIsFinished(true);
//     }
//   };

//   // FIX: This now properly triggers the playlist redirect
//   //   const handleFinalFinish = () => {
//   //     if (onNext) {
//   //       onNext();
//   //     }
//   //   };

//   // Change this in FillupAct.js
//   const handleFinalFinish = () => {
//     try {
//       // Stringify the object to match the format in MatchByAct.js
//       window.parent.postMessage(JSON.stringify({ done: true }), "*");
//     } catch (e) {
//       console.error("PostMessage failed", e);
//     }

//     // Fallback: call onNext if provided via props
//     if (onNext) {
//       onNext();
//     }
//   };

//   const renderTitle = () => {
//     const title = data.title || "";
//     const parts = title.split("\n");
//     return (
//       <div className={styles.titleContainer}>
//         <div className={styles.hindiTitle}>{parts[0]}</div>
//         {parts[1] && <div className={styles.englishTitle}>{parts[1]}</div>}
//       </div>
//     );
//   };

//   if (questions.length === 0) return null;

//   if (isFinished) {
//     return (
//       <div className={styles.wrapper}>
//         <div className={styles.container}>
//           <div className={styles.main} style={{ textAlign: "center" }}>
//             <h2 className={styles.hindiTitle}>अभ्यास पूर्ण हुआ!</h2>
//             <div className={styles.finalScoreDisplay}>
//               Your Score: {score} / {questions.length}
//             </div>
//             {/* Action container to align button right */}
//             <div className={styles.actionRow}>
//               <button className={styles.nextBtn} onClick={handleFinalFinish}>
//                 Finish
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const currentQ = questions[currentIdx];

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.container}>
//         <div className={styles.main}>
//           {renderTitle()}

//           <div className={styles.optionsGrid}>
//             {currentQ.options.map((option, idx) => {
//               const isSelected = selectedOption?.text === option;
//               const isCorrectTarget = option === currentQ.correctValue;

//               let cardClass = styles.optionCard;
//               if (showFeedback) {
//                 if (isCorrectTarget) cardClass += ` ${styles.correct}`;
//                 if (isSelected && !selectedOption.isCorrect)
//                   cardClass += ` ${styles.wrong}`;
//               }

//               return (
//                 <div
//                   key={idx}
//                   className={cardClass}
//                   onClick={() => handleOptionClick(option)}
//                 >
//                   <span className={styles.optionText}>{option}</span>
//                 </div>
//               );
//             })}
//           </div>

//           <div className={styles.footer}>
//             <div className={styles.progress}>
//               Question {currentIdx + 1} of {questions.length}
//             </div>
//             <div className={styles.actionRow}>
//               {showFeedback && (
//                 <button className={styles.nextBtn} onClick={handleNextBtn}>
//                   Next
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
