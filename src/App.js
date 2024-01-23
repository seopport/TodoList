import React, { useState } from "react";
import "./App.css";
import InProgressTasks from "./InProgressTasks";
import DoneTasks from "./DoneTasks";
import TaskInputBox from "./TaskInputBox";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: "",
      memo: "",
      isDone: false,
    },
  ]);

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
      alert("할 일을 입력하세요");
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
    console.log(lastIndexOfId);

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

  const doneButtonClickHandler = (id) => {
    const doneTask = tasks.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          isDone: true,
        };
      } else return item;
    });
    setTasks(doneTask);
  };
  const delButtonClickHandler = (id) => {
    const newTask = tasks.filter((item) => {
      return id !== item.id;
    });

    setTasks(newTask);
  };

  const returnButtonClickHandler = (id) => {
    const returnTask = tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: false,
        };
      } else return item;
    });
    setTasks(returnTask);
  };

  const date = new Date().toLocaleString().slice(0, 12);

  return (
    <div className="main-wrap">
      <hr className="line"></hr>
      <div className="content-wrap">
        <h1 className="main-title">
          To Do List<span className="leaf">🌿</span>
        </h1>

        <p className="date">{date}</p>
        <TaskInputBox
          title={title}
          titleChangeHandler={titleChangeHandler}
          addButtonClickHandler={addButtonClickHandler}
          memo={memo}
          memoChangeHandler={memoChangeHandler}
        />

        <div className="tasks-wrap">
          <div>
            <div className="in-progress-tag">
              <div className="in-progress-circle"></div>In progress
            </div>
            {tasks
              .filter((item) => {
                return item.isDone === false && item.id !== 0;
              })
              .map((item) => {
                return (
                  <>
                    <InProgressTasks
                      item={item}
                      key={item.id}
                      doneButtonClickHandler={doneButtonClickHandler}
                      delButtonClickHandler={delButtonClickHandler}
                    />
                  </>
                );
              })}
          </div>

          <div>
            <div className="done-tag">
              <div className="done-circle"></div>Done
            </div>
            {tasks
              .filter((item) => {
                return item.isDone === true;
              })
              .map((item) => {
                return (
                  <>
                    <DoneTasks
                      item={item}
                      returnButtonClickHandler={returnButtonClickHandler}
                      delButtonClickHandler={delButtonClickHandler}
                    />
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
