import Stars from "../Stars/Stars"
import './styleProducts.scss'
import { SlBasket } from 'react-icons/sl'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToBasket } from "../../store/slices/basketSlice"

const Products = ({ID,
    img,
    price,
    model,
    ram,
    memory,
    screenType,
    camera,
    battery,
    weight}) => {
        const navigate = useNavigate()
        const dispatch = useDispatch()
        return(
            <div   className="product">
                <img onClick={() => navigate("uniq/" + ID)} src={img} alt="" />
                <h3 className="model">{model}</h3>
                <h3 className="price">{price} $</h3>
                <div className="stars_basket">
                    <Stars/>
                    <SlBasket onClick={() => dispatch(addToBasket(ID))} className="basket"/>
                </div>
            </div>
        )
    }
export default Products