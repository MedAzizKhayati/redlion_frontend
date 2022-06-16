import './styles.scss';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Card, CustomCircularProgressbar } from '../../shared/components';
import Icons from '../../shared/assets/icons';
import { formatDateToApi } from '../../shared/helpers/helpers';

const StatisticsPage = () => {
    const location = useLocation();

    const data = location.state;

    const [value, setValue] = useState(0);


    useEffect(() => {
        setValue(Math.floor(Math.random() * 50) + 50);
    }, []);


    return (
        <div className="Statistics-container">
            <div className="Section1">
                {/* <CustomCircularProgressbar
                    title={`${data?.reachLow}, ${data?.reachHigh}`}
                    width={100}
                    strokeWidth={3}
                /> */}
                <Card title="Reach" backgroundColor="#1c1839" style={{ maxWidth: '60%' }}>
                    <p>
                        You're expected to <strong>reach</strong> between
                        <strong> 15654 </strong>
                        to <strong> 456554 </strong>
                        people with this current strategy.
                    </p>
                </Card>
                <Card className="blurry-bg" title="Strategy Summary" style={{ maxWidth: '90%' }}>
                    <p>Your Sector is: <strong>{data?.sector}</strong></p>
                    <p>Your Goal is: <strong>{data?.goal}</strong></p>
                    <p>Your Budget is: <strong>${data?.budget}</strong></p>
                    <p>
                        Your Compaign will be from	&nbsp;
                        <strong>{formatDateToApi(data?.startDate)}</strong> 	&nbsp;
                        to 	&nbsp;
                        <strong>{formatDateToApi(data?.endDate)}</strong>.
                    </p>
                </Card>
            </div>
            <div className="Section2">
                <div style={{ marginBottom: 50 }}>
                    <h1 className='drawer-header' style={{ fontSize: "xxx-large" }}>Global Statistics</h1>
                </div>
                <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-around", width: "100%" }}>
                    <div style={{ display: 'flex', alignItems: "center", flexDirection: "column", margin: "5px" }}>
                        <img width="35px" height="35px" className='predictions-icons' src={Icons.Comment} id="Avatar" />
                        <div style={{ fontSize: 'small' }}>Reach</div>
                        <div style={{ fontWeight: 600 }}>1565</div>
                    </div>

                    <CustomCircularProgressbar
                        title={`${data?.resultsLow}, ${data?.resultsHigh}`}
                        width={window.innerHeight * 0.6}
                        strokeWidth={3}
                        icon={Icons.Traffic}
                    />
                    <div style={{ display: 'flex', alignItems: "center", flexDirection: "column", margin: "5px" }}>
                        <img width="35px" height="35px" className='predictions-icons' src={Icons.Heart} id="Avatar" />
                        <div style={{ fontSize: 'small' }}>Impressions</div>
                        <div style={{ fontWeight: 600 }}>5478</div>
                    </div>
                </div>

            </div>
            <div className="Section3">
                {/* <CustomCircularProgressbar
                    title={`${data?.impressionsLow}, ${data?.impressionsHigh}`}
                    width={200}
                    strokeWidth={3}
                /> */}
                <Card title="Impressions" backgroundColor="#1c1839" style={{ maxWidth: '60%' }}>
                    <p>
                        You're expected to <strong>have</strong> between
                        <strong> 123456 </strong>
                        to <strong> 800000 </strong>
                        impressions.
                    </p>
                </Card>
            </div>
        </div >
    );
}

export default StatisticsPage;