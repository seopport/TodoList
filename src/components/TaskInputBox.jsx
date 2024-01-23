import { PencilLine } from "lucide-react";
import { useState } from "react";

const TaskInputBox = ({tasks, setTasks}) => {
  

  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const memoChangeHandler = (e) => {
    setMemo(e.target.value);
  };

  const addButtonClickHandler = () => {
    if (title.trim() === "") {
      alert("할 일을 입력하세요.");
      const input = document.getElementById("Input");
      input.focus();
      return;
    }
    if (memo.trim() === "") {
      if (
        !window.confirm("메모를 입력하지 않았습니다. 할 일을 추가하시겠습니까?")
      )
        return;
    }

    const lastIndexOfId = tasks.slice(-1)[0].id;

    const newTask = {
      id: lastIndexOfId + 1, //마지막 요소의 아이디에 + 1
      title: title,
      memo: memo,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
    setTitle("");
    setMemo("");
  };


    return (
        <div className="task-input-box">
          <span className="task">Task</span>
          <div className="input-wrap">
            <input id="Input" autoFocus
              maxLength={20}
              value={title}
              onChange={titleChangeHandler}
              placeholder="Enter your to-do here"
            ></input>
            {/* <PiPenNib onClick={addButtonClickHandler} className="add-btn" /> */}
            <PencilLine onClick={addButtonClickHandler} className="add-btn" />
          </div>
          <textarea
            value={memo}
            onChange={memoChangeHandler}
            placeholder="Memo"
          />
        </div>
    )
}

export default TaskInputBox;