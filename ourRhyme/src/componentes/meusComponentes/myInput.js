import React from 'react';

export const MyInput = ( { divId, labelText, inputId, type, placeholder } ) => (
    <div id={ divId } className="myInputDiv">
        <label className="labelMyInput">{ labelText }</label>
        <input id={ inputId } type={ type } className="myInput" placeholder={ placeholder } />
    </div>
);

