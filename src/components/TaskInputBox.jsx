import { PencilLine } from "lucide-react";
import { useState } from "react";
import { nanoid } from "nanoid";

const TaskInputBox = ({ tasks, setTasks }) => {

  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleMemoChange = (e) => {
    setMemo(e.target.value);
  };

  const handleAddButtonClick = () => {
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

    const newTask = {
      id: nanoid(),
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
          onChange={handleTitleChange}
          placeholder="Enter your to-do here"
        ></input>
        <PencilLine onClick={handleAddButtonClick} className="add-btn" />
      </div>
      <textarea
        value={memo}
        onChange={handleMemoChange}
        placeholder="Memo"
      />
    </div>
  )
}

export default TaskInputBox;