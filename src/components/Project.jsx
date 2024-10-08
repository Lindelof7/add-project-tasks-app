import { useRef, useState } from "react";
import Modal from "./Modal";

export function Project({ selectedProject, createTask, deleteTask, deleteProject}) {
  const taskInput = useRef("");
  const modal = useRef();

  let newTask = { taskName: "", id: Math.random() };

  function addTask() {
    newTask.taskName = taskInput.current.value;

    if(newTask.taskName.trim() === ''){
      modal.current.open()
      return
    }

    createTask(newTask, selectedProject);
  }

  
  return (
    <>
     <Modal ref={modal}>
     <h2 className="text-2xl font-bold text-stone-700 my-4">Invalid Input</h2>
    <p className="text-stone-500 mb-4">Oooops... You forgot to enter a value. </p>
    <p className="text-stone-500 mb-4">Please provide a valid value in order to add task.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-800 mb-2">
            {selectedProject.title}
          </h1>
          <button
            onClick={() => deleteProject(selectedProject.id)}
            className="text-stone-700 hover:text-red-500 px-6 py-2"
          >
            Delete
          </button>
        </div>
        <p className="text-stone-500 my-4">
          Deadline Date : {selectedProject.dueDate}
        </p>
        <p className="text-xl text-stone-900 my-4">
          {selectedProject.description}
        </p>
        <div className="w-full h-0.5 bg-neutral-400"></div>
        <h2 className="text-2xl font-bold text-stone-700 my-4">Tasks</h2>
        <input
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          ref={taskInput}
        />
        <button
          className="text-stone-600 hover:text-stone-950 ml-4"
          onClick={() => addTask()}
        >
          Add task
        </button> 
       {selectedProject.tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
       )}
        {selectedProject.tasks.length > 0 && (
           <ul className="p-4 mt-8 rounded-md bg-stone-100">
           {selectedProject.tasks.map((taskKey) => {
             return (
               <li className="flex justify-between my-4" key={taskKey.id}>
                 <p className="text-xl font-bold text-stone-900">
                   {taskKey.taskName}
                 </p>
                 <button
                   className="text-stone-700 hover:text-red-500"
                   onClick={() => {
                     deleteTask(taskKey.id, selectedProject);
                   }}
                 >
                   Clear
                 </button>
               </li>
             );
           })}
         </ul>
        )

        }
      </div>
    </>
  );
}
