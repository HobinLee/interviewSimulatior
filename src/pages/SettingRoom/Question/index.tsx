import { useState } from "react";
import { useInput } from "../../../hooks";
import { Question } from "../../../store/question";
import { QuestionElementWrapper } from "./style";

type QuestionProps = {
  question: Question;
  modifyQuestion: (question: Question) => void;
  deleteQuestion: () => void;
}

const QuestionElement = ({question, modifyQuestion, deleteQuestion}: QuestionProps) => {
  const [isModify, setModify] = useState(false);
  const {
    value: modifiedQuestion,
    onChange: handleModifiedQuestion,
    setValue: setModifiedQuestion
  } = useInput(question);

  const handleModify = () => {
    setModify(true);
  }

  const handleConfirmModify = () => {
    modifyQuestion(modifiedQuestion);
    setModify(false);
  }

  const handleCancelModify = () => {
    setModifiedQuestion(question);
    setModify(false);
  }

  if (isModify) {
    return <QuestionElementWrapper>
      <input value={modifiedQuestion} onChange={handleModifiedQuestion}></input>
      <button onClick={handleConfirmModify}>
        수정 완료
      </button>
      <button onClick={handleCancelModify}>
        수정 취소
      </button>
    </QuestionElementWrapper>;
  }

  return <QuestionElementWrapper>
    <h3>{question}</h3>
    <button onClick={handleModify}>
      수정
    </button>
    <button onClick={deleteQuestion}>
      삭제
    </button>
  </QuestionElementWrapper>;
}

export default QuestionElement;