export default function TaskForm(props) {
  return (
    <div className="task-form">
      <textarea
        className="task-textarea"
        value={props.value}
        onChange={(e) => props.onChange(e)}
      ></textarea>
      <button
        onClick={(e) => props.onSubmit(e)}
        className="task-create-btn"
      ></button>
    </div>
  );
}
