const Tasks = ({ tasks, setTasks, isDone }) => {

    const handleDeleteButtonClick = (id) => {
        if (window.confirm("삭제하시겠습니까?")) {
            const newTask = tasks.filter((item) => {
                return id !== item.id;
            });

            setTasks(newTask);
        } return;
    };

    const handleDoneButtonClick = (id) => {
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

    const handleReturnButtonClick = (id) => {
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
        return item.id !== 0 && item.isDone === isDone;
    }).map((item) => {
        return (
            <div key={item.id} className="task-box">
                <div className="title-in-task-box">{item.title}</div>
                <hr className="hr2"></hr>
                <div className="memo-in-task-box">{item.memo}</div>
                <div className="btn-wrap">
                    {isDone ?
                        <>
                            <button
                                className="task-progress-btn"
                                onClick={() => handleReturnButtonClick(item.id)}
                            >되돌리기</button>
                            <button
                                className="task-progress-btn"
                                onClick={() => handleDeleteButtonClick(item.id)}
                            >삭제</button>
                        </>
                        : <>
                            <button
                                className="task-progress-btn"
                                onClick={() => handleDoneButtonClick(item.id)}
                            >완료</button>
                            <button
                                className="task-progress-btn"
                                onClick={() => handleDeleteButtonClick(item.id)}
                            >삭제</button>
                        </>
                    }
                </div>
            </div>
        )
    })
}

export default Tasks;

