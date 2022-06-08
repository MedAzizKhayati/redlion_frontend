import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useEffect, useState } from "react";
import { SelectInput } from "../../shared/components";

const data = [
    {
        title: "Choose Your Sector",
        label: "Sector",
        key: 'sector',
        options: [
            { value: '10', label: 'E-commerce & Retail' },
            { value: '20', label: 'B2B' },
            { value: '30', label: 'Travel' },
            { value: '40', label: 'Automotive' },
        ]
    },
    {
        title: "What is your goal",
        label: "Goal",
        key: 'goal',
        options: [
            { value: '10', label: 'Interaction' },
            { value: '20', label: 'Traffic' },
            { value: '30', label: 'Lead Generation' },
        ]
    }

]


export default () => {
    const [form, setForm] = useState(data[0]);
    const [formIndex, setFormIndex] = useState(0);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        setForm(data[formIndex]);
    }, [formIndex]);

    const handleChange = (event) => {
        setFormData({ ...formData, [form.key]: event.target.value });
        console.log(formData);
    };

    const handleNext = () => {
        if(formIndex < data.length - 1) 
            setFormIndex(formIndex + 1);
    }

    const handleBack = () => {
        if(formIndex > 0)
            setFormIndex(formIndex - 1);
    }

    return (
        <div style={{ width: 400, height: '100%' }}>
            <h1 style={{ textAlign: 'center' }}>{form.title}</h1>
            <div style={{ height: '100px' }}></div>
            <SelectInput
                value={formData[form.key] || ''}
                onChange={handleChange}
                options={form.options}
                label={form.label}
            />
            <div style={{ height: 150 }}></div>
            <div style={{
                width: '100%',
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
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
                    disabled={formIndex === data.length - 1}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}