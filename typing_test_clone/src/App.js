import './App.css';
import {  Header, Prompt, KeyBoard, Options, Footer } from './components';
function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main className="main" style={{textAlign: 'center'}}>
        <Options />
        <Prompt />
      </main>
      <footer>
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
