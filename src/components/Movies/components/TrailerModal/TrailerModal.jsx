import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './TrailerModal.scss';
import Spinner from '../../../Spinner';
import Modal from './components/Modal';
import { useBodyScrollLock, useOnClickOutside } from '../../../../utils';

const TrailerModal = ({ toggleModal, videoKey, isLoading }) => {
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
          src={`https://www.youtube.com/embed/${videoKey}`}
        />
      </>
    );
  }

  return (
    <Modal id="trailer" ref={modalRef}>
      <div className={styles.videoContainer}>
        {
          videoKey || isLoading
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
  videoKey: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

TrailerModal.defaultProps = {
  videoKey: '',
  isLoading: false,
};

export default TrailerModal;
