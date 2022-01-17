import React, { useState } from 'react'
import { ReactComponent as MinusIcon } from '../svgs/minus.svg'
import { ReactComponent as PlusIcon } from '../svgs/plus.svg'

const Question = ({ title, info }) => {

    const [showInfo, setShowInfo] = useState(false);

    return (
           <article className='question'>
                <header>
                    <h2>{title}</h2>
                    <button onClick={() => setShowInfo(!showInfo)} className='btn'>
                        {showInfo ? <MinusIcon /> : <PlusIcon />}
                    </button>
                </header>
                {showInfo && <p>{info}</p>}
            </article> 
    );
}

export default Question
