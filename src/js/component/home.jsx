import React, { useState } from "react";

const Semaforo = () => {
  const [light, setLight] = useState("");

  const [purpleLight, setPurpleLight] = useState(false);

  const danger =
    light === "danger" ? "lights bg-danger clicked" : "lights bg-danger";
  const warning =
    light === "warning" ? "lights bg-warning clicked" : "lights bg-warning";
  const succes =
    light === "success" ? "lights bg-success clicked" : "lights bg-success";
  let purple = light === "purple" ? "lights purple clicked" : "lights purple";

  if (!purpleLight) {
    purple += " d-none";
  }

  const selectLight = (e) => {
    setLight(e.target.id);
  };

  const changeLight = () => {
    setLight("danger");
    if (light === "danger") {
      setLight("warning");
    } else if (light === "warning") {
      setLight("success");
    } else if(light === 'success'){
      setLight("purple");
    }else{setLight('danger')}
  };

  const newLight = () => {
    setPurpleLight(!purpleLight);
  };
  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="container d-flex flex-column bg-dark mx-auto">
        <div className={danger} id="danger" onClick={selectLight}></div>
        <div className={warning} id="warning" onClick={selectLight}></div>
        <div className={succes} id="success" onClick={selectLight}></div>
        <div className={purple} id="purple" onClick={selectLight}></div>
      </div>
      <div className="buttons">
        <button className="btn btn-success" onClick={changeLight}>
          Change Light
        </button>
      
      
        <button className="btn btn-danger" onClick={newLight}>
          Create new light
        </button>
      </div>
    </div>
  );
};

export default Semaforo;
