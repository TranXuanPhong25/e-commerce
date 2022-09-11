import { forwardRef } from "react"
import {Link} from "react-router-dom"
import close from "../images/icon-close.svg"
function NavBar({state},ref) {
    return (<nav ref={ref} className={state?"hide":null}>
        <img onClick={(e) => e.target.parentElement.classList="hide"} className="m-s" id="close_nav" src={close} alt="close" />
        <Link to="/collections">Collections</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>)
}
export default forwardRef(NavBar)