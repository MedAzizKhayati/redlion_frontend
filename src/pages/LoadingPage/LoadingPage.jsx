import { Box, LinearProgress } from '@mui/material';
import image from '../../shared/assets/images/logo.png';

const LoadingPage = () => {
    return (
        <div>
            <img width="500px" height="500px" style={{ borderRadius: '50%' }} src={image} id="Avatar" />
            <Box sx={{ width: '100%', marginTop: 5 }}>
                <LinearProgress />
            </Box>
        </div>
    );
}

export default LoadingPage;