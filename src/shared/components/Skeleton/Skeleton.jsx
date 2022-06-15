import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from "@mui/material/styles";
import { Skeleton as DefaultSkeleton } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'dark',
    }
});

const Skeleton = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <DefaultSkeleton {...props} />
        </ThemeProvider>
    );
}

export default Skeleton;