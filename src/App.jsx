import { useState } from "react";
import { NoProjectsPage } from "./components/NoProjectsPage";
import { ProjectsList } from "./components/ProjectsList";
import { CreateProject } from "./components/CreateProject";
import { Project } from "./components/Project";

// let projects = { 
//   project1:{
//     title : 'Learn React',
//     description: 'Efficiently, including frameworks and libraries',
//     dueDate : 'Nov 1, 2024',
//     tasks:[
//       {taskName : 'Learn Tailwind',
//         id: 1
//       },
//       {taskName : 'Learn TS',
//         id: 2
//       },
//     ]
//   },
//   project2:{
//     title : 'Learn Node',
//     description: 'Efficiently, including frameworks and libraries',
//     dueDate : 'Jan 1, 2024',
//     tasks:[
//       {taskName : 'Learn Express',
//         id: 1
//       },
//       {taskName : 'Learn more',
//         id: 2
//       },
//     ]
//   }
// }

const projects = [
  {
    title : 'Learn React',
    description: 'Efficiently, including frameworks and libraries',
    dueDate : 'Nov 1, 2024',
    id : 1,
    tasks:[
      {taskName : 'Learn Tailwind',
        id: 1
      },
      {taskName : 'Learn TS',
        id: 2
      },
    ]
  },
  {
    title : 'Learn Node',
    description: 'Efficiently, including frameworks and libraries',
    dueDate : 'Jan 1, 2024',
    id : 2,
    tasks:[
      {taskName : 'Learn Express',
        id: 1
      },
      {taskName : 'Learn more',
        id: 2
      },
    ]
  }
]


function App() {
  const [addingProject, setAddingProject] = useState(false);
  const [viewingProject,setViewingProject] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null);

  function addProjectStatusTrue() {
    setAddingProject(true)
  }

  function finishAddingProject() {
    setAddingProject(false)
  } 

  function viewProjectStatus() {
    setViewingProject(true)
    setAddingProject(false)
  }

  function deleteProject(selectedProject) {
    const selectedIndex = selectedProject.id - 1;

    console.log(selectedIndex)

    if (selectedIndex !== -1) {
      projects.splice(selectedIndex, 1);
    }

console.log(projects);
  }

  return (
    <div className="h-screen mt-8 flex gap-8">
      <ProjectsList projects={projects} addProjectStatusTrue={addProjectStatusTrue} setSelectedProject={setSelectedProject} viewProjectStatus={viewProjectStatus}/>

      {addingProject ? <CreateProject/> : <NoProjectsPage addProjectStatusTrue={addProjectStatusTrue}/>}

    {selectedProject &&   <Project selectedProject={selectedProject} deleteProject={deleteProject}/>}
      </div>
  );
}

export default App;
