import { Box, LinearProgress } from '@mui/material';
import image from '../../shared/assets/images/logo.png';
import { animated, useTransition } from 'react-spring'
import { GlobalContext } from '../../context/GlobalProvider';
import { useContext } from 'react';
import './styles.scss';

const LoadingPage = () => {
    const {
        authState: {
            loading
        }
    } = useContext(GlobalContext);

    const transition = useTransition(loading, {
        from: { opacity: 1 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    })


    return (
        transition((style, item) => (
            item &&
            <animated.div className="Loading-Page" style={style} >
                <img width="500px" height="500px" src={image} alt="Red Lion Logo" />
                <Box sx={{ width: '350px', marginTop: 5 }}>
                    <LinearProgress />
                </Box>
            </animated.div>
        ))
    );
}

export default LoadingPage;