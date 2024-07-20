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
                <div className="logo">
  <img src="src/asset/logo.jpg" alt="AgriGen Logo" />
</div>
                    <ul>
                     
                        <li><a href="/Dashboard">Dashboard</a></li>
                       
                    </ul>
                </nav>
            </header>

            <div className="dashboard" ref={dashboardRef}>
                <div className="crop-details">
                    <h2 className="h2style">Crop Details</h2>
                    <div className="crop-info">
                        <div className="crop-environment">

                        </div>
                        <div className="crop-images">
                            <Button type="primary" onClick={showModal} className="image-placeholder">
                                <span>+</span>
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

                            <Modal title="No Device Installed" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <p>Need to install device to access new plot</p>
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
        </div>
    );
}

export default Dashboard;
