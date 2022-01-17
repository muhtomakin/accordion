import React, { useState } from 'react'
import Question from './Question'
import Data from './Data'


const Main = () => {

    const [datas, setData] = useState(Data);

    return (
        <main>
            <div className='container'>
                <h1>questions and answers about login</h1>
                <section className='info'>
                    {datas.map((data) => {
                        return (
                            <Question key={data.id} {...data}/>
                        );
                    })}                   
                </section>
            </div>            
        </main>
    )
}

export default Main
