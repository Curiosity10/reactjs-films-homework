import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './TrailerModal.scss';
import Spinner from '../../../Spinner';
import Modal from './components/Modal';
import { useBodyScrollLock, useOnClickOutside } from '../../../../hooks';

const TrailerModal = ({ toggleModal, videoSrc, isLoading }) => {
  useBodyScrollLock();
  let modal;
  const modalRef = useRef();
  useOnClickOutside(modalRef, () => toggleModal(false));

  if (isLoading) {
    modal = <Spinner />;
  } else {
    modal = (
      <iframe
        className={styles.video}
        title="trailer"
        frameBorder="0"
        src={videoSrc}
      />
    );
  }

  return (
    <Modal id="trailer" ref={modalRef}>
      <div className={styles.videoContainer}>
        {
          videoSrc || isLoading
            ? modal
            : (
              <>
                <h2 className={styles.heading}>Sorry, no trailer available.</h2>
              </>
            )
        }
      </div>
    </Modal>
  );
};

TrailerModal.propTypes = {
  videoSrc: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

TrailerModal.defaultProps = {
  videoSrc: '',
  isLoading: false,
};

export default TrailerModal;
