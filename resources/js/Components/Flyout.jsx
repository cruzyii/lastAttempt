import React from "react";

function Flyout({showFlyout}){
    return(
            showFlyout &&
            <div className='absolute bg-orange-400 w-full flex'>
                <ul>
                    <li>test1</li>
                    <li>test2</li>
                    <li>test3</li>
                </ul>
                <ul>
                    <li>test1</li>
                    <li>test2</li>
                    <li>test3</li>
                </ul>
            </div>
    );
};

export default Flyout;