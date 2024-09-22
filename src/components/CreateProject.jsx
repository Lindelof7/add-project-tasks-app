import { useRef } from "react";
import Modal from "./Modal";

export function CreateProject({projects, createNewProject, cancelProjectCreation}) {
  const modal = useRef();
  
  const title = useRef('');
  const description = useRef('');
  const dueDate = useRef('');

  let newProject = {
    title: "",
    description: "",
    dueDate: "",
    id: Math.random(),
    tasks: [],
  };

  function handleSave(){
    newProject.title = title.current.value;
    newProject.description = description.current.value;
    newProject.dueDate = dueDate.current.value;

    if(newProject.title.trim() ==='' || newProject.description.trim() === '' || newProject.dueDate.trim() === ''){
      modal.current.open();
      return
    }

    createNewProject(newProject)
  } 

  function handleCancel() {
    cancelProjectCreation()
  }

  return (<>
  <Modal ref={modal}> 
    <h2 className="text-2xl font-bold text-stone-700 my-4">Invalid Input</h2>
    <p className="text-stone-500 mb-4">Oooops... You forgot to enter a value. </p>
    <p className="text-stone-500 mb-4">Please provide a valid value for every input field.</p>
  </Modal>
    <div className=" mt-4 text-right" >
      <button className="px-6 py-2 text-left rounded-md my-1 hover:text-stone-200 hover:bg-stone-800" 
      onClick={handleCancel} >
        Cancel
      </button>
      <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
    type="submit"
    onClick={handleSave}
      >
        Save
      </button>
      <div className="text-left">
        <label
          htmlFor="name"
          className="text-sm font-bold uppercase text-stone-500"
        >
          Title
        </label>
        <input
          ref={title}
          id="name"
          required
          className=" mb-8 w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
        <label
          htmlFor="description"
          className="text-sm font-bold uppercase text-stone-500"
        >
          Description
        </label>
        <input
          ref={description}
          id="description"
          required
          className="mb-8  w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
        <label
          htmlFor="name"
          className="text-sm font-bold uppercase text-stone-500"
        >
          Due Date
        </label>
        <input
          ref={dueDate}
          id="date"
          type="date"
          required
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      </div>
    </div>
    </>
  );
}
