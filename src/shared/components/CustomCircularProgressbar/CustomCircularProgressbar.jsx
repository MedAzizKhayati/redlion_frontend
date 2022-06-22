import { useEffect, useState } from "react";
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import Icons from "../../assets/icons";

const CustomCircularProgressbar = (props) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(Math.floor(Math.random() * 50) + 50);
    }, []);

    const {
        title,
        percentage,
        width,
        strokeWidth,
        icon
    } = props;

    return (
        <div style={{ height: width, width: width }}>
            <CircularProgressbarWithChildren
                strokeWidth={1}
                background
                styles={buildStyles({
                    trailColor: '#090915',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                })}
            >
                <div style={{ transform: `translateY(-${width / 125}px)`, height: "100%", width: "100%" }}>
                    <CircularProgressbarWithChildren
                        value={percentage || value}
                        strokeWidth={strokeWidth}
                        styles={buildStyles({
                            pathColor: `red`,
                            strokeLinecap: 'round',
                            pathTransitionDuration: 3,
                        })}
                    >
                        <div
                            style={{
                                height: "100%",
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: width / 10,
                            }}
                            
                        >
                            {icon &&
                                <img
                                    src={icon}
                                    style={{
                                        position: "absolute",
                                        zIndex: -1,
                                        opacity: 0.2,
                                        maxWidth: '70%',
                                        height: 'auto'
                                    }}
                                />}
                            <p className="drawer-header">
                                {/* {Math.floor(Math.random() * 10_000)}, {Math.floor(Math.random() * 10_000)} */}
                                {title}
                            </p>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            </CircularProgressbarWithChildren>
        </div>
    );
}

export default CustomCircularProgressbar;