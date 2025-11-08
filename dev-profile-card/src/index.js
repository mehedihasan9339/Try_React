import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://t3.ftcdn.net/jpg/05/40/62/46/360_F_540624608_gGfUf4SuPCzzBPA3GPoH6nHphsSEMDeA.jpg"
      alt="Avatar"
    />
  );
}

function Intro() {
  return (
    <div className="intro">
      <h2>About Me</h2>
      <p>
        Hello! I'm a software developer with a passion for creating web
        applications.
      </p>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Node.js" emoji="🟢" color="lightblue" />
      <Skill skill="Python" emoji="🐍" color="orange" />
      <Skill skill="Django" emoji="🌿" color="yellow" />
    </div>
  );
}

//React V18+
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
