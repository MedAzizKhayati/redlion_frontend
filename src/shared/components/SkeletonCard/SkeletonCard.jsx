import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from "@mui/material/styles";
import { Skeleton } from '../';
import { Card, CardContent, CardHeader } from '@mui/material';


const theme = createTheme({
    palette: {
        mode: 'dark',
    }
});

const SkeletonCard = (props) => {
    const {
        sx = {},
        ...rest
    } = props;

    return (
        <ThemeProvider theme={theme}>
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    ...sx,
                }} 
                {...rest}
            >
                <CardHeader
                    title={
                        <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                        />
                    }
                    subheader={
                        <Skeleton animation="wave" height={10} width="40%" />
                    }
                />
                <CardContent>
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} width="80%" />
                </CardContent>

                <Skeleton sx={{ height: sx.height / 2.5 || 50 }} animation="wave" variant="rectangular" />
                <CardContent>
                    <Skeleton animation="wave" height={10} width="50%" />
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}

export default SkeletonCard;