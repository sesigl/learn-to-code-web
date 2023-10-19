import React from "react";

export default function AttemptNavigationElement({questionId, isCorrect, num}: { questionId: string, isCorrect: boolean, num: number }) {
  return <div key={`quiz-nav-${questionId}`} className="col-auto">
    <a
        href={`#sec-${questionId}`}
        className={`button -single-icon ${isCorrect ? "-green-2" : "-red-2"} text-dark-1 size-35 rounded-8`}
    >
      <div className="text-15 lh-1 fw-500">{num}</div>
    </a>
  </div>
}