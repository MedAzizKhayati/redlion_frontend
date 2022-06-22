import './styles.scss';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import Icons from '../../shared/assets/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const HomePage = () => {
    const contentRef = useRef(null);
    const navigate = useNavigate();
    const [height, setHeight] = useState(document.body.clientHeight);

    const scrollToContent = () => {
        contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() => {
        window.addEventListener('resize', () => {
            setHeight(document.body.clientHeight)
        });
    }, []);


    return (
        <div className="home-container" style={{ height }}>
            <div className='header'>
                <TypeWriterEffect
                    startDelay={50}
                    cursorColor="red"
                    text="THE REDLION MATRIX"
                    typeSpeed={85}
                />

                <h2 className='glow' >
                    DIGITAL MARKETING SOLUTIONS
                </h2>
                <div
                    className='floating-arrow'
                    onClick={scrollToContent}
                >
                    <KeyboardArrowDownOutlinedIcon
                        color='secondary'
                        fontSize='inherit'
                        className='arrow-icon'
                    />
                </div>
            </div>
            <div className='content blurry-bg' ref={contentRef} >
                <Fade bottom>
                    <div className="ai-card active" onClick={() => navigate('/predict-facebook-compaign')} >
                        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                            <img width={height / 6} height={height / 6} src={Icons.MetaLogo} alt="meta logo" />
                        </div>

                        <h2 style={{ textAlign: "center" }} > Meta </h2>
                        <p>
                            The Meta Model is an AI solution developed by the Red Lion Team in order to
                            help companies choose their Meta marketing strategy
                            wisely and effectively.
                        </p>
                        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                            <Button
                                color='secondary'
                                className='trynow-btn'
                                sx={{
                                    fontSize: '2rem',
                                }}
                            >
                                Try now
                            </Button>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="ai-card">
                        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                            <img width={height / 6} height={height / 6} src={Icons.GoogleLogo} alt="google logo" />
                        </div>
                        <h2 style={{ textAlign: "center" }} > Google </h2>
                        <p>
                            The Google Model is an AI solution developed by the Red Lion Team in order to
                            help companies choose their Google marketing strategy
                            wisely and effectively.
                        </p>
                        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                            <Button
                                color='secondary'
                                size='large'
                                // className='trynow-btn'
                                sx={{
                                    fontSize: '2rem',
                                }}
                                onClick={() => navigate('/predict-google-compaign')}
                                disabled
                            >
                                Coming Soon
                            </Button>
                        </div>

                    </div>
                </Fade>

            </div>
        </div >
    );
}

export default HomePage;