import React from 'react';
import { Modal } from 'antd';

const DetailedModal = ({ visible, data, onCancel }) => {
    const handleOk = () => {
        onCancel(); // This will close the modal
    };

    const handleCancel = () => {
        onCancel(); // This will close the modal
    };

    return (
        <Modal
            title="Detailed Information"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <button key="back" className="ant-btn" onClick={handleCancel}>
                    Cancel
                </button>,
                <button key="submit" type="primary" className="ant-btn" onClick={handleOk}>
                    OK
                </button>,
            ]}
        >
            <div>
                <p>Possible Toxic Environment: {data.toxicEnvironment}</p>
                <p>Crop Health: {data.cropHealth}</p>
                <p>Possible Treatment: {data.treatment}</p>
                <p>Water Absorption: {data.waterAbsorption}</p>
            </div>
        </Modal>
    );
};

export default DetailedModal;
