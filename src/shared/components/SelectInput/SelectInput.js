import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useId, useState, useEffect } from "react";

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    "&[aria-selected]": {
        color: 'black',
    },
    "&:hover": {
        backgroundColor: theme.palette.secondary.main + '!important',
        color: 'white',
    },
}));


const StyleFormControl = styled(FormControl)(({ theme }) => ({

}));



export default (props) => {
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
        <StyleFormControl fullWidth {...otherProps}>
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
                sx={{
                    borderColor: 'red',
                }}
            >
                {options.map(option => (
                    <StyledMenuItem
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