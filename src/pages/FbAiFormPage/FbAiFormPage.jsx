import { Button, FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import { useEffect, useState } from "react";
import { CustomDatePicker, SelectInput } from "../../shared/components";
import { addDays } from 'date-fns';
import data from "./Data";
import './styles.scss';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { formatDateToApi } from "../../shared/helpers/helpers";
import { toast } from "react-toastify";

const FbAiFormPage = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState(data[0]);
    const [formIndex, setFormIndex] = useState(0);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setForm(data[formIndex]);
    }, [formIndex]);

    const handleChange = (event) => {
        setFormData({ ...formData, [form.key]: event.target.value });
    };

    const handleNext = () => {
        if (formIndex < data.length - 1)
            setFormIndex(formIndex + 1);
    }

    const handleBack = () => {
        if (formIndex > 0)
            setFormIndex(formIndex - 1);
    }

    const findLabelByValue = (value) => {
        const label = [
            ...data[0].options,
            ...data[1].options,
        ].find(option => option.value === value)?.label;
        return label;
    }
    const handleSubmit = async () => {
        setLoading(true);

        const dataToSend = {
            "sector": findLabelByValue(formData.sector),//formData.sector,
            "objective": findLabelByValue(formData.goal),//formData.goal,
            "amount": formData.budget,
            "start_date": formatDateToApi(formData.dateRange[0].startDate),
            "end_date": formatDateToApi(formData.dateRange[0].endDate),
        }
        try {
            const data = (await axios.post("https://redlion-ml-api.herokuapp.com/FB_Prediction", dataToSend)).data;

            for (let key in data) {
                if (Array.isArray(data[key])) {
                    for (let index = 0; index < data[key].length; index++) {
                        data[key][index] = Math.floor(data[key][index]);
                    }
                }
            }

            setLoading(false);
            navigate('/statistics', { state: { ...data } });
            console.log(data);
        } catch (err) {
            setLoading(false);
            toast.error('Something wrong has occured, Try again later!')
            console.log(err);
        }

    }

    return (
        <div className="Form-container">
            <h1 style={{ textAlign: 'center', flex: 1 }}>{form.title}</h1>
            <div style={{ flex: 1, width: "100%" }}>
                {
                    form.dateRange ?
                        <CustomDatePicker
                            ranges={formData[form.key] || [{
                                startDate: new Date(),
                                endDate: addDays(new Date(), 7),
                                key: 'selection',
                                color: '#f00'
                            }]}
                            onChange={val => setFormData({ ...formData, [form.key]: val })}
                            label="Start Date"
                            color="secondary"
                            handleBack={handleBack}
                            loading={loading}
                            handleSubmit={handleSubmit}
                            disabled={!formData[form.key]}
                        />

                        : form.type === 'number' ?
                            <FormControl fullWidth>
                                <InputLabel htmlFor="outlined-adornment-amount">{form.label}</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    type="number"
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label={form.label}
                                    onChange={handleChange}
                                    value={formData[form.key] || form.min}
                                />
                                {
                                    formData[form.key] < form.min &&
                                    <FormHelperText error id="component-error-text">The minimum budget is ${form.min}.</FormHelperText>
                                }

                            </FormControl>
                            :
                            <SelectInput
                                value={formData[form.key] || ''}
                                onChange={handleChange}
                                options={form.options}
                                label={form.label}
                            />
                }
            </div>
            <div style={{
                width: '100%',
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: 'flex-end',
                flex: 1
            }}>
                {
                    !form.dateRange &&
                    <>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleBack}
                            disabled={formIndex === 0}
                        >
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleNext}
                            disabled={
                                formIndex === data.length - 1 ||
                                !formData[form.key] ||
                                (form.type === 'number' && formData[form.key] < form.min)
                            }
                        >
                            Next
                        </Button>
                    </>
                }
            </div>
        </div>
    );
}

export default FbAiFormPage;