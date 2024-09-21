import { useState } from "react";
import { NoProjectsPage } from "./components/NoProjectsPage";
import { ProjectsList } from "./components/ProjectsList";
import { CreateProject } from "./components/CreateProject";
import { Project } from "./components/Project";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [
      {
        title: "Learn React",
        description: "Efficiently, including frameworks and libraries",
        dueDate: "Nov 1, 2024",
        id: Math.random(),
        tasks: [
          { taskName: "Learn Tailwind", id: Math.random() },
          { taskName: "Learn TS", id: Math.random() },
        ],
      },
      {
        title: "Learn Node",
        description: "Efficiently, including frameworks and libraries",
        dueDate: "Jan 1, 2024",
        id: Math.random(),
        tasks: [
          { taskName: "Learn Express", id: Math.random() },
          { taskName: "Learn more", id: Math.random() },
        ],
      },
    ],
  });

  function createTask(newTask, selectedProject) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, selectedProject.tasks.push(newTask)],
      };
    });
  }

  function deleteTask(taskId, selectedProject) {
    setProjectState((prevState) => {
      const updatedTasks = selectedProject.tasks.filter(
        (task) => task.id !== taskId
      );
      return {
        ...prevState,
        projects: [
          ...prevState.projects,
          (selectedProject.tasks = updatedTasks),
        ],
      };
    });
  }

  function handleStartAppProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function createNewProject(newProject) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function deleteProject(projectId) {
    setProjectState((prevState) => {

      const updatedProjects = prevState.projects.filter(
        (project) => project.id !== projectId
      );

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: updatedProjects,
      };
    });
  }

  function cancelProjectCreation() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleChooseProject(selectedProjectId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: selectedProjectId,
      };
    });
  }

  let content;
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectsPage handleStartAppProject={handleStartAppProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = (
      <CreateProject
        projects={projectState.projects}
        createNewProject={createNewProject}
        cancelProjectCreation={cancelProjectCreation}
      />
    );
  } else if (projectState.selectedProjectId) {
    content = (
      <Project
      deleteProject={deleteProject}
        createTask={createTask}
        deleteTask={deleteTask}
        selectedProject={projectState.selectedProjectId}
      />
    );
  }

  return (
    <div className="h-screen mt-8 flex gap-8">
      <ProjectsList
        projects={projectState.projects}
        onStartAppProject={handleStartAppProject}
        handleChooseProject={handleChooseProject}
      />
      {content}
    </div>
  );
}

export default App;
