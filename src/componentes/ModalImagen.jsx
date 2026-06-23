function ModalImagen({ src, alt, onClose }) {
  if (!src) return null

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Cerrar" onClick={onClose}>✕</button>
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}

export default ModalImagen
