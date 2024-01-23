const InProgressTasks = ({ tasks, setTasks, delButtonClickHandler }) => {

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

  return tasks.filter((item) => {
    return item.isDone === false && item.id !== 0;
  }).map((item) => {
    return ((
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
    ))
  })
}

export default InProgressTasks