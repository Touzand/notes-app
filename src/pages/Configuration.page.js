import React, { useEffect } from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import { useStickyState } from "../hooks/useStickyState";

const Configuration = () => {
  const [configuration, setConfiguration] = useStickyState({theme:'light'}, "config");

  useEffect(() => {
    if (configuration.fullscreen) {
      var element = document.querySelector("html");
      element
        .requestFullscreen()
        .then(function () {})
        .catch(function (error) {});
    } else {
      document
        .exitFullscreen()
        .then(function () {})
        .catch(function (error) {
          console.log(error.message);
        });
    }
  }, [configuration.fullscreen]);

  const changeTheme = () =>{
      document.getElementById("main").classList.toggle("dark");
  }

  const handleChange = (e) => {
    setConfiguration({ ...configuration, [e.target.name]: e.target.value });
    if(e.target.name === 'theme'){
      changeTheme()
    }else{return}
  };

  return (
    <main className="configuration-container">
      <h2>Configuration</h2>
      <hr />
      <div className="toggle-container">
      </div>
      <div className="toggle">
        <h3>Fullscreen</h3>
        <ToggleSwitch onChange={handleChange} name="fullscreen" />
      </div>
      <div className="toggle">
        <h3>Dark mode</h3>
        <ToggleSwitch onChange={handleChange} name="theme" />
      </div>
      <div className="toggle disable">
        <h3>Small size notes</h3>
        { /*<ToggleSwitch onChange={handleChange} name="size"/>*/ }
      </div>
  </main>
  );
}

export default Configuration;
