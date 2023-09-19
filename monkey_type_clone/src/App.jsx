import {  Header, Prompt, KeyBoard, Options, Footer, LanguageChoice, Restart } from '../components';
import './App.css'
function App() {

  return (
    <div className="App">
      <header className='header-container'>
        <Header />
      </header>
      <main className='content'>
        <Options />
        <LanguageChoice />
        <Prompt />
        <Restart />
      </main>
      <footer className='footer-container'>
        <Footer />
      </footer>
    </div>
  )
}

export default App
