import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};

function getRandomColor() {
    const colorList = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return colorList[randomIndex];
}

function ColorBox(props) {
    
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deeppink';
        return initColor;
    });

    function handleClick() {
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box_color', newColor);
    }

    return (
        <div className = "color-box" style = {{ backgroundColor: color }} onClick = {handleClick}>
            COLOR BOX   
        </div>
    );
}

export default ColorBox;