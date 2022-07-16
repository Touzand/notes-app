import { useState } from "react";
import { marked } from "marked";

const NoteView = props => {
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState(props.noteViewData.content);
  const [note, setNote] = useState(props.data[props.id].content);


  const handleChange = (e) => {
    setNote(e.currentTarget.value);
  };

  const handleSave = (e) => {
    setEdit(false);
    setContent(document.querySelector("textarea").value);
    let ne = props.data[props.id];
    ne.content = note;
    props.data[props.id] = ne;
    let arr = props.data;
    localStorage.setItem("data", JSON.stringify(arr));
  };

  return (
    <div className="note-view">
      <header>
        <h3>{props.noteViewData.title}</h3>
        <div>
          {!edit ? (
            <button
              onClick={() => {
                setEdit(true);
              }}
            >
              <i className="bi bi-pencil-square"></i>
            </button>
          ) : (
            <button onClick={handleSave}>
              <i className="bi bi-box-arrow-down"></i>
            </button>
          )}
          <button
            onClick={() => {
              props.setNoteViewVisible(false);
            }}
          >
            <i className="bi bi-backspace-fill"></i>
          </button>
        </div>
      </header>
      <span> {props.noteViewData.date} </span>

      {!edit ? (
        <div
          dangerouslySetInnerHTML={{ __html: `${marked.parse(content)}` }}
        ></div>
      ) : (
        <textarea defaultValue={content} onChange={handleChange}></textarea>
      )}
    </div>
  );
}

export default NoteView;
