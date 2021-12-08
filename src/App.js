import './App.css';
import DiaryEditor from './components/DiaryEditor';
import DiaryList from './components/DiaryList';

const mockUp = [
  {
    id:1,
    auth:"나",
    content:"제목이 내용",
    score: 5,
    time_stamp: new Date().getTime()
  },
  {
    id:2,
    auth:"너",
    content:"제목이 내용",
    score: 5,
    time_stamp: new Date().getTime()
  },
  {
    id:3,
    auth:"익명",
    content:"제목이 내용",
    score: 5,
    time_stamp: new Date().getTime()
  },
  {
    id:4,
    auth:"나",
    content:"제목이 내용",
    score: 5,
    time_stamp: new Date().getTime()
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={mockUp}/>
    </div>
  );
}

export default App;
