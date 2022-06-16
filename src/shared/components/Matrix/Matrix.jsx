import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { set } from 'lodash';

export default (props) => {
    const propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        fullscreen: PropTypes.bool,
        colSize: PropTypes.number,
        fontSize: PropTypes.number,
        interval: PropTypes.number,
        color: PropTypes.string,
        background: PropTypes.string,
        frequency: PropTypes.number,
        speed: PropTypes.number,
        style: PropTypes.object,
        zIndex: PropTypes.number
    };

    const defaultProps = {
        width: 640,
        height: 480,
        fullscreen: false,
        colSize: 15,
        fontSize: 15.5,
        color: '#00cc33',
        frequency: 0.005,
        speed: 1.1,
        zIndex: -5,
        background: "#000000"
    };

    const [state, setState_] = useState({ ...defaultProps, ...props });
    const canvas = useRef(null);

    const setState = (newState) => {
        setState_({ ...state, ...newState });
    }

    useEffect(() => {
        if (!canvas || state.columns)
            return;

        let columns = [];
        let context = canvas.current.getContext('2d');
        let size = state.colSize;
        let source = '0 0 1 1';
        let width = state.fullscreen ? window.innerWidth : state.width;
        let height = state.fullscreen ? document.body.scrollHeight : state.height;

        canvas.current.width = width;
        canvas.current.height = height;

        let numberOfColumns = Math.floor(width / size * 3);

        for (let i = 0; i < numberOfColumns; i++) {
            columns.push(Math.floor(Math.random() * 10));
        }

        setState({ canvas: canvas.current, columns, context, size, source, numberOfColumns });
        
        if (state.fullscreen)
            window.addEventListener('resize', updateDimensions);


    }, [canvas]);

    useEffect(() => {
        if (state.interval === undefined && state.columns) {
            let interval = setInterval(draw, 50 / state.speed);
            setState({ interval });
        }
    }, [state.columns]);

    const draw = () => {
        if (!state.context)
            return;

        let context = state.context;
        let columns = state.columns;
        let numberOfColumns = state.numberOfColumns;

        context.fillStyle = 'rgba(6,6,19,0.1)';
        context.fillRect(0, 0, state.canvas.width, state.canvas.height);
        context.fillStyle = state.color;
        context.font = '700 ' + state.fontSize + 'px Consolas,monaco,monospace';

        for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
            let index = Math.floor(Math.random() * state.source.length);
            let character = state.source[index];
            let positionX = columnIndex * state.size;
            let positionY = columns[columnIndex] * state.size;

            context.fillText(character, positionX, positionY);
            if (positionY >= state.canvas.height && Math.random() > 1 - state.frequency) {
                columns[columnIndex] = 0;
            }
            columns[columnIndex]++;
        }

        setState({ context, columns })
    };

    const updateDimensions = () => {
        let canvas_ = canvas.current;
        canvas_.width = window.innerWidth;
        canvas_.height = document.body.scrollHeight;
    }

    useEffect(() => {
        if (state.fullscreen && document.body.scrollHeight !== canvas.current.height) {
            updateDimensions();
        }
    })

    let style = state.style ? state.style : {};

    return (
        <div style={{
            ...style,
            background: state.background,
            width: state.fullscreen ? '100vw' : state.width + 'px',
            height: state.fullscreen ? document.body.scrollHeight : state.height + 'px',
            overflow: 'hidden',
            zIndex: state.zIndex,
            position: 'absolute',
        }}>
            <canvas ref={canvas} />
        </div>
    );

}