import cart_icon from "../images/icon-cart.svg"
import minus_icon from "../images/icon-minus.svg"
import plus_icon from "../images/icon-plus.svg"
import { useSelector, useDispatch } from "react-redux"
import { add } from "../feature/purchase_sys"
import { useRef, useState } from "react"
export default function Detail() {
    const dispatch = useDispatch()
    const curImage = useSelector(state => state.preview.currentImage)
    const input = useRef()
    const [amount, setAmount] = useState(1)
    return (
        <div className="Detail">
            <p className="Detail_company-name">Sneaker Company</p>
            <h1 className="product_name">Fall Limited Edition Sneakers</h1>
            <p className="product_description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sale, they 'll withstand everything the weather can offer.</p>
            <h2 className="product_price">$125.00<span className="discount">50%</span></h2>
            <span className="product_origin_price">$250.00</span>

            <div className="purchase_control">
                <div className="amount_control">
                    <img
                        onClick={() => { setAmount(prev=>prev!==1?prev-1:prev) }}
                        src={minus_icon}
                        alt="minus" />
                    {/* usestate here */}
                    <input
                        ref={input}
                        onChange={e => {
                            if (/\D/.test(e.target.value)) {

                            } else {

                                setAmount(+e.target.value)
                            }
                        }
                        }
                        type="text"
                        value={amount}
                    />
                    <img
                        onClick={() => { setAmount(prev=>prev+1) }}
                        alt="plus"
                        src={plus_icon} />

                </div>
                <button
                    className="add_to_cart"
                    onClick={() => dispatch(add({
                        id: curImage.id,
                        name: "Fall Limited Edition Sneakers",
                        price: "$125",
                        amount: amount,
                        image: curImage.data
                    }))}
                ><img

                        alt="cart"
                        src={cart_icon} /> Add to cart</button>
            </div>


        </div>
    )
}