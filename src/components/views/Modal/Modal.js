import styles from './Modal.module.scss';

const Modal = ({ active, setActive, removePost}) => {
  const closeModal = () => setActive(false);

  return (
    <div className={active ? `${styles.modal} ${styles.active}` : `${styles.modal}`} onClick={() => setActive(false)}>
      <div className={styles.popupContent} onClick={e => { e.stopPropagation() }}>
        <button className={styles.closeBtn} onClick={closeModal}></button>
        <h3>Are you sure?</h3>
        <button className='btn btn-secondary me-2' onClick={closeModal}>Cancel</button>
        <button className='btn btn-danger' onClick={removePost}>Remove</button>
      </div>
    </div>
  )
}

export default Modal;