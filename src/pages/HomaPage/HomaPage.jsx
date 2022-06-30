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
import useIsInViewport from '../../shared/hooks/useInViewport';

const HomePage = () => {
    const contentRef = useRef(null);
    const videoRef = useRef(null);
    const videoContainerRef = useRef(null);
    const isVideoInViewport = useIsInViewport(videoRef);
    const navigate = useNavigate();
    const [height, setHeight] = useState(document.body.clientHeight);

    const scrollToContent = () => {
        contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const scrollToVideo = () => {
        videoContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() => {
        window.addEventListener('resize', () => {
            setHeight(document.body.clientHeight)
        });
    }, []);


    useEffect(() => {
        if (isVideoInViewport) {
            videoRef.current.play();
        }
        else {
            videoRef.current.pause();
        }
    }, [isVideoInViewport]);

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
                    onClick={scrollToVideo}
                >
                    <KeyboardArrowDownOutlinedIcon
                        color='secondary'
                        fontSize='inherit'
                        className='arrow-icon'
                    />
                </div>
            </div>

            <div className='video-container' ref={videoContainerRef} >
                <video ref={videoRef} muted  >
                    <source src="https://redlionmatrix.tech/wp-content/uploads/2022/01/matrixxx.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
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
                <Zoom>
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
                </Zoom>
                <Zoom>
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
                </Zoom>
            </div>
            <div className='footer blurry-bg'>
                <p>
                    2021 © Redlionandcompany, All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default HomePage;