import React, { useRef, useState } from 'react'; // Added useState
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import '../styles/Dashboard.css';
import Piechart from '../components/Piechart';
import Linechart from '../components/Linechart';
import { Button, Modal } from 'antd';

function Dashboard() {
    const dashboardRef = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false); // Moved here

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

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="dashboard-container">
            <header>
                <nav>
                    <div className="logo">Agri<span>Gen</span></div>
                    <ul>
                        <li><a href="/HomePage">Home</a></li>
                        <li><a href="/Dashboard">Dashboard</a></li>
                        <li><a href="/SignInPage.js">Login</a></li>
                    </ul>
                </nav>
            </header>

            <div className="dashboard" ref={dashboardRef}>
                <div className="crop-details">
                    <h2>Crop Details</h2>
                    <div className="crop-info">
                        <div className="crop-environment">

                        </div>
                        <div className="crop-images">
                            <Button type="primary" onClick={showModal} className="image-placeholder">
                                +
                            </Button>
                            <Button type="primary" onClick={showModal} className="image-placeholder">
                                +
                            </Button>
                            <Button type="primary" onClick={showModal} className="image-placeholder">
                                +
                            </Button>

                            <Button type="primary" onClick={showModal} className="image-placeholder">
                                +
                            </Button>
                            <Button type="primary" onClick={showModal} className="image-placeholder">
                                +
                            </Button>
                            <Button type="primary" onClick={showModal} className="image-placeholder">
                                +
                            </Button>

                            <Button type="primary" onClick={showModal} className="image-placeholder">
                                +
                            </Button>
                            <Button type="primary" onClick={showModal} className="image-placeholder">
                                +
                            </Button>
                            <Button type="primary" onClick={showModal} className="image-placeholder">
                                +
                            </Button>

                            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <p>Possible toxic environment</p>
                                <p>water absorption</p>
                                <p></p>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className="reporting">
                    <h2 className="reporting-title">Reporting</h2>
                    <div className="report-section">
                        <h3>Yield Growth</h3>
                        <Piechart />
                    </div>
                    <div className="report-section">
                        <h3>Historical Data</h3>
                        <Linechart />
                    </div>
                    <button onClick={handleDownloadPdf} className="download-button">Download PDF</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
