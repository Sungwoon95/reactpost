import React, {useState} from 'react';

const DiaryView = ({onRemove, auth, score, content, id, time_stamp}) =>{
    
    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);
    const [localContent, setLocalContent] = useState("");

    const handleRemove = () =>{
        if(window.confirm(`${id}삭제합니까?`)){
        onRemove(id);
    }}

    return (
    <div className="diary-view">
        <div className="posting">
            <span>작성자: {auth}</span>
            <span>점수: {score}</span>
            <br/>
            <span>{new Date(time_stamp).toLocaleString()}</span>
            <div>{isEdit ? 
            <>
            </> 
            : content}</div>
            <button onClick={handleRemove}>
                삭제
            </button>
            <button onClick={toggleIsEdit}>
                수정
            </button>
        </div>
    </div>
    )
}

export default DiaryView;