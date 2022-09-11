import {Routes,Route} from"react-router-dom"
import Home from "./Home"
import Collections from "./Collection"
import Men from "./Men"
import Women from "./Women"
import Contact from "./Contact"
import About from "./About"
export default function Main (){

    return (
        <div className="Main">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="collections" element={<Collections/>}/>
                <Route path="men" element={<Men/>}/>
                <Route path="women" element={<Women/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Routes>
        </div>
    )
}