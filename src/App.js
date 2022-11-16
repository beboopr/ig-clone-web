import Header from './component/Header';
import Feed from './component/Feed';
import './App.css';

function App() {
  return (
    <main className="App">
      <Header />
      <div className="App-header">
        <Feed/>
      </div>
    </main>
  );
}

export default App;
