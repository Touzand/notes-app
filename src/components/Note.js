import { marked } from "marked";

const Note = props => {

  const handleViewNote = (e) => {
    props.setNoteViewData(props.note);
    props.setNoteViewVisible(true);
    props.setNoteViewId(props.id);
  };

  return (
    <article className="note">
      <div className="note-header">
        <span> {props.note.title} </span>
        <div>
          <button
            onClick={props.deleteEvent}
            className="note-header-button"
            id={props.id}
          >
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
      </div>
      <span className="note-date"> {props.note.date} </span>
      <div
        onClick={handleViewNote}
        id="note-content"
        className={props.className ? `${props.className}` : "classs"}
        dangerouslySetInnerHTML={{
          __html: `${marked.parse(props.note.content)}`,
        }}
      ></div>
    </article>
  );
}

export default Note;
