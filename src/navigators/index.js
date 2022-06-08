import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { BrowserRouter} from 'react-router-dom';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import DefaultTheme from '../shared/themes/DefaultTheme';
import { ParticlesBackground } from '../shared/components';

export default () => {
    // Add Global Context for Auth State.
    const [authState, setAuthState] = useState({});

    useEffect(() => {

    }, []);

    return (
        <ThemeProvider theme={DefaultTheme}>
            <BrowserRouter>
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