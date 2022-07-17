import { useState } from "react";
import { marked } from "marked";

const date = new Date();

const initialForm = {
  id: "",
  date: "",
  title: "",
  content: "",
};

const NoteForm = (props) => {
  const [body, setBody] = useState(initialForm);
  const [preview, setPreview] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setBody((body.date = date.toLocaleString()));
    props.setData([body, ...props.data]);
    props.setVisible(false);
    setBody(initialForm);
    localStorage.setItem(`data`, JSON.stringify(props.data.reverse()));
  };

  const handleChange = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  const handlePreview = (e) => {
    e.preventDefault();
    document.getElementById("preview").innerHTML = marked.parse(body.content);
    setPreview(true);
  };

  const handleBack = () => {
    props.setVisible(false);
    setBody(initialForm);
  };

  return (
    <div
      className="form-panel"
      style={{ visibility: `${props.visible ? "visible" : "hidden"}` }}
    >
      <form onSubmit={handleChange}>
        <div className="form-header">
          <button onClick={handleSave}>
            <i className="bi bi-box-arrow-down"></i>
          </button>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            autoFocus
          />
          <button onClick={handlePreview} tabIndex="-1">
            <i className="bi bi-back"></i>
          </button>
          <button onClick={handleBack} tabIndex="-1">
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
        <textarea
          style={{ display: `${preview ? "none" : "block"}` }}
          name="content"
          onChange={handleChange}
          placeholder={`# Todo list \n \n * Buy stuff \n * Talk to Jhon \n * Finish my workhome \n \n Later i have to visit Monita and read some books`}
        />
        <div
          className="preview"
          id="preview"
          style={{ display: `${preview ? "block" : "none"}` }}
          onClick={() => {
            setPreview(false);
          }}
        ></div>
      </form>
    </div>
  );
};

export default NoteForm;
