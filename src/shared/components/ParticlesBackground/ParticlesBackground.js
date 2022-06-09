import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
    return (
        <Particles
            id="tsparticles"
            init={(main) => loadFull(main)}
            options={{
                fullScreen: {
                    "enable": true,
                    "zIndex": -5
                },
                background: {
                    color: {
                        value: "#04040D",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#f00",
                    },
                    links: {
                        color: "#f00",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    // collisions: {
                    //     enable: true,
                    // },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.9,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}


export default ParticlesBackground;