import { Fragment, useRef } from 'react';
 
import Estilos from './css/Modal.module.css';

const App = () => {

  const refMyModal = useRef(null);

  // Abrir modal
  const openModal = () => {  
    refMyModal.current.style.display = 'block';
  }

  // Cerrar modal
  const closeModal = () => {
    refMyModal.current.style.display = 'none';
  }

  // Close If Outside Click
  const outsideClick = e => {
    if (e.target == refMyModal.current) {
      refMyModal.current.style.display = 'none';
    }
  }

  return (
    <Fragment>
      <button 
        className={Estilos.button}
        onClick={openModal} 
      >Click Here</button>

      <div className={Estilos.modal} ref={refMyModal} onClick={outsideClick}>
        <div className={Estilos.modalContent}>
          <div className={Estilos.modalHeader}>
            <span className={Estilos.close} onClick={closeModal}>&times;</span>
            <h2>Modal Header</h2>
          </div>
          <div className={Estilos.modalBody}>
            <p>This is my modal</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellendus nisi, sunt consectetur ipsa velit repudiandae aperiam modi quisquam nihil nam asperiores doloremque mollitia dolor deleniti quibusdam nemo commodi ab.</p>
          </div>
          <div className={Estilos.modalFooter}>
            <h3>Modal Footer</h3>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
