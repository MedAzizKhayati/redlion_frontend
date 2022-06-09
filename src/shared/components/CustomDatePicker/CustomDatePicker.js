import { DateRange } from 'react-date-range';
import { Button } from "@mui/material"
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import "./styles.scss";



const CustomDatePicker = (props) => {
    const {
        onChange,
        handleBack,
        handleSubmit,
        loading,
        ...otherProps
    } = props;

    const handleSelect = (date) => {
        onChange([date.selection])
    }

    return (
        <div className="DateRange-container">
            <DateRange
                className="Wrapper"
                editableDateInputs={true}
                onChange={handleSelect}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                direction="horizontal"
                {...otherProps}
            />
            <div className="Buttons-wrapper">
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleBack}
                    sx={{
                        borderRadius: 6,
                        backgroundColor:"red!important",
                        color:"white!important",
                        opacity: loading ? 0.5 : 1,
                    }}
                    disabled={loading}
                >
                    Back
                </Button>
                <LoadingButton
                    loadingPosition="start"
                    color="secondary"
                    variant="contained"
                    startIcon={<SaveIcon />}
                    sx={{
                        borderRadius: 6,
                        backgroundColor:"red!important",
                        color:"white!important",
                        opacity: loading ? 0.5 : 1,
                    }}
                    disabled={loading}
                    loading={loading}
                    onClick={handleSubmit}
                >
                    {loading ? "Saving..." : "Save"}
                </LoadingButton>
            </div>
        </div>
    );
}

export default CustomDatePicker;