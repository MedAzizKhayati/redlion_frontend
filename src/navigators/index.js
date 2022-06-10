import { ThemeProvider } from '@mui/material/styles';
import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import DefaultTheme from '../shared/themes/DefaultTheme';
import { Navbar, ParticlesBackground } from '../shared/components';
import { GlobalContext } from '../context/GlobalProvider';

const GlobalNavigator = () => {
    const {
        authState: {
            isAuthenticated
        }
    } = useContext(GlobalContext);


    return (
        <ThemeProvider theme={DefaultTheme}>
            <ParticlesBackground />
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                {
                    isAuthenticated &&
                    <Navbar />
                }
                <div id="main">
                    {
                        isAuthenticated ?
                            <MainNavigator /> :
                            <AuthNavigator />
                    }
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default GlobalNavigator;