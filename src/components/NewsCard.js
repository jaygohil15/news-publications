import { useState } from 'react'
import './newsCard.css'

import Modal from './Modal'

const NewsCard = (props) => {

   const [modal, setModal] = useState(false)

   const openModal = () => {
      setModal(true)
   }

   return (
      <>
         {
            modal ? '' : (
               <>
                  <div className='card' >
                     <img src={props.img} alt='NA' className='img1' />
                     <div className='container'>
                        <p className='author'>By {props.author} - {props.title} </p>
                        <p>{props.desc}</p>
                        <button onClick={openModal}> Open Article</button>
                     </div>
                  </div>
               </>
            )
         }
         {
            modal ? <Modal setModal={setModal} author={props.author} title={props.title} content={props.content} img={props.img} /> : ''
         }
      </>
   )
}

export default NewsCard