import { Button, FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import { useEffect, useState } from "react";
import { CustomDatePicker, SelectInput } from "../../shared/components";
import { addDays } from 'date-fns';
import data from "./Data";
import './styles.scss';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { formatDateToApi } from "../../shared/helpers/helpers";

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
        console.log(formData);
    };

    const handleNext = () => {
        if (formIndex < data.length - 1)
            setFormIndex(formIndex + 1);
    }

    const handleBack = () => {
        if (formIndex > 0)
            setFormIndex(formIndex - 1);
    }


    const handleSubmit = async () => {
        setLoading(true);

        // const res = await axios.post("http://192.168.100.200:5000/predict_fb_api", {
        //     "secteur": formData.sector,
        //     "Objectif": formData.goal,
        //     "Montant dépensé (USD)": formData.budget,
        //     "Commence": formatDateToApi(formData.dateRange[0].startDate),
        //     "Fin": formatDateToApi(formData.dateRange[0].endDate),     
        // });

        setLoading(false);

        // console.log(formData);

        // console.log(res.data);

        // navigate('/statistics', { state: res.data });

        navigate('/statistics');

    }

    return (
        <div className="Form-container" style={{ minHeight: 450, minWidth: 400, display: "flex", flexDirection: "column", alignItems: 'center' }}>
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