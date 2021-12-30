import React from 'react';
import Modal from 'react-modal';
import '../assets/scss/popup.scss';

const positionStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


function Popup({status}) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(status);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    window.location.reload();
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={positionStyle}
      >
        <h2 className="mb-4" ref={(_subtitle) => (subtitle = _subtitle)}>Disclaimer</h2>
        <form>
            <p>Ether is bonded directly to the capital pool and used<br></br>as coverage funds for the network</p>
            <div className="form-check d-flex justify-content-center">
                <input className="form-check-input form-check--custom me-2" type="checkbox" value="" id="agree_policy" name="agree_policy" />
                <label className="form-check-label form-check-label--custom" for="agree_policy">
                    I agree with the above
                </label>
            </div>
            <button className="btn mt-4 mb-3" onClick={closeModal}>Confirm</button>
        </form>
      </Modal>
    </div>
  );
}

export default Popup;
