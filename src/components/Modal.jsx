import { createPortal } from "react-dom"
import { forwardRef, useImperativeHandle, useRef } from "react"

const Modal =  forwardRef(function Modal({children}, ref){

const dialog = useRef();

useImperativeHandle(ref, ()=>{
  return{  open(){
        dialog.current.showModal();
    }
}})

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog">
                <button  className="px-6 py-2 text-left rounded-md my-1 bg-stone-200 hover:text-stone-200 hover:bg-stone-800">Close</button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    )
})

export default Modal