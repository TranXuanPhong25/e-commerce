import logo from "../images/logo.svg"
import menu from "../images/icon-menu.svg"
import cart from "../images/icon-cart.svg"
import userAvatar from "../images/image-avatar.png"
import "./Header.scss"

import { Link } from "react-router-dom"

import {useEffect,  useRef, useState } from "react"

import Cart from "./Cart"
import NavBar from "./NavBar"


import { useSelector } from "react-redux"
export default function Header() {
    const navBarControl = useRef()
    const [shouldSee,setShouldSee] = useState(false)
    const product_amount = useSelector(state=>state.purchase.cart.length)
    const ProductAmount =({amount})=>{
        return <p>{amount}</p>
    }
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
    
    return (
        <div className="header">
            <header >
                <img onClick={()=>navBarControl.current.classList="appear"} src={menu} className="m-s" alt="menu"/>
                <Link id="logo" to="/"><img src={logo} alt="logo" /></Link>
                {!under800?<NavBar state=""/>: <NavBar ref={navBarControl} state="moblie"/>}
                <div  onClick={()=>setShouldSee(!shouldSee)} className="left">
                    <img src={cart} alt="cart" />
                    {product_amount!==0?<ProductAmount amount={product_amount}/>:null}
                </div>
                <img  onClick={()=>setShouldSee(!shouldSee)} className="avatar" src={userAvatar} alt="userAvatar" />
                {shouldSee?<Cart/>:null}
            </header>
        </div>
    )
}

