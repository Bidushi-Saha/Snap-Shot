import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Gallery from './components/photos/photos';
import { photoContext } from "./components/photoscontext"
function App() {
  const [inputField, setInputField] = useState("");

  return (
    <>
      <photoContext.Provider value={{ inputField, setInputField }}>
        <Header />
        <Gallery />
      </photoContext.Provider>

    </>
  );
}

export default App;
