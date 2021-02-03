import React, { useState } from 'react';
import PropTypes from 'prop-types';

Menu.propTypes = {
    view: PropTypes.object,
    changeView: PropTypes.func,
};

function Menu(props) {
    const { changeView } = props;
    
   
    function handleClick(){
        const viewNow = "Contact";
        changeView(viewNow);
    }

    

    //console.log(view);


    return (
        <div>
            <button onClick= {handleClick}>Click To Change View</button>
        </div>
    );
}

export default Menu;