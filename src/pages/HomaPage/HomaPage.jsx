import './styles.scss';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import Icons from '../../shared/assets/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
        <div className="home-container" style={{ height }} >
            <div className='header'>
                <h1 className='glow'>
                    Welcome to RED LION
                </h1>
                <h2 >
                    Marketing Solutions
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
                <div className="ai-card">
                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <img width={height / 5} height={height / 5} src={Icons.MetaLogo} />
                    </div>

                    <h2 style={{ textAlign: "center" }} > Meta Ads Model</h2>
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
                            onClick={() => navigate('/predict-facebook-compaign')}
                        >
                            Try now
                        </Button>
                    </div>
                </div>
                <div className="ai-card">
                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <img width={height / 5} height={height / 5} src={Icons.GoogleLogo} />
                    </div>
                    <h2 style={{ textAlign: "center" }} > Google Ads Model </h2>
                    <p>
                        The Google Model is an AI solution developed by the Red Lion Team in order to
                        help companies choose their Google marketing strategy
                        wisely and effectively.
                    </p>
                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <Button
                            color='secondary'
                            size='large'
                            className='trynow-btn'
                            sx={{
                                fontSize: '2rem',
                            }}
                            onClick={() => navigate('/predict-google-compaign')}
                        >
                            Try now
                        </Button>
                    </div>

                </div>
            </div>
            {/* <div className='footer'>
                <h1>
                    RED LION
                </h1>
            </div> */}
        </div>
    );
}

export default HomePage;