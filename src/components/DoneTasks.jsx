const DoneTasks = ({tasks, setTasks,  delButtonClickHandler}) => {

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

  return tasks.filter((item) => {
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
      )});

}

export default DoneTasks;