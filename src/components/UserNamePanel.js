const UserNamePanel = (props) => {
  const handleChange = (e) => {
    props.setUserName(e.target.value);
  };

  const handleUserNamePanel = (e) => {
    e.preventDefault();
    props.setUserNamePanel(true);
  };

  return (
    <div className="profile-container-top">
      <div
        className={`panel userNamePanel ${
          props.userNamePanel && "user-panel-down"
        }`}
        id="panel"
      >
        <div
          className={`panel-information ${
            props.userNamePanel && "user-panel-fadeout"
          }`}
        >
          <h2>What is your name?</h2>
          <input
            type="text"
            name="username"
            className="panel-input"
            onChange={handleChange}
          />
          <button onClick={handleUserNamePanel}>Call me by this name</button>
        </div>
      </div>
    </div>
  );
};

export default UserNamePanel;
