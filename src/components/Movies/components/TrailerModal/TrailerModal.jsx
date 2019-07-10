import React, { useRef, useLayoutEffect, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TrailerModal.scss';
import Spinner from '../../../Spinner';
import Modal from './components/Modal';

const TrailerModal = ({ toggleModal, videoSrc, isLoading }) => {
  useLayoutEffect(() => {
    const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.paddingRight = `${scrollWidth}px`;
    return () => {
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.paddingRight = '0';
    };
  }, []);

  const modalRef = useRef();

  useEffect(
    () => {
      const listener = () => {
        /* istanbul ignore if  */
        if (!modalRef.current) {
          return;
        }

        toggleModal();
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [modalRef, toggleModal],
  );

  let modal;

  if (isLoading) {
    modal = <Spinner />;
  } else if (videoSrc) {
    modal = (
      <iframe
        className={styles.video}
        title="trailer"
        frameBorder="0"
        src={videoSrc}
      />
    );
  } else {
    modal = <h2 className={styles.heading}>Sorry, no trailer available.</h2>;
  }

  return (
    <Modal id="trailer" ref={modalRef}>
      <div className={styles.videoContainer}>
        { modal }
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
