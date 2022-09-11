import { useEffect ,useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import { setCurrent, setFullScreen, prev, next } from "../feature/preview_handle"
import close from "../images/icon-close.svg"
import previos from "../images/icon-previous.svg"
import nexts from "../images/icon-next.svg"

export default function Preview() {
    
    const Image = useSelector(state => state.preview)
    const [under800,isUnder800]=useState(window.innerWidth<800)
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            if(window.innerWidth<800){
                isUnder800(true)
            }else{
                isUnder800(false)
            }
        })
    },[])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setCurrent(
            {
                id: 0,
                data: Image.images[0]
            }
        ))
    }, [])
    return (
        <div className="Preview">
            <img
                style={Image.fullScreenPreview ? null : { display: "none" }}
                onClick={() => dispatch(setFullScreen(false))}
                id="close"
                alt="close"
                src={close} />
            <div
                className="large"
            >
                <div 
                    className="previos" 
                    onClick={() => dispatch(prev())}
                    style={Image.fullScreenPreview ||under800? null : { display: "none" }}
                    >
                    <img
                        alt="prev"
                        src={previos}
                    />
                </div>

                <img
                    className="current"
                    src={Image.currentImage.data}
                    alt="current"
                    onClick={() => window.innerWidth > 800 ? dispatch(setFullScreen(true)) : null}
                />
                <div 
                    className="next" 
                    onClick={() => dispatch(next())}
                    style={Image.fullScreenPreview ||under800? null : { display: "none" }}
                    >
                    <img
                        className="next"
                        alt="prev"
                        src={nexts}
                    />
                </div>
            </div>
            <div className={!under800?"thumbnails ":"none"}>
                {Image.thumbnails.map((img, index) =>
                    <img
                        alt={"img" + index}
                        key={`product-${index}`}
                        src={img}
                        className={Image.currentImage.id === index ? "active" : null}
                        draggable={false}
                        onClick={
                            (e) => {
                                e.preventDefault()
                                dispatch(setCurrent({
                                    id: index,
                                    data: Image.images[index]
                                }))
                            }
                        }
                    />
                )}
            </div>
        </div>
    )
}