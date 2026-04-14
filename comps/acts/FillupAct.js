import React, { useState, useEffect } from "react";
import styles from "./FillupAct.module.css";

export default function FillupAct({ data, onNext }) {
  const [sentences, setSentences] = useState([]);
  const [activeBlank, setActiveBlank] = useState(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (!data?.text) return;

    const rawLines = data.text.split("\n").filter((line) => line.trim() !== "");
    const parsed = rawLines.map((line, idx) => {
      const match = line.match(/\*(.*?)\*/);
      const fullMatch = match ? match[0] : "";
      const optionsPart = match ? match[1] : "";

      const options = optionsPart
        .split(/[()]/)
        .map((s) => s.trim())
        .filter(Boolean);

      return {
        id: idx,
        parts: line.split(fullMatch),
        options: options,
        correctAnswer: options[0], // Assuming the first option is the correct one
        userAnswer: null,
      };
    });

    setSentences(parsed);
    setShowResult(false); // Reset result view if data changes
  }, [data]);

  const handleSelectOption = (sentenceIdx, option) => {
    const updated = [...sentences];
    updated[sentenceIdx].userAnswer = option;
    setSentences(updated);
    setActiveBlank(null);
  };

  const handleFinish = () => {
    setShowResult(true);
  };

  const handleProceed = () => {
    try {
      window.parent.postMessage(JSON.stringify({ done: true }), "*");
    } catch (e) {
      console.error("PostMessage failed", e);
    }

    if (onNext) {
      onNext();
    }
  };

  const score = sentences.filter(
    (s) => s.userAnswer === s.correctAnswer,
  ).length;

  if (sentences.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          {data?.title && <div className={styles.hindiTitle}>{data.title}</div>}
          {data?.englishTitle && (
            <div className={styles.englishTitle}>{data.englishTitle}</div>
          )}
        </div>

        <div className={styles.main}>
          {!showResult ? (
            <>
              <div className={styles.sentencesList}>
                {sentences.map((s, idx) => (
                  <div key={s.id} className={styles.sentenceRow}>
                    <div className={styles.sentenceText}>
                      {s.parts[0]}
                      <span
                        className={`${styles.blankSpace} ${s.userAnswer ? styles.filled : ""}`}
                        onClick={() =>
                          setActiveBlank(activeBlank === idx ? null : idx)
                        }
                      >
                        {s.userAnswer || "______"}
                      </span>
                      {s.parts[1]}
                    </div>

                    {activeBlank === idx && (
                      <div className={styles.optionPicker}>
                        {s.options.map((opt, i) => (
                          <button
                            key={i}
                            className={styles.optionBtn}
                            onClick={() => handleSelectOption(idx, opt)}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className={styles.controls}>
                <div className={styles.scoreBoard}>
                  Answered: {sentences.filter((s) => s.userAnswer).length} /{" "}
                  {sentences.length}
                </div>
                {sentences.every((s) => s.userAnswer) && (
                  <button className={styles.finishBtn} onClick={handleFinish}>
                    Finish
                  </button>
                )}
              </div>
            </>
          ) : (
            <div
              className={styles.resultContainer}
              style={{ textAlign: "center", padding: "40px 0" }}
            >
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
                Score: {score} / {sentences.length}
              </div>
              <button className={styles.finishBtn} onClick={handleProceed}>
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
// import styles from "./FillupAct.module.css";

// export default function FillupAct({ data, onNext }) {
//   const [sentences, setSentences] = useState([]);
//   const [activeBlank, setActiveBlank] = useState(null);

//   useEffect(() => {
//     if (!data?.text) return;

//     const rawLines = data.text.split("\n").filter((line) => line.trim() !== "");
//     const parsed = rawLines.map((line, idx) => {
//       const match = line.match(/\*(.*?)\*/);
//       const fullMatch = match ? match[0] : "";
//       const optionsPart = match ? match[1] : "";

//       const options = optionsPart
//         .split(/[()]/)
//         .map((s) => s.trim())
//         .filter(Boolean);

//       return {
//         id: idx,
//         parts: line.split(fullMatch),
//         options: options,
//         userAnswer: null,
//       };
//     });

//     setSentences(parsed);
//   }, [data]);

//   const handleSelectOption = (sentenceIdx, option) => {
//     const updated = [...sentences];
//     updated[sentenceIdx].userAnswer = option;
//     setSentences(updated);
//     setActiveBlank(null);
//   };

//   const handleFinish = () => {
//     try {
//       // Stringify the object to match the format in MatchByAct.js
//       window.parent.postMessage(JSON.stringify({ done: true }), "*");
//     } catch (e) {
//       console.error("PostMessage failed", e);
//     }

//     if (onNext) {
//       onNext();
//     }
//   };

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.container}>
//         <div className={styles.titleContainer}>
//           {data?.title && <div className={styles.hindiTitle}>{data.title}</div>}
//           {data?.englishTitle && (
//             <div className={styles.englishTitle}>{data.englishTitle}</div>
//           )}
//         </div>

//         <div className={styles.main}>
//           <div className={styles.sentencesList}>
//             {sentences.map((s, idx) => (
//               <div key={s.id} className={styles.sentenceRow}>
//                 <div className={styles.sentenceText}>
//                   {s.parts[0]}
//                   <span
//                     className={`${styles.blankSpace} ${s.userAnswer ? styles.filled : ""}`}
//                     onClick={() =>
//                       setActiveBlank(activeBlank === idx ? null : idx)
//                     }
//                   >
//                     {s.userAnswer || "______"}
//                   </span>
//                   {s.parts[1]}
//                 </div>

//                 {activeBlank === idx && (
//                   <div className={styles.optionPicker}>
//                     {s.options.map((opt, i) => (
//                       <button
//                         key={i}
//                         className={styles.optionBtn}
//                         onClick={() => handleSelectOption(idx, opt)}
//                       >
//                         {opt}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className={styles.controls}>
//             <div className={styles.scoreBoard}>
//               Answered: {sentences.filter((s) => s.userAnswer).length} /{" "}
//               {sentences.length}
//             </div>
//             {sentences.length > 0 && sentences.every((s) => s.userAnswer) && (
//               <button className={styles.finishBtn} onClick={handleFinish}>
//                 Finish
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
