import { useState } from 'react';
import './styles.scss';

const CustomInput = (props) => {
    const {
        title,
        error,
        Icon,
        onBlur,
        width,
        ...otherProps
    } = props;

    const [touched, setTouched] = useState(false);

    return (
        <div
            className={`custom-input-container`}
            style= {{
                width: width || '80%',
            }}
        >
            <input
                {...otherProps}
                onBlur={e => {
                    onBlur && onBlur(e);
                    setTouched(true);
                }}
                className="custom-input"
                style={{
                    borderColor: error && touched ? 'red' : '#ccc',
                }}
            />
            {Icon &&
                <Icon className='icon' />
            }
            <div className='custom-input-error'>
                {touched && error}
            </div>
        </div>

    )
}


export default CustomInput;