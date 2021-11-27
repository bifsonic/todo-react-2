export default function Task(props) {
  return (
    <div className="task">
      <div className="content">
        <input type="checkbox" defaultChecked={props.task.done} />
        <p className="text">{props.task.text}</p>
      </div>
      <div className="tags">
        <button className="tag">Today</button>
        <button className="tag">Second tag</button>
        <button className="tag">Third tag</button>
      </div>
    </div>
  );
}
