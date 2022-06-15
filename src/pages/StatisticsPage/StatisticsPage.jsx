import './styles.scss';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { useEffect, useState } from 'react';
import { SkeletonCard } from '../../shared/components';
import { useLocation } from "react-router-dom";
import CustomCircularProgressbar from '../../shared/components/CustomCircularProgressbar/CustomCircularProgressbar';


const StatisticsPage = () => {
    const location = useLocation();

    const data = location.state;

    const [value, setValue] = useState(0);


    useEffect(() => {
        setValue(Math.floor(Math.random() * 50) + 50);
    }, []);

    return (
        <div className="Statistics-container">
            <div className="Section1">
                <SkeletonCard sx={{ width: "45%", height: 220, m: 1 }} />
                <SkeletonCard sx={{ width: "45%", height: 250, m: 1 }} />
                <CustomCircularProgressbar
                    title={`${data?.reachLow}, ${data?.reachHigh}`}
                    width={100}
                    strokeWidth={3}
                />
            </div>
            <div className="Section2">
                <h1 style={{ marginBottom: 100, fontSize: "xxx-large" }}>Global Statistics</h1>
                <CustomCircularProgressbar
                    title={`${data?.resultsLow}, ${data?.resultsHigh}`}
                    width={500}
                    strokeWidth={3}
                />
            </div>
            <div className="Section3">
                <SkeletonCard sx={{ width: "50%", height: 350, m: 1 }} />
                <CustomCircularProgressbar
                    title={`${data?.impressionsLow}, ${data?.impressionsHigh}`}
                    width={200}
                    strokeWidth={3}
                />
            </div>
        </div>
    );
}

export default StatisticsPage;