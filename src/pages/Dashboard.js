import React, { useRef, useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import '../styles/Dashboard.css';
import Piechart from '../components/Piechart';
import Linechart from '../components/Linechart';
import { Button, Modal } from 'antd';

function Dashboard() {
    const dashboardRef = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [cropData, setCropData] = useState({});
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        fetchTodo();
    }, []);

    const fetchTodo = async () => {
        try {
            const response = await fetch('https://biotechhackathon.onrender.com/data');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const todoData = await response.json();
            setTodo(todoData);
        } catch (error) {
            console.error('Error fetching todo:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://biotechhackathon.onrender.com/data');
                const data = await response.json();
                setCropData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleDownloadPdf = async () => {
        const canvas = await html2canvas(dashboardRef.current);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('dashboard.pdf');
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const showDetailModal = () => {
        setIsDetailModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setIsDetailModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setIsDetailModalOpen(false);
    };

    return (
        

            <div className="dashboard" ref={dashboardRef}>
                <div className="crop-details">
                    <h2 className="h2style">Crop Details</h2>
                    <div className="crop-info">
                        <div className="crop-environment"></div>
                        <div className="crop-images">
                            <Button type="primary" onClick={showDetailModal} className="image-placeholder">
                                <div className="button-container">
                                    <div className="label">A</div>
                                    <div className="vertical-line"></div>
                                    <div className="details">
                                        <div>Possible Toxic Environment: <strong>Toxic</strong></div>
                                        <div>Possible Treatment: </div>
                                        <strong>CH4 Treatment: Improve Drainage, </strong>

                                        <div>CH4:<strong> 0.9</strong></div>
                                    </div>
                                </div>
                            </Button>
                            {/* Additional buttons */}
                            <Button type="primary" onClick={showModal} className="image-placeholder">+</Button>
                            <Button type="primary" onClick={showModal} className="image-placeholder">+</Button>
                            <Button type="primary" onClick={showModal} className="image-placeholder">+</Button>
                            <Button type="primary" onClick={showModal} className="image-placeholder">+</Button>
                            <Button type="primary" onClick={showModal} className="image-placeholder">+</Button>
                            <Button type="primary" onClick={showModal} className="image-placeholder">+</Button>
                            <Button type="primary" onClick={showModal} className="image-placeholder">+</Button>
                            <Button type="primary" onClick={showModal} className="image-placeholder">+</Button>

                            <Modal title="No Device Installed" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <p>Need to install device to access new plot</p>
                            </Modal>

                            <Modal title="Detailed Data" open={isDetailModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <h2>Detailed Data</h2>
                                <p><strong>Possible Toxic Environment:</strong> {cropData.possible_toxic_environment}</p>
                                <p><strong>Crop Health:</strong> {cropData.crop_health}</p>
                                <p><strong>Possible Treatment:</strong> {cropData.possible_treatment}</p>
                                <p><strong>Water Absorption:</strong> {cropData.water_absorption}</p>
                                <div className="chart-container">
                                    <div className="chart">
                                        <h3 className="h3style">Yield Growth</h3>
                                        <Piechart />
                                    </div>
                                    <div className="chart">
                                        <h3 className="h3style">Historical Data</h3>
                                        <Linechart />
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>

                <div className="reporting">
                    <button onClick={handleDownloadPdf} className="download-button">Download PDF</button>

                    <div className="report-section">
                        <h3 className="h3style">Yield Growth</h3>
                        <div className="piechart-style">
                            <Piechart />
                        </div>
                    </div>
                    <div className="report-section">
                        <h3 className="h3style">Historical Data</h3>
                        <div className="linechart-style">
                            <Linechart />
                        </div>
                    </div>
                </div>
            </div>
       
    );
}

export default Dashboard;
