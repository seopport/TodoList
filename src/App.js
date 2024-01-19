import React, { useState } from "react";
import "./App.css";

function App() {
  const box = {
    border: "1px solid green",
  };

  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: "",
      memo: "",
      isDone: false,
    },
  ]);

  const [title, seTitle] = useState("");
  const [memo, setMemo] = useState("");

  const titleChangeHandler = (e) => {
    seTitle(e.target.value);
  };
  const memoChangeHandler = (e) => {
    setMemo(e.target.value);
  };

  const addButtonClickHandler = () => {
    //인풋에 들어온 값으로 새로운 객체 만들어서 set객체
    if (title === "") {
      alert("할일을 입력하세요");
      return;
    }
    if (memo === "") {
      if (
        !window.confirm("메모를 입력하지 않았습니다. 할 일을 추가하시겠습니까?")
      )
        return;
    }
    const newTask = {
      id: tasks.length + 1,
      title: title,
      memo: memo,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
    console.log(tasks);
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
    <div>
      <hr className="line"></hr>
      <div>
        <h1 className="main-title">To do list</h1>
        <p className="date">{date}</p>
        <div>
          제목 <input value={title} onChange={titleChangeHandler} />
          메모 <input value={memo} onChange={memoChangeHandler} />
          <button onClick={addButtonClickHandler}>추가</button>
        </div>

        <div style={box}>
          <p>진행중</p>
          {tasks
            .filter((item) => {
              return item.isDone === false && item.id !== 0;
            })
            .map((item) => {
              return (
                <div key={item.id}>
                  {item.title} - {item.memo}
                  <button onClick={() => doneButtonClickHandler(item.id)}>
                    완료
                  </button>
                  <button onClick={() => delButtonClickHandler(item.id)}>
                    삭제
                  </button>
                </div>
              );
            })}
        </div>

        <div style={box}>
          <p>완료</p>
          {tasks
            .filter((item) => {
              return item.isDone === true;
            })
            .map((item) => {
              return (
                <div key={item.id}>
                  {item.title} - {item.memo}
                  <button onClick={() => returnButtonClickHandler(item.id)}>
                    되돌리기
                  </button>
                  <button onClick={() => delButtonClickHandler(item.id)}>
                    삭제
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
