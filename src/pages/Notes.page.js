import React, { useState } from "react";
import NoteForm from "../components/NoteForm";
import Note from "../components/Note";
import UserProfilePanel from "../components/UserProfilePanel";
import NoteView from "../components/NoteView";
import NoNote from "../components/NoNotes";
import { useStickyState } from "../hooks/useStickyState";

const Notes = props => {
  const [visible, setVisible] = useState(false);
  const [noteViewData, setNoteViewData] = useState({});
  const [noteViewVisible, setNoteViewVisible] = useState(false);
  const [noteViewId, setNoteViewId] = useState();
  const [data, setData] = useStickyState([], "data");
  const [config, setConfig] = useState(
    localStorage.getItem("config")
      ? JSON.parse(localStorage.getItem("config"))
      : false
  );

  const handleDelete = (e) => {
    let newData = data;
    var index = newData.findIndex(function (item) {
      return item === newData[e.currentTarget.id];
    });
    if (index !== -1) newData.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
    window.location.reload(false);
  };

  return (
    <main>
      <button
        className="add-icon"
        onClick={() => {
          setVisible(true);
        }}
      >
        <i className="bi bi-pencil-square"></i>
      </button>


      {noteViewVisible && (
          <NoteView
            noteViewData={noteViewData}
            id={noteViewId}
            setNoteViewVisible={setNoteViewVisible}
            noteViewVisible={noteViewVisible}
            setData={setData}
            data={data}
          />
      )}

        <UserProfilePanel userProfileName={props.userName} />

      <div className="notes-bottom">
        {visible && (
          <NoteForm
            visible={visible}
            setVisible={setVisible}
            data={data}
            setData={setData}
            setNoteViewId={setNoteViewId}
          />
        )}

          {data.length === 0 ? (
            <NoNote>
            <h3>You dont have any notes :(</h3>
            <p>
              to add a note just tab on the "
              <i className="bi bi-pencil-square"></i>" bellow the screem and...
              well thats it
            </p>
          </NoNote>
        ) : (
          <div
            id="notes-container"
            style={{
              display: `${visible || noteViewVisible ? "none" : "grid"}`,
            }}
          >
            {data.map((note, index) => (
              <Note
                className={config.size ? "small-notes" : "normal-notes"}
                note={note}
                id={index}
                key={index}
                deleteEvent={handleDelete}
                setNoteViewData={setNoteViewData}
                setNoteViewVisible={setNoteViewVisible}
                setNoteViewId={setNoteViewId}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Notes;
