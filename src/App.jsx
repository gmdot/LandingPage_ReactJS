import Header from './components/Header/Header';
import Square from './components/Square/Square';

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
        <Square/>
        <Square/>
      </div>
    </>
  );
}

export default App;
