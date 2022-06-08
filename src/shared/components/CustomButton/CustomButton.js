import './styles.scss';
export default (props) => {
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