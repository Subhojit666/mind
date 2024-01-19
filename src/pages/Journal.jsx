import React, { useState } from 'react'

export default function Journal(props) {
    const [text, setText] = useState(''); 
    const [thoughts, setThoughts] = useState([]);

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleSaveClick = () => {
        setThoughts([...thoughts, text]);
        setText('');
    }

    return (
        <>
            <div className="container mx-auto px-40 py-10"> 
                <h1 className="text-2xl font-bold my-4 text-center">Write your thoughts here </h1>
                <div className="mb-3"> 
                    <textarea className="form-control resize-none border rounded-md w-full h-64 " value={text} onChange={handleOnChange} id="myBox"></textarea>
                </div>
                <div className='flex justify-center'>
                    <button className="btn btn-primary mx-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSaveClick}>Save my Thoughts</button>
                </div>
            </div>
            <div className="container mx-auto px-4 my-3">
                <h2 className="text-xl font-bold my-2 text-center">My Thoughts</h2>
                {thoughts.map((thought, index) => (
                    <div key={index} className="btn btn-primary text-center my-2 mx-40 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{thought}</div>
                ))}
            </div>
        </>
    );
}