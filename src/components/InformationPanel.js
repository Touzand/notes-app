import { useState } from "react";

const InformationPanel = () => {
  const [panel, setPanel] = useState(true);

  const handlePanel = () => {
    localStorage.setItem("panel", true);
    setPanel(false);
  };

  return (
    <div className={`panel ${!panel && "panel-down"}`} id="panel">
      <div className={`panel-information ${!panel && "panel-fadeout"}`}>
        <h2>Hi! welcome to NoteNow</h2>
        <p>
          Here you can write notes using <b>Mark Down</b> or just with normal
          text. You can save and edit your note later if you want to. If u have
          any questions or doubt just tab on the "<b>?</b>"on the navigation bar
          and you will see some information to help you, so let write it.{" "}
        </p>
        <button onClick={handlePanel}>Dont show me this message again</button>
      </div>
    </div>
  );
}

export default InformationPanel;
