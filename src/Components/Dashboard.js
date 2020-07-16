import React, { useState } from "react";

export default function Dashboard() {
  const Datalist = [
    {
      question: "what is National Bird of India?",
      questionId: 1,
      answers: [
        { ans: "Crow", id: "1" },
        { ans: "Parrot", id: "2" },
        { ans: "Peacock", id: "3" },
        { ans: "Pigeon", id: "4" }
      ],
      correctAnswer: "Peacock"
    },
    {
      question: "what is National animal of India?",
      questionId: 2,
      answers: [
        { ans: "Tiger", id: "1" },
        { ans: "Lion", id: "2" },
        { ans: "Elephant", id: "3" },
        { ans: "Giraffe", id: "4" }
      ],
      correctAnswer: "Tiger"
    }
  ];
  const [answerValue, setanswerValue] = React.useState("");
  const [Index, setIndex] = useState(0);
  const [disabledNext, setdisabledNext] = useState(false);
  const [disabledPrev, setdisabledPrev] = useState(false);
  const [correct, setcorrect] = useState();

  const getValue = e => {
    setanswerValue(e.target.value);
  };

  const Previous = e => {
    let index = Index - 1;
    let disabledPrev = index === 0;
    setIndex(index);
    console.log(Index);
    setdisabledPrev(disabledPrev);
    setdisabledNext(false);
  };
  const Next = e => {
    let index = Index + 1;
    let disabledNext = index === Datalist.length - 1;
    setIndex(index);
    setdisabledNext(disabledNext);
    setdisabledPrev(false);
    console.log(Index);
  };
  const Submit = answe => {
    Datalist.map((data, index) => {
      if (answe === data.correctAnswer) {
        setcorrect(data.correctAnswer);
      }
    });
    if (answe === correct) {
      alert("correct answer");
    } else {
      alert("incorrect answer");
    }
    //console.log(answe);
  };
  const ShowAnswer = quest => {
    Datalist.map((data, index) => {
      if (quest === data.questionId) {
        alert(data.correctAnswer);
      }
    });
  };
  const profile = Datalist ? Datalist[Index] : null;
  if (profile) {
    return (
      <div className="dashboard-main">
        <div className="dashboar-wrapper">
          <div className="question-main">
            <h4>{profile.question}</h4>
            <div className="answer-btn">
              {profile.answers.map(answe => (
                <div className="option-btn">
                  <input
                    type="radio"
                    id={answe.id}
                    value={answe.ans}
                    name="radio"
                    onClick={getValue}
                  />
                  <span className="options">{answe.ans}</span>
                </div>
              ))}
              <div className="buttons">
                <button
                  className="prev"
                  onClick={e => Previous(e)}
                  disabled={disabledPrev}
                >
                  {" "}
                  Previous
                </button>

                <button
                  className="submit"
                  onClick={e => Submit(profile.correctAnswer)}
                >
                  Submit Answer
                </button>
                <button
                  className="show"
                  onClick={e => ShowAnswer(profile.questionId)}
                >
                  Show Answer
                </button>
                <button
                  className="next"
                  onClick={e => Next(e)}
                  disabled={disabledNext}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="">Error</div>;
  }
}
