import React, { useState, useEffect } from "react";
import styles from "./SelectWordAct.module.css";

export default function SelectWordAct({ data, onNext }) {
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedWord, setSelectedWord] = useState(null); // {index: number, isCorrect: bool}
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (!data?.text) return;

    const lines = data.text.split("\n").filter((line) => line.trim() !== "");
    const parsed = lines.map((line) => {
      const match = line.match(/\*(.*?)\*/);
      const correctWord = match ? match[1] : "";
      const cleanLine = line.replace(/\*/g, "");
      const words = cleanLine.split(" ");

      return {
        words: words,
        correctValue: correctWord,
      };
    });

    setQuestions(parsed);
    setCurrentIdx(0);
    setScore(0);
    setShowResult(false);
    resetState();
  }, [data]);

  const resetState = () => {
    setSelectedWord(null);
    setShowFeedback(false);
  };

  const handleWordClick = (word, index) => {
    if (showFeedback) return;

    const isCorrect = word.includes(questions[currentIdx].correctValue);
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setSelectedWord({ index, isCorrect });
    setShowFeedback(true);
  };

  const handleNextBtn = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      resetState();
    } else {
      setShowResult(true);
    }
  };

  const handleFinalFinish = () => {
    try {
      window.parent.postMessage(JSON.stringify({ done: true }), "*");
    } catch (e) {
      console.error("Redirection message failed:", e);
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
              <div className={styles.sentenceDisplay}>
                {currentQ.words.map((word, idx) => {
                  const isCorrectTarget = word.includes(currentQ.correctValue);
                  const isSelected = selectedWord?.index === idx;

                  let wordClass = styles.word;
                  if (showFeedback) {
                    if (isCorrectTarget)
                      wordClass += ` ${styles.highlightCorrect}`;
                    if (isSelected && !selectedWord.isCorrect)
                      wordClass += ` ${styles.highlightWrong}`;
                  }

                  return (
                    <span
                      key={idx}
                      className={wordClass}
                      onClick={() => handleWordClick(word, idx)}
                    >
                      {word}
                      {isSelected && showFeedback && (
                        <span className={styles.iconMark}>
                          {selectedWord.isCorrect ? " ✓" : " ✗"}
                        </span>
                      )}
                    </span>
                  );
                })}
              </div>

              <div className={styles.footer}>
                <div className={styles.progress}>
                  Question {currentIdx + 1} of {questions.length}
                </div>
                {showFeedback && (
                  <button className={styles.nextBtn} onClick={handleNextBtn}>
                    {currentIdx === questions.length - 1 ? "Finish" : "Next"}
                  </button>
                )}
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <h2 style={{ color: "#0b4f71", fontSize: "32px" }}>
                Activity Complete!
              </h2>
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  margin: "20px 0",
                  color: "#555",
                }}
              >
                Score: {score} / {questions.length}
              </div>
              <button className={styles.nextBtn} onClick={handleFinalFinish}>
                Next Exercise
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import styles from "./SelectWordAct.module.css";

// export default function SelectWordAct({ data, onNext }) {
//   const [questions, setQuestions] = useState([]);
//   const [currentIdx, setCurrentIdx] = useState(0);
//   const [selectedWord, setSelectedWord] = useState(null); // {index: number, isCorrect: bool}
//   const [showFeedback, setShowFeedback] = useState(false);

//   useEffect(() => {
//     if (!data?.text) return;

//     const lines = data.text.split("\n").filter((line) => line.trim() !== "");
//     const parsed = lines.map((line) => {
//       // Find the word between asterisks
//       const match = line.match(/\*(.*?)\*/);
//       const correctWord = match ? match[1] : "";
//       const cleanLine = line.replace(/\*/g, "");

//       // Split into words, keeping punctuation attached to the word
//       const words = cleanLine.split(" ");

//       return {
//         words: words,
//         correctValue: correctWord,
//       };
//     });

//     setQuestions(parsed);
//     setCurrentIdx(0);
//     resetState();
//   }, [data]);

//   const resetState = () => {
//     setSelectedWord(null);
//     setShowFeedback(false);
//   };

//   const handleWordClick = (word, index) => {
//     if (showFeedback) return; // Prevent clicking after answer is shown

//     const isCorrect = word.includes(questions[currentIdx].correctValue);
//     setSelectedWord({ index, isCorrect });
//     setShowFeedback(true);
//   };

//   // 1. Update handleNextBtn to trigger the correct redirect on the last question
//   const handleNextBtn = () => {
//     if (currentIdx < questions.length - 1) {
//       setCurrentIdx(currentIdx + 1);
//       resetState();
//     } else {
//       handleFinalFinish();
//     }
//   };

//   const handleFinalFinish = () => {
//     try {
//       window.parent.postMessage(JSON.stringify({ done: true }), "*");
//     } catch (e) {
//       console.error("Redirection message failed:", e);
//     }

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

//   const currentQ = questions[currentIdx];

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.container}>
//         <div className={styles.main}>
//           {renderTitle()}

//           <div className={styles.sentenceDisplay}>
//             {currentQ.words.map((word, idx) => {
//               const isCorrectTarget = word.includes(currentQ.correctValue);
//               const isSelected = selectedWord?.index === idx;

//               let wordClass = styles.word;
//               if (showFeedback) {
//                 if (isCorrectTarget) wordClass += ` ${styles.highlightCorrect}`;
//                 if (isSelected && !selectedWord.isCorrect)
//                   wordClass += ` ${styles.highlightWrong}`;
//               }

//               return (
//                 <span
//                   key={idx}
//                   className={wordClass}
//                   onClick={() => handleWordClick(word, idx)}
//                 >
//                   {word}
//                   {isSelected && showFeedback && (
//                     <span className={styles.iconMark}>
//                       {selectedWord.isCorrect ? " ✓" : " ✗"}
//                     </span>
//                   )}
//                 </span>
//               );
//             })}
//           </div>

//           <div className={styles.footer}>
//             <div className={styles.progress}>
//               Question {currentIdx + 1} of {questions.length}
//             </div>
//             {showFeedback && (
//               <button className={styles.nextBtn} onClick={handleNextBtn}>
//                 {currentIdx === questions.length - 1 ? "Finish" : "Next"}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
