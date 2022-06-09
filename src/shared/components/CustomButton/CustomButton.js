import './styles.scss';
const CustomButton = (props) => {
    const {
        title,
        ...otherProps
    } = props;
    return (
        <button
            {...otherProps}
            className="custom-button"
        >
            {title}
        </button>
    );
}


export default CustomButton;