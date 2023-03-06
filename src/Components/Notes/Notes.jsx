import React, { useState } from 'react';
import {BsFillPinAngleFill, BsThreeDotsVertical} from 'react-icons/bs'
import {AiFillStar, AiOutlineDelete, AiOutlineStar} from 'react-icons/ai'
import './Notes.css'

const Notes = ({ noteItems, handleAddText, handleFavorite, handleDelete }) => {

    const [footerDropDown, setfooterDropDown] = useState()
    //console.log(footerDropDown);

    return (
        <div className='homeContainer'>
            <div className="mainContainer">
                <h1 className='heading'>Notas</h1>
                <div className="notesContainerInner">
                    <div className="notes">
                        {
                            noteItems.map((notes, index) => {
                                return (
                                    <div className="noteContainer" key={index}>
                                        <div 
                                            className="note" 
                                            style={{background: `${notes.color}`}}
                                        >
                                            <textarea 
                                                className='textBox'
                                                type="text"
                                                defaultValue={notes.note}
                                                onChange={(e) => handleAddText(e, index)}
                                                placeholder="Escribe algo"
                                            />
                                            <div className="noteFooter">
                                                <div className="deleteIcon"><BsThreeDotsVertical size={25} onClick={() => setfooterDropDown(index)} /></div>
                                                {
                                                    footerDropDown === index ? <div className="footerDropDown" onMouseLeave={() => setfooterDropDown()} >
                                                        <div className="delete" onClick={() => {handleDelete(index);setfooterDropDown()}}>
                                                            <AiOutlineDelete size={25}/>
                                                        </div>
                                                        <div className="pinIcon">
                                                            <BsFillPinAngleFill size={25}/>
                                                        </div>
                                                    </div> : null
                                                }
                                                <span>{notes.currDate}</span>
                                                <div className="starIcon" onClick={() => handleFavorite(index)}
                                                    style={{
                                                        background: `${notes.favorite ? 'black' : 'transparent'}`,
                                                        color: `${!notes.favorite ? 'black' : 'orange'}`
                                                    }}
                                                >
                                                    {
                                                        notes.favorite ? <AiFillStar size={25}/> : <AiOutlineStar size={25} />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notes;