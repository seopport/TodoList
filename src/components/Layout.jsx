import React, { useState } from "react";
import "../App.css";
import InProgressTasks from "./InProgressTasks.jsx";
import DoneTasks from "./DoneTasks.jsx";
import TaskInputBox from "./TaskInputBox.jsx";

const Layout = () => {
    const [tasks, setTasks] = useState([
        {
            id: 0,
            title: "",
            memo: "",
            isDone: false,
        },
    ]);

    const delButtonClickHandler = (id) => {
        if (window.confirm("삭제하시겠습니까?")) {
            const newTask = tasks.filter((item) => {
                return id !== item.id;
            });

            setTasks(newTask);
        } return;
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
                <TaskInputBox tasks={tasks} setTasks={setTasks} />

                <div className="tasks-wrap">
                    <div>
                        <div className="in-progress-tag">
                            <div className="in-progress-circle"></div>In progress
                        </div>
                        <InProgressTasks
                            tasks={tasks}
                            setTasks={setTasks}
                            delButtonClickHandler={delButtonClickHandler}
                        />
                    </div>

                    <div>
                        <div className="done-tag">
                            <div className="done-circle"></div>Done
                        </div>
                        <DoneTasks
                            tasks={tasks}
                            setTasks={setTasks}
                            delButtonClickHandler={delButtonClickHandler}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;