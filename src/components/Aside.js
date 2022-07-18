import { NavLink } from "react-router-dom";

const Aside = () => (
  <aside>
    <nav>
      <div className="links-container">
        <div className="link">
          <NavLink
            to="notes-app/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <i className="bi bi-archive-fill"></i>
          </NavLink>
        </div>
        <div className="link">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="notes-app/statistics"
          >
            <i className="bi bi-bar-chart-line-fill"></i>
          </NavLink>
        </div>
        <div className="link">
          <NavLink
            to="notes-app/configuration"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <i className="bi bi-gear-fill"></i>
          </NavLink>
        </div>
        <div className="link">
          <NavLink
            to="notes-app/help"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <i className="bi bi-question-lg"></i>
          </NavLink>
        </div>
      </div>
    </nav>
  </aside>
);

export default Aside;
