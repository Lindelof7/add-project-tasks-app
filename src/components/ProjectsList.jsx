export function ProjectsList({
  projects,
  onStartAppProject,
  handleChooseProject,
}) {
  function handleProjectClick(project) {
    handleChooseProject(project);
  }

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-800 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <button
        className="px-6 py-2 rounded-md bg-stone-700 text-stone-50 hover:bg-stone-950"
        onClick={onStartAppProject}
      >
        {" "}
        + Add project
      </button>
      <ul className="mt-8">
        {projects.map((project) => {
          return (
            <li key={project.id} className="text-stone-400 mb-4">
              <button
                onClick={() => {
                  handleProjectClick(project);
                }}
                className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
