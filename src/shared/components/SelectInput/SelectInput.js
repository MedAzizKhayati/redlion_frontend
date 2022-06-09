import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useId, useState } from "react";

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    "&[aria-selected]": {
        color: 'black',
    },
    "&:hover": {
        backgroundColor: '#f00!important',
        color: 'white',
    },
}));


const StyleFormControl = styled(FormControl)(({ theme }) => ({

}));



const SelectInput = (props) => {
    const {
        label,
        value,
        onChange,
        options,
        ...otherProps
    } = props;

    const id = useId();
    const [open, setOpen] = useState(false);

    return (
        <StyleFormControl color="secondary" fullWidth {...otherProps}>
            <InputLabel color="secondary" id={id}>{label}</InputLabel>
            <Select
                value={value}
                onChange={onChange}
                label={label}
                labelId={id}
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                color="secondary"
            >
                {options.map(option => (
                    <StyledMenuItem
                        color="secondary"
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </StyledMenuItem>
                ))}
            </Select>
        </StyleFormControl>
    );
}


export default SelectInput;