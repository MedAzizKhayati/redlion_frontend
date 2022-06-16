import './styles.scss';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useRef } from 'react';

const HomePage = () => {
    const contentRef = useRef(null);

    const scrollToContent = () => {
        contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="home-container">
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
                <h1>
                    Tell me what to put here.
                </h1>
            </div>
            <div className='footer'>
                <h1>
                    RED LION
                </h1>
            </div>
        </div>
    );
}

export default HomePage;