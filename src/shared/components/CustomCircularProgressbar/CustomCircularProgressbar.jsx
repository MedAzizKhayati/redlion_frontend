import { useEffect, useState } from "react";
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";

const CustomCircularProgressbar = (props) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(Math.floor(Math.random() * 50) + 50);
    }, []);

    const {
        title,
        percentage,
        width,
        strokeWidth
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
                        <div style={{ transform: `translateY(-${width/125}px)`, height: width * 1.02, width: width * 1.02 }}>
                            <CircularProgressbarWithChildren
                                value={percentage || value}
                                strokeWidth={strokeWidth}
                                styles={buildStyles({
                                    pathColor: `red`,
                                    strokeLinecap: 'round',
                                    pathTransitionDuration: 3,
                                })}
                            >
                                <div style={{
                                    height: "100%",
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: width / 10,
                                }}>
                                    {/* {Math.floor(Math.random() * 10_000)}, {Math.floor(Math.random() * 10_000)} */}
                                    {title}
                                </div>
                            </CircularProgressbarWithChildren>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
    );
}

export default CustomCircularProgressbar;