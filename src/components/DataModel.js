import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const DataModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal} className="image-placeholder">
        <span>Possible Toxic Environment : ... Crop Health : ... Possible Treatment : ... Water Absorption : ...</span>
      </Button>
      <Modal title="Data Information" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Possible Toxic Environment: ...</p>
        <p>Crop Health: ...</p>
        <p>Possible Treatment: ...</p>
        <p>Water Absorption: ...</p>
      </Modal>
    </div>
  );
};

export default DataModal;
