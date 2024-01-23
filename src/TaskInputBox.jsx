import { PencilLine } from "lucide-react";

const TaskInputBox = ({title, titleChangeHandler, addButtonClickHandler, memo, memoChangeHandler}) => {
    return (
        <div className="task-input-box">
          <span className="task">Task</span>
          <div className="input-wrap">
            <input id="Input" autoFocus
              maxLength={13}
              value={title}
              onChange={titleChangeHandler}
              placeholder="Enter your to-do here"
            ></input>
            {/* <PiPenNib onClick={addButtonClickHandler} className="add-btn" /> */}
            <PencilLine onClick={addButtonClickHandler} className="add-btn" />
          </div>
          <textarea
            value={memo}
            onChange={memoChangeHandler}
            placeholder="Memo"
          />
        </div>
    )
}

export default TaskInputBox;