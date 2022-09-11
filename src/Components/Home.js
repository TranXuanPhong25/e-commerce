import "./home.scss"
import Preview from "./Preview"
import Detail from "./Detail"
export default function Home(){
    return(
        <div className="Home">
            <Preview />
            <Detail/>
        </div>
    )
}