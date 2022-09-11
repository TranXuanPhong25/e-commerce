import "./index.scss"
import Header from "./Components/Header"
import Main from "./Components/Main"
import Preview from "./Components/Preview"
import { useSelector } from 'react-redux'
function App() {
  const fullscreen = useSelector(state => state.preview.fullScreenPreview)
  
  return (
    <>
      <Header />
      <Main />
      <div className={fullscreen ? "fullscreen" : "none"}>
        
        <Preview/>
      </div>
    </>

  );
}

export default App;
