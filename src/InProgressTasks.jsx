const InProgressTasks = ({item, doneButtonClickHandler, delButtonClickHandler}) =>{

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
    )
}

export default InProgressTasks