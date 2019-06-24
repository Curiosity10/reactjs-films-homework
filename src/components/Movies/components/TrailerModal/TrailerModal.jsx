import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './TrailerModal.scss';
import Spinner from '../../../Spinner';
import Modal from './components/Modal';
import { useBodyScrollLock, useOnClickOutside } from '../../../../hooks';

const TrailerModal = ({ toggleModal, src, isLoading }) => {
  useBodyScrollLock();
  let modal;
  const modalRef = useRef();
  useOnClickOutside(modalRef, () => toggleModal(false));

  if (isLoading) {
    modal = <Spinner />;
  } else {
    modal = (
      <>
        <iframe
          className={styles.video}
          title="trailer"
          frameBorder="0"
          src={src}
        />
      </>
    );
  }

  return (
    <Modal id="trailer" ref={modalRef}>
      <div className={styles.videoContainer}>
        {
          src || isLoading
            ? modal
            : (
              <>
                <h2 className={styles.heading}>Sorry, no trailer available</h2>
              </>
            )
        }
      </div>
    </Modal>
  );
};

TrailerModal.propTypes = {
  src: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

TrailerModal.defaultProps = {
  src: '',
  isLoading: false,
};

export default TrailerModal;
