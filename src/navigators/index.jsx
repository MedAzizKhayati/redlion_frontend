import { ThemeProvider } from '@mui/material/styles';
import { useContext, useEffect, useRef, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainNavigator from './MainNavigator';
import DefaultTheme from '../shared/themes/DefaultTheme';
import { Navbar, ParticlesBackground, Matrix } from '../shared/components';
import { GlobalContext } from '../context/GlobalProvider';
import { LoadingPage } from '../pages';
import { ref } from 'yup';


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
                !loading &&
                <Matrix
                    fullscreen
                    color="red"
                    background="#04040D"
                />
            }
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                {
                    isAuthenticated &&
                    <Navbar />
                }
                <div id="main">
                    {
                        loading ?
                            <LoadingPage />
                            :
                            < MainNavigator />
                    }
                </div>

            </BrowserRouter>
        </ThemeProvider >
    );
}

export default GlobalNavigator;