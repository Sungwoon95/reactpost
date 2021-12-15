import './App.css';
import React, { useState, useRef } from 'react';
import DiaryEditor from './components/DiaryEditor';
import DiaryList from './components/DiaryList';

// const mockUp = [
//   {
//     id:1,
//     auth:"나",
//     content:"제목이 내용",
//     score: 5,
//     time_stamp: new Date().getTime()
//   },
//   {
//     id:2,
//     auth:"너",
//     content:"제목이 내용",
//     score: 5,
//     time_stamp: new Date().getTime()
//   },
//   {
//     id:3,
//     auth:"익명",
//     content:"제목이 내용",
//     score: 5,
//     time_stamp: new Date().getTime()
//   },
//   {
//     id:4,
//     auth:"나",
//     content:"제목이 내용",
//     score: 5,
//     time_stamp: new Date().getTime()
//   },
// ]

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (auth, content, score) => {
    const time_stamp = new Date().getTime();
    const newItem = {
      auth,
      content,
      score,
      time_stamp,
      id : dataId.current
    }
    dataId.current++;
    setData([newItem, ...data])
  }

  const onRemove = (targetId) => {
    console.log("삭제완료")
    const newDiaryList = data.filter((dataItem) => dataItem.id !== targetId)
    setData(newDiaryList);
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onRemove={onRemove} diaryList={data}/>
    </div>
  );
}

export default App;
