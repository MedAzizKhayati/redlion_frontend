import './styles.scss';


const Card = (props) => {
    const {
        backgroundColor = 'none',
        style = {},
        title = '',
        className = '',
        children,
        ...rest
    } = props;

    return (
        <div
            className={'card ' + className}
            style={{ backgroundColor, ...style }}
            {...rest}
        >
            {
                title &&
                <h2>{title}</h2>
            }
            {children}
        </div>
    );
}

export default Card;