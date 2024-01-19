import React, { useState } from "react";

function App() {
  const box = {
    border: "1px solid green",
  };

  const [tasks, setTasks] = useState([
    { id: 0, title: "식사", memo: "밥먹기" },
  ]);

  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");

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
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTaskButtonHandler = (id) => {
    // 만들어진 해당 div 요소의 id값
    const newTasks = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>To do List</h1>
      title <input value={title} onChange={titleChangeHandler} />
      <br />
      MEMO <input value={memo} onChange={memoChangeHandler} />
      <br />
      <button onClick={addTaskButtonHandler}> 추가 </button>
      <br></br> <br></br>
      <div style={box}>
        <p>진행중</p>
        {/* tasks에 있는 객체들을 배열돌면서 div 추가 */}
        {tasks.map((item) => {
          return (
            <div key={item.id}>
              {item.title} - {item.memo}
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
        <div> 요소 추가 </div>
      </div>
    </div>
  );
}

export default App;
