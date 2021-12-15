import DiaryView from "./DiaryView"

const DiaryList = ({diaryList, onRemove}) => {
    return (
        <div className="diary-list">
            <h2>리스트</h2>
            <p>{diaryList.length}개의 글</p>
            <div>
                {diaryList.map((diaryItem)=>(
                <DiaryView key={diaryItem.id} {...diaryItem}
                onRemove0={onRemove}/>
                ))}
            </div>
        </div>
    )
}

DiaryList.defaultProps = {
    diaryList: [],
}
export default DiaryList;