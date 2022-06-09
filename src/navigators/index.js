import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { BrowserRouter} from 'react-router-dom';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import DefaultTheme from '../shared/themes/DefaultTheme';
import { ParticlesBackground } from '../shared/components';

const GlobalNavigator = () => {
    // Add Global Context for Auth State.
    const [authState, setAuthState] = useState({});

    useEffect(() => {
        setAuthState({});
        console.log(process.env.PUBLIC_URL);
    }, []);

    return (
        <ThemeProvider theme={DefaultTheme}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <ParticlesBackground />
                {
                    authState.isAuthenticated ?
                        <MainNavigator /> :
                        <AuthNavigator />
                }
            </BrowserRouter>
        </ThemeProvider>
    );
}   

export default GlobalNavigator;