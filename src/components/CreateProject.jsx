export function CreateProject() {
    return(
        <form className=" mt-4 text-right">
            <button className="px-6 py-2 text-left rounded-md my-1 hover:text-stone-200 hover:bg-stone-800">Cancel</button>
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
           <div className="text-left">
           <label htmlFor ='name' className="text-sm font-bold uppercase text-stone-500">Title</label>
           <input id="name" className=" mb-8 w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
           <label htmlFor ='description' className="text-sm font-bold uppercase text-stone-500">Description</label>
            <input id="description" className="mb-8  w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
            <label htmlFor ='name' className="text-sm font-bold uppercase text-stone-500">Due Date</label>
            <input id='date' type='date' className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
           </div>
        </form>
    )
}
