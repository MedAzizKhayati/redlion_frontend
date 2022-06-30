import './styles.scss';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Card, CustomCircularProgressbar } from '../../shared/components';
import Icons from '../../shared/assets/icons';
import dnaImage from '../../shared/assets/images/dna.png';
import graphImage from '../../shared/assets/images/graph.png';
import { config, useSpring, animated } from 'react-spring';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const StatisticsPage = () => {
    const location = useLocation();

    const data = location.state;

    const [diameter, setDiameter] = useState(Math.min(window.innerHeight * 0.6, window.innerWidth * 0.8));

    useEffect(() => {
        window.addEventListener('resize', () => {
            setDiameter(Math.min(window.innerHeight * 0.6, window.innerWidth * 0.8));
        })
    }, [])


    const { reach } = useSpring({
        from: { reach: 0 },
        reach: data?.reach,
        delay: 200,
        config: config.molasses,
    });

    const { impressions } = useSpring({
        from: { impressions: 0 },
        impressions: data?.impressions,
        delay: 200,
        config: config.molasses,
    });

    const { resultsLow } = useSpring({
        from: { resultsLow: 0 },
        resultsLow: data?.result_margins[0],
        delay: 200,
        config: config.molasses,
    });

    const { resultsHigh } = useSpring({
        from: { resultsHigh: 0 },
        resultsHigh: data?.result_margins[1],
        delay: 200,
        config: config.molasses,
    });


    return (
        <div className="Statistics-container">
            <div className="Section1">
                <Zoom>
                    <Card title="Reach" backgroundColor="#1c1839" style={{ marginBottom: 10 }}>
                        <h4>Expected Results Between</h4>
                        <h2>{data?.reach_margins?.join(', ')}</h2>
                        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                            <img src={dnaImage} />
                        </div>
                    </Card>
                </Zoom>

                <Card className="blurry-bg" title="Strategy Summary" style={{ gridRowStart: 3 }}>
                    <Fade bottom>
                        <p>Your Sector is: <strong>{data?.sector} </strong></p>
                        <p>Your Goal is: <strong>{data?.goal}</strong></p>
                        <p>Your Budget is: <strong>${data?.amount}</strong></p>
                        <p>
                            Your Compaign will be from	&nbsp;
                            <strong>{data?.start_date}</strong> 	&nbsp;
                            to 	&nbsp;
                            <strong>{data?.end_date}</strong>.
                        </p>
                    </Fade>
                </Card>

            </div>
            <div className="Section2">
                <div style={{ marginBottom: 40 }}>
                    <h1 className='glow' style={{ fontSize: "xxx-large", textAlign: "center" }}>Global Statistics</h1>
                </div>
                <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-around", width: "100%" }}>
                    <div id="info">
                        <img width="35px" height="35px" className='predictions-icons' src={Icons.Reach} />
                        <div style={{ fontSize: 'small' }}>Reach</div>
                        <animated.div>{reach.to(n => n.toFixed(0))}</animated.div>
                    </div>

                    <CustomCircularProgressbar
                        title={
                            <>
                                <animated.span>{resultsLow.to(n => n.toFixed(0))}</animated.span>
                                ,
                                <animated.span>{resultsHigh.to(n => n.toFixed(0))}</animated.span>
                            </>
                        }
                        width={diameter}
                        strokeWidth={3}
                        icon={Icons[data?.objective.replace(' ', '')]}
                    />
                    <div id="info">
                        <img width="35px" height="35px" className='predictions-icons' src={Icons.Impressions} />
                        <div style={{ fontSize: 'small' }}>Impressions</div>
                        <animated.div>{impressions.to(n => n.toFixed(0))}</animated.div>
                    </div>
                </div>

            </div>
            <div className="Section3">
                <Zoom>
                    <Card title="Impressions" backgroundColor="#1c1839" style={{}}>
                        <h4>Expected Results Between</h4>
                        <h2>{data?.impressions_margins?.join(', ')}</h2>
                        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                            <img src={graphImage} />
                        </div>
                    </Card>
                </Zoom>
            </div>
        </div >
    );
}

export default StatisticsPage;