import React, { useState } from "react";

function App() {
  const box = {
    border: "1px solid green",
  };

  const [tasks, setTasks] = useState([
    { id: 0, title: "", memo: "", isDone: false },
  ]);

  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");
  const [isDone, setIsDone] = useState(false);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const memoChangeHandler = (e) => {
    setMemo(e.target.value);
  };

  const addTaskButtonHandler = () => {
    //추가 버튼이 눌리면
    //input에서 받은 title과 메모를 가지고 객체를 생성한 후
    // 새로운 객체를 만들어서 set
    const newTask = {
      id: tasks.length + 1,
      title: title,
      memo: memo,
      isDone: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTaskButtonHandler = (id) => {
    // 만들어진 해당 div 요소의 id값이 들어옴
    const newTasks = tasks.filter((item) => {
      return item.id !== id; //원래 배열의 id값들과 지금 누른 요소의 id값이 같지 않은 것만 출력
    });
    setTasks(newTasks);
  };

  const doneTaskButtonHandler = (id) => {
    //배열을 받아와서
    //그 배열중에 id가 누른 요소의 id와 일치하는 것만 true로 바꿔서 새로운 객체 만들고 set
    const newTasks = tasks.map((item) => {
      if (id === item.id) {
        return {
          id: item.id,
          title: item.title,
          memo: item.memo,
          isDone: true,
        };
      } else return item;
    });
    setTasks(newTasks);
    // console.log(newTasks[id].isDone);

    //해당 요소의 isdone 상태가 true이면 완료로.
  };

  const returnTaskButtonHandler = (id) => {
    // isDone을 다시 false로
    const newTask = tasks.map((item) => {
      if (id === item.id) {
        return { ...item, isDone: false }; //구조분해할당 item의 나머지들 가져오기
      } else return item;
    });
    setTasks(newTask);
  };

  return (
    <div>
      <h1>To do List</h1>
      title <input value={title} onChange={titleChangeHandler} />
      <br />
      MEMO <input value={memo} onChange={memoChangeHandler} />
      <br />
      <button onClick={addTaskButtonHandler}> 추가 </button>
      <br />
      <div style={box}>
        <p>진행중</p>
        {/* tasks에 있는 객체들을 배열돌면서 div 추가 */}
        {tasks
          .filter((item) => {
            return item.isDone === false && item.id !== 0;
          })
          .map((item) => {
            return (
              <div key={item.id}>
                {item.title} - {item.memo}
                <button onClick={() => doneTaskButtonHandler(item.id)}>
                  완료
                </button>
                <button onClick={() => deleteTaskButtonHandler(item.id)}>
                  삭제
                </button>
              </div>
            );
          })}
      </div>
      <br />
      <div style={box}>
        <p>완료</p>
        <div>요소 추가</div>
        {tasks
          .filter((item) => {
            return item.isDone === true;
          })
          .map((item) => {
            return (
              <div key={item.id}>
                {item.title} - {item.memo}
                <button onClick={() => returnTaskButtonHandler(item.id)}>
                  되돌리기
                </button>
                <button onClick={() => deleteTaskButtonHandler(item.id)}>
                  삭제
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
