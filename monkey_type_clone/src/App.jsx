import {  Header, Prompt, KeyBoard, Options, Footer, LanguageChoice, Restart } from './components';
import React, { useState } from 'react';

const ThemeContext = React.createContext();
function App() {

  const [theme, setTheme] = useState('default');
  const [wordCount, setWordCount] = useState(0);
  const [word, setWord] = useState();
  const [letter, setLetter] = useState();

  return (
    <ThemeContext.Provider value={theme}>
      <div className="flex flex-col font-sans h-full text-center">
        <header>
          <Header />
        </header>
        <main className='flex-1'>
          <Options />
          <LanguageChoice />
          <Prompt />
          <Restart />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
