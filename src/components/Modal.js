
import './modal.css'

const Modal = (props) => {

   const closeModal = () => {
      props.setModal(false)
   }

   return (
      <div className="modal">
         <div className='container-modal' >
            <p className='title'>{props.title}</p>
            <img src={props.img} alt='NA' className='img2' />
            <p className='content'>{props.content}</p>
            <p className='author'>By - {props.author}</p>
            <button onClick={closeModal}>Close</button>
         </div>
      </div>
   )
}

export default Modal;