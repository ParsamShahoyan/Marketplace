import Stars from "../Stars/Stars"
import './styleProducts.scss'
import { SlBasket } from 'react-icons/sl'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToBasket } from "../../store/slices/basketSlice/basketSlice"

const Products = ({ID,
    img,
    price,
    model,
    ram,
    memory,
    screenType,
    camera,
    battery,
    weight,
    count
    }) => {

        const navigate = useNavigate()
        const dispatch = useDispatch()

        const addBasket = () => {
            dispatch(addToBasket({ID,
                img,
                price,
                model,
                ram,
                memory,
                screenType,
                camera,
                battery,
                weight,
                count,
            }))
        }
        return(
            <div className="product">
                <img onClick={() => navigate("uniq/" + ID)} src={img} alt="" />
                <h3 className="model">{model}</h3>
                <h3 className="price">{price} $</h3>
                <div className="stars_basket">
                    <Stars/>
                    <SlBasket onClick={addBasket} className="basket"/>
                </div>
            </div>
        )
    }
export default Products