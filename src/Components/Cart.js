
import trash from "../images/icon-delete.svg"
import { useSelector ,useDispatch} from "react-redux"
import {remove} from"../feature/purchase_sys"
export default function Cart() {
    const storage = useSelector((state) => state.purchase.cart)
    const dispatch =useDispatch()
    return (
        <div className="cart">
            <p>Cart</p>
            <hr></hr>

            <ul>
                {(typeof storage !== 'undefined' && storage.length > 0) ?(
                    // the array is defined and has at least one element
                    storage.map(product => (<li key={product.id} className="item">
                        <img className="thumbnail" src={product.image} alt="thumbnail" />
                        <div className="item_detail">
                            <p className="item_name">{product.name}</p>
                            <p className="item_price">{product.price+ " x "+product.amount  + " = $"+(product.price.slice(1)*product.amount)}</p>
                        </div>
                        <img className="delete" onClick={()=>dispatch(remove(product.id))} src={trash} alt="delete" />
                    </li>))
                )
                    :(<p className="empty">Your cart is empty</p>)
                }
                {(typeof storage !== 'undefined' && storage.length > 0) ?(<button className="Checkout">Check out</button>):undefined}
            </ul>

            
        </div>
    )
}