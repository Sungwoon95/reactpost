import React,{ useState } from 'react';  

const DiaryEditor = () =>{
    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    return <div className='diary-editor'>
        <h2>Post</h2>
        <div>
            <input value={name} onChange={(e)=>{
                setName(e.target.value);
            }}/>
        </div>
        <div>
            <textarea value={content}
            onChange={(e)=>{
                setContent(e.target.value);
            }} />
        </div>
    </div>
}

export default DiaryEditor;