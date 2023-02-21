import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { phoneData } from '../../Data/script'
import Footer from '../Footer/Footer'
import Stars from '../Stars/Stars'
import './styleUniq.scss'

const Uniq = () => {
    const [ post, setPost ] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
            setPost(phoneData.find((el) => el.ID === id) );
        },[])
  return (
    <div className='uniq'>
        <div className='uniq_l'>
            <h1>{post?.model}</h1>
            <h3>{post?.price} $</h3>
            <img src={post?.img} alt="" />
            <Stars/>
        </div>
        <div className='uniq_r'>
            <span>Battery 
                <p>{post?.battery}</p>
            </span>
            <span>Camera 
                <p>{post?.camera}</p>
            </span>
            <span>Memory 
                <p>{post?.memory}</p> 
            </span>
            <span>Ram 
                <p>{post?.ram}</p>
            </span>
            <span>ScreenType 
                <p>{post?.screenType}</p>
            </span>
            <span>Weight 
                <p>{post?.weight}</p>
            </span>
            <button className='back' onClick={()=> navigate(-1)}>back</button>
        </div> 
        <Footer/>
    </div>
  )
}
export default Uniq