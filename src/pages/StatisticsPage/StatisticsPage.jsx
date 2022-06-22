import './styles.scss';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Card, CustomCircularProgressbar } from '../../shared/components';
import Icons from '../../shared/assets/icons';
import dnaImage from '../../shared/assets/images/dna.png';
import graphImage from '../../shared/assets/images/graph.png';

import { formatDateToApi } from '../../shared/helpers/helpers';

const StatisticsPage = () => {
    const location = useLocation();

    const data = location.state;

    const [value, setValue] = useState(0);
    const [diameter, setDiameter] = useState(Math.min(window.innerHeight * 0.6, window.innerWidth * 0.8));

    useEffect(() => {
        setValue(Math.floor(Math.random() * 50) + 50);
    }, []);



    useEffect(() => {
        window.addEventListener('resize', () => {
            setDiameter(Math.min(window.innerHeight * 0.6, window.innerWidth * 0.8));
        })
    }, [])


    return (
        <div className="Statistics-container">
            <div className="Section1">
                {/* <CustomCircularProgressbar
                    title={`${data?.reachLow}, ${data?.reachHigh}`}
                    width={100}
                    strokeWidth={3}
                /> */}
                <Card title="Reach" backgroundColor="#1c1839" style={{ maxWidth: 'max-content', marginBottom: 10 }}>
                    <h4>Expected Results Between</h4>
                    <h2>{data?.reach_margins?.join(', ')}</h2>
                    <div style={{ display: "flex", justifyContent: "flex-start", width: "100%" }}>
                        <img src={dnaImage} />
                    </div>
                </Card>
                <Card className="blurry-bg" title="Strategy Summary" style={{ maxWidth: 'max-content', gridRowStart: 3 }}>
                    <p>Your Sector is: <strong>{data?.sector}</strong></p>
                    <p>Your Goal is: <strong>{data?.objective}</strong></p>
                    <p>Your Budget is: <strong>${data?.amount}</strong></p>
                    <p>
                        Your Compaign will be from	&nbsp;
                        <strong>{data?.start_date}</strong> 	&nbsp;
                        to 	&nbsp;
                        <strong>{data?.end_date}</strong>.
                    </p>
                </Card>
            </div>
            <div className="Section2">
                <div style={{ marginBottom: 40 }}>
                    <h1 className='drawer-header' style={{ fontSize: "xxx-large", textAlign: "center" }}>Global Statistics</h1>
                </div>
                <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-around", width: "100%" }}>
                    <div id="info">
                        <img width="35px" height="35px" className='predictions-icons' src={Icons.Reach} />
                        <div style={{ fontSize: 'small' }}>Reach</div>
                        <div style={{ fontWeight: 600 }}>{data?.reach}</div>
                    </div>

                    <CustomCircularProgressbar
                        title={data?.result_margins?.join(', ')}
                        width={diameter}
                        strokeWidth={3}
                        icon={Icons[data?.objective.replace(' ', '')]}
                    />
                    <div id="info">
                        <img width="35px" height="35px" className='predictions-icons' src={Icons.Impressions} />
                        <div style={{ fontSize: 'small' }}>Impressions</div>
                        <div style={{ fontWeight: 600 }}>{data?.impressions}</div>
                    </div>
                </div>

            </div>
            <div className="Section3">
                {/* <CustomCircularProgressbar
                    title={`${data?.impressionsLow}, ${data?.impressionsHigh}`}
                    width={200}
                    strokeWidth={3}
                /> */}
                <Card title="Impressions" backgroundColor="#1c1839" style={{ maxWidth: 'max-content' }}>
                    <h4>Expected Results Between</h4>
                    <h2>{data?.impressions_margins?.join(', ')}</h2>
                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <img src={graphImage} />
                    </div>
                </Card>
            </div>
        </div >
    );
}

export default StatisticsPage;