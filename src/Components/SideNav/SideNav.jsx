import React, { useState } from 'react';
import {RiAddFill} from 'react-icons/ri'
import './SideNav.css'

const SideNav = ({ handleAdd }) => {
    
    const [colorsDropDown, setColorsDropDown] = useState(false);

    return (
        <div className='sideNav'>
            <div className="sideNavInner">
            <button className='addBtn' onClick={() => setColorsDropDown(!colorsDropDown)}>
                    <RiAddFill />
                </button>

                <div 
                    className="colors"
                    style={{
                        visibility: colorsDropDown ? "visible" : "hidden",
                        opacity: colorsDropDown ? '1' : "0",
                        transition: "0.3s ease-in-out",
                        transform: colorsDropDown ? "translate(0px, 12px)" : "translate(0px, 0px)",
                        grid: colorsDropDown ? "1.5rem" : "1.2rem"
                    }}
                >
                    <div 
                        className="color"
                        id='c1'
                        onClick={() => handleAdd("#FEC971")}
                    ></div>

                    <div 
                        className="color"
                        id='c2'
                        onClick={() => handleAdd("#9FC131")}
                    ></div>
                    <div 
                        className="color"
                        id='c3'
                        onClick={() => handleAdd("#FC9C83")}
                    ></div>
                    <div 
                        className="color"
                        id='c4'
                        onClick={() => handleAdd("#07485D")}
                    ></div>
                    <div 
                        className="color"
                        id='c5'
                        onClick={() => handleAdd("#F54E29")}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default SideNav;
