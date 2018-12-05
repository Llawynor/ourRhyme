import React from 'react';

export const MyButton = ( { divClass, divId, buttonId, type, onClick, buttonText } ) => (
    <div id={ divId } className={"divMyButton " + divClass}>
        <button id={ buttonId } className="myBtn" type={ type } onClick={ onClick } >{ buttonText }</button>
    </div>
);