import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import api from "./services/api";

function App() {
  const [projects, setProjects] = useState([]);

  const handleAddProject = async () => {
    try {
      const { data } = await api.post("projects", {
        title: "Front-end com ReactJS",
        owner: "Diego",
      });
      setProjects([...projects, data]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    api.get("/projects").then(({ data }) => {
      console.log(data);
      setProjects(data);
    });
  }, []);

  return (
    <>
      <Header title="Projects" />
      {console.log(projects)}
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar novo projeto
      </button>
    </>
  );
}

export default App;
