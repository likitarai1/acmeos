import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

const CustomModal = (props) => {
  const { show, onHide } = props;
  //   const [showModal, setShowModal] = useState(false);

  //   useEffect(() => {
  //     setShowModal(show);
  //   }, [show]);

  //   const handleClose = () => {
  //     setShowModal(false);
  //     // props.close();
  //     show = false;
  //   };
  return (
    <Modal show={show} onHide={onHide} centered>
      {props.children}
    </Modal>
  );
};

export default CustomModal;
