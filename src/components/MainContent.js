import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "../pages/Notes.page";
import Help from "../pages/Help.page";
import Statistics from "../pages/Statistics.page";
import Configuration from "../pages/Configuration.page";
import Aside from "./Aside";
import InformationPanel from "./InformationPanel";
import UserNamePanel from "./UserNamePanel";
import { useStickyState } from "../hooks/useStickyState";

function MainContent() {
  const [userName, setUserName] = useStickyState(null, "userName");
  const [userNamePanel, setUserNamePanel] = useStickyState(
    false,
    "userNamePanel"
  );

  const [theme, setTheme] = useState(
    localStorage.getItem("config")
      ? JSON.parse(localStorage.getItem("config"))
      : false
  );

  useEffect(() => {
    if (localStorage.getItem("panel") !== null) {
      document.querySelectorAll("#panel")[1].style.display = "none";
    }
  }, []);

  return (
    <div id="main" className={theme.theme ? "dark" : "light"}>
      <div className="general-container">
        {UserNamePanel && (
          <UserNamePanel
            userName={userName}
            setUserName={setUserName}
            userNamePanel={userNamePanel}
            setUserNamePanel={setUserNamePanel}
          />
        )}
        <InformationPanel />
        <div className="main-container">
          <Router>
            <Routes>
              <Route path="notes-app/" exact element={<Notes userName={userName} />} />
              <Route path="notes-app/help" exact element={<Help />} />
              <Route path="notes-app/statistics" exact element={<Statistics />} />
              <Route path="notes-app/configuration" exact element={<Configuration />} />
            </Routes>
            <div className="aside-container">
              <Aside />
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
