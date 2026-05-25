import React, { useState, useEffect } from "react";
import styles from "./GroupAct.module.css";
import Confetti from "react-confetti";
import { apiService } from "../../utils/apiService";

export default function GroupAct({ data, onNext }) {
  const STORAGE_KEY = `groupact_${data?.id || "default"}`;
  const activityId =
data?.id ||
"group_act";

const userId =
Number(
localStorage.getItem(
"user_id"
));
  const [wordPool, setWordPool] = useState([]);
  const [groups, setGroups] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  useEffect(() => {

const init =
async()=>{

if(
!data?.types
)
return;

if(
isInitialized
)
return;

try{

const res =
await apiService
.getClassifyProgress(

userId,

activityId

);

if(
res?.data?.
progress_json
){

const parsed =
JSON.parse(
res.data
.progress_json
);

setWordPool(
parsed.wordPool
||[]
);

setGroups(
parsed.groups
||[]
);

setIsFinished(
parsed.isFinished
||false
);

setScore(
parsed.score
||0
);

setShowConfetti(
false
);

setIsInitialized(
true
);

return;

}

}catch{}

let allWords=[];

const initialGroups=
data.types.map(

(type,idx)=>{

const words=
type.text
.split(",")

.map(
w=>
w.trim()
);

words
.forEach(
w=>

allWords.push({

text:w,

correctGroupId:
idx

})

);

return{

...type,

id:idx,

currentWords:[]

};

}

);

setWordPool(

allWords
.sort(
()=>
Math.random()
-
0.5
)

);

setGroups(
initialGroups
);

setIsInitialized(
true
);

};

init();

},[
data,
isInitialized
]);
 useEffect(()=>{

if(
!isInitialized
)return;

apiService
.saveClassifyProgress({

user_id:
userId,

activity_id:
activityId,

progress_json:
JSON.stringify({

wordPool,

groups,

isFinished,

score

}),

score,

attempted:
wordPool.length+

groups.reduce(

(a,g)=>

a+
g.currentWords.length,

0

),

status:
isFinished
?

"COMPLETED"

:

"IN_PROGRESS"

});

},[

wordPool,

groups,

isFinished,

score,

isInitialized

]);

  const handleSort = (wordObj, groupId) => {
    // Add word to the group
    const newGroups = [...groups];
    newGroups[groupId].currentWords.push(wordObj);
    setGroups(newGroups);

    // Remove word from pool
    setWordPool(wordPool.filter((w) => w !== wordObj));
  };

  const handleReset = () => {
    if (!window.confirm("Are you sure you want to reset this activity?"))
      return;

    apiService
.saveClassifyProgress({

user_id:
userId,

activity_id:
activityId,

progress_json:
JSON.stringify({

wordPool:[],

groups:[]

}),

score:0,

attempted:0,

status:
"IN_PROGRESS"

});

    let allWords = [];
    groups.forEach((g) => {
      g.currentWords.forEach((w) => allWords.push(w));
    });
    wordPool.forEach((w) => allWords.push(w));

    setWordPool(allWords.sort(() => Math.random() - 0.5));
    setGroups(groups.map((g) => ({ ...g, currentWords: [] })));

    setIsFinished(false);
    setScore(0);
    setShowConfetti(false);

    setIsInitialized(false); // 🔥 allow fresh init again
  };
  const handleFinish = () => {
    let correctCount = 0;
    let totalCount = 0;

    groups.forEach((g) => {
      g.currentWords.forEach((w) => {
        totalCount++;
        if (w.correctGroupId === g.id) correctCount++;
      });
    });

    setScore(
correctCount
);

setIsFinished(
true
);

apiService
.completeClassify({

user_id:
userId,

activity_id:
activityId,

score:
correctCount,

attempted:
totalCount,

status:
"COMPLETED"

});

    // 🎉 trigger confetti if all correct
    if (correctCount === totalCount && totalCount > 0) {
      setShowConfetti(true);

      setTimeout(() => {
        setShowConfetti(false);
        setIsFinished(true);
      }, 2000);
    } 
  };

  const renderTitle = () => {
    const [hindi, english] = (data.title || "").split("\n");
    return (
      <div className={styles.hindiTitle}>
        {hindi}
        <br></br>
        {english}
      </div>
    );
  };

  if (isFinished) {
    return (
      <div className={styles.wrapper}>
        {showConfetti && <Confetti />}
        <div className={styles.container}>
          <div className={styles.main} style={{ textAlign: "center" }}>
            <h2 className={styles.hindiTitle}>परिणाम (Result)</h2>
            <div className={styles.finalScoreDisplay}>
              Score: {score} /{" "}
              {score +
                wordPool.length +
                groups.reduce((acc, g) => acc + g.currentWords.length, 0) -
                score}
            </div>
            <div className={styles.actionRow}>
              <button className={styles.nextBtn} onClick={onNext}>
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {showConfetti && <Confetti />}
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.titleContainer}>{renderTitle()}</div>
          {/* Word Pool */}
          <div className={styles.pool}>
            {wordPool.map((word, i) => (
              <div key={i} className={styles.draggableWord}>
                {word.text}
                <div className={styles.dropOverlay}>
                  {groups.map((g) => (
                    <button key={g.id} onClick={() => handleSort(word, g.id)}>
                      {g.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Buckets */}
          <div className={styles.bucketsContainer}>
            {groups.map((g) => (
              <div key={g.id} className={styles.bucket}>
                <div className={styles.bucketHeader}>{g.name}</div>
                <div className={styles.bucketContent}>
                  {g.currentWords.map((w, i) => (
                    <span key={i} className={styles.sortedWord}>
                      {w.text}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.footer}>
            <button className={styles.nextBtn} onClick={handleReset}>
              Reset
            </button>
            <div className={styles.actionRow}>
              {wordPool.length === 0 && (
                <button className={styles.nextBtn} onClick={handleFinish}>
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
