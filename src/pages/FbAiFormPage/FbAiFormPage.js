import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import { useEffect, useState } from "react";
import { CustomDatePicker, SelectInput } from "../../shared/components";
import { addDays } from 'date-fns';
import data from "./Data";

const FbAiFormPage = () => {
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


    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    return (
        <div style={{ minWidth: 400, height: '100%', display: "flex", flexDirection: "column", alignItems: 'center' }}>
            <h1 style={{ textAlign: 'center' }}>{form.title}</h1>
            <div style={{ height: '100px' }}></div>
            <h1 style={{ textAlign: 'center', width: "100%" }}>{form.subTitle}</h1>
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
                    />

                    : form.type === 'number' ?
                        <FormControl fullWidth>
                            <InputLabel htmlFor="outlined-adornment-amount">{form.label}</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                type="number"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label={form.label}
                                onChange={ev => setFormData({ ...formData, [form.key]: Math.max(ev.target.value, 10) })}
                                value={formData[form.key] || 10}
                            />
                        </FormControl>
                        :
                        <SelectInput
                            value={formData[form.key] || ''}
                            onChange={handleChange}
                            options={form.options}
                            label={form.label}
                        />
            }

            <div style={{ height: 150 }}></div>
            <div style={{
                width: '100%',
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
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
                            disabled={formIndex === data.length - 1 || !formData[form.key]}
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