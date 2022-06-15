import { ThemeProvider } from '@mui/material/styles';
import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainNavigator from './MainNavigator';
import DefaultTheme from '../shared/themes/DefaultTheme';
import { Navbar, ParticlesBackground, Matrix } from '../shared/components';
import { GlobalContext } from '../context/GlobalProvider';
import { LoadingPage } from '../pages';


const GlobalNavigator = () => {
    const {
        authState: {
            isAuthenticated,
            loading
        }
    } = useContext(GlobalContext);

    return (
        <ThemeProvider theme={DefaultTheme}>

            {/* <ParticlesBackground /> */}
            {
                isAuthenticated ?
                    <ParticlesBackground /> :
                    !loading && <Matrix color="red" background="#04040D" />
            }
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                {
                    isAuthenticated &&
                    <Navbar />
                }
                <div id="main">
                    {
                        loading ?
                            <LoadingPage/>
                            :
                            < MainNavigator />
                    }
                </div>

            </BrowserRouter>
        </ThemeProvider >
    );
}

export default GlobalNavigator;