import React,{ useState, useRef } from 'react';  

const DiaryEditor = () =>{
    const [state, setState] = useState({
        auth: '',
        content: '',
        score: 1,
    })

    const authLen = useRef();
    const contentLen = useRef();

    const onChangeState = (e) =>{
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmitState = () => {
        if(state.auth.length < 1){
            authLen.current.focus();
            return;
        }
        if(state.content.length < 5){
            contentLen.current.focus();
            return;
        }
        alert("작성 성공");
    }
    
    //const [name, setName] = useState('');
    //const [content, setContent] = useState('');

    return <div className='diary-editor'>
        <h2>Post</h2>
        <div>
            <input 
            name="auth" 
            value={state.auth} 
            onChange={onChangeState}
            ref={authLen}
            />
        </div>
        <div>
            <textarea name="content" 
            value={state.content}
            onChange={onChangeState}
            ref={contentLen}
            />
        </div>
        <div>
            <select name="score" value={state.score} onChange={
                onChangeState
            }>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={onSubmitState}>저장</button>
        </div>
    </div>
}

export default DiaryEditor;