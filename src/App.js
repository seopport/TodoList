import React, { useState } from "react";
import "./App.css";
import { PencilLine, Pin } from "lucide-react";
import { PiPenNib } from "react-icons/pi";
import { BsFillPinAngleFill } from "react-icons/bs";
import "animate.css";

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
    //인풋에 들어온 값으로 새로운 객체 만들어서 set객체
    if (title === "") {
      alert("할 일을 입력하세요");
      return;
    }
    if (memo === "") {
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
    //눌린 요소의 id
    //배열을 받아와서
    //그 배열중에 id가 누른 요소의 id와 일치하는 것만 true로 바꿔서 새로운 객체 만들고 set
    const doneTask = tasks.map((item) => {
      if (id === item.id) {
        //누른 요소만
        return {
          ...item,
          isDone: true, //isDone을 true로 바꿔라
        };
      } else return item;
    });
    setTasks(doneTask); //여기에는 누른요소만 true로바뀐 tasks배열이 들어있음
  };
  const delButtonClickHandler = (id) => {
    // 만들어진 해당 div 요소의 id값이 들어옴
    const newTask = tasks.filter((item) => {
      return id !== item.id; //원래 배열의 id값들과 지금 누른 요소의 id값이 같지 않은 것만 출력
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
        <div className="task-input-box">
          <span className="task">Task</span>
          <div className="input-wrap">
            <input
              value={title}
              onChange={titleChangeHandler}
              placeholder="Enter your to-do here"
            ></input>
            <PiPenNib onClick={addButtonClickHandler} className="add-btn" />
          </div>
          <textarea
            value={memo}
            onChange={memoChangeHandler}
            placeholder="Memo"
          />

          {/* <PencilLine onClick={addButtonClickHandler} className="add-btn" /> */}
        </div>

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
                  <div key={item.id} className="task-box">
                    <div className="title-in-task-box">{item.title}</div>
                    <hr className="hr2"></hr>
                    <div className="memo-in-task-box">{item.memo}</div>
                    <div className="btn-wrap">
                      <button
                        className="task-progress-btn"
                        onClick={() => doneButtonClickHandler(item.id)}
                      >
                        완료
                      </button>
                      <button
                        className="task-progress-btn"
                        onClick={() => delButtonClickHandler(item.id)}
                      >
                        삭제
                      </button>
                    </div>
                  </div>
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
                  <div key={item.id} className="task-box">
                    <div className="title-in-task-box">{item.title}</div>
                    <hr className="hr2"></hr>
                    <div className="memo-in-task-box">{item.memo}</div>
                    <div className="btn-wrap">
                      <button
                        className="task-progress-btn"
                        onClick={() => returnButtonClickHandler(item.id)}
                      >
                        되돌리기
                      </button>
                      <button
                        className="task-progress-btn"
                        onClick={() => delButtonClickHandler(item.id)}
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {/* <hr className="line-bottom" style={{ marginBottom: "40px" }}></hr> */}
    </div>
  );
}

export default App;
