const DiaryView = ({auth, score, content, id, time_stamp}) =>{
    return (
    <div className="DiaryView">
        <div className="posting">
            <span>작성자: {auth}</span>
            <span>점수: {score}</span>
            <br/>
            <span>{new Date(time_stamp).toLocaleString()}</span>
            <div>{content}</div>
            <span>작성자:</span>
        </div>
    </div>
    )
}

export default DiaryView;