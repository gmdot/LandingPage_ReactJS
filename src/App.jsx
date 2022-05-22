import Header from './components/Header/Header';
import Square from './components/Square/Square';
import VisitRepo from './components/VisitRepo/VisitRepo';

const contentStyle = {
  display: 'flex',
  width: '680px',
  margin: '0 auto'
}

function App() {
  return (
    <>
      <Header/>
      <div className="content" style={contentStyle}>
        <Square/>
      </div>
      <VisitRepo/>
    </>
  );
}

export default App;
