import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { phoneData } from '../../Data/script'
import Stars from '../Stars/Stars'
import './styleUniq.scss'

const Uniq = () => {
    const [ post, setPost ] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
            setPost(phoneData.find((el) => el.ID === id) );
        },[])
  return (<div className='uniq_'>
        <div>
            <h1>{post?.model}</h1>
            <h3>{post?.price} $</h3>
            <img src={post?.img} alt="" />
            <Stars/>
        </div>
        <div>
            <span className='left'>Battery <p  className="rigth">{post?.battery}</p></span>
            <span className='left'>Camera <p  className="rigth">{post?.camera}</p></span>
            <span className='left'>Memory <p  className="rigth">{post?.memory}</p></span>
            <span className='left'>Ram <p  className="rigth">{post?.ram}</p></span>
            <span className='left'>ScreenType <p  className="rigth">{post?.screenType}</p></span>
            <span className='left'>Weight <p  className="rigth">{post?.weight}</p></span>
            <button className='back' onClick={()=> navigate(-1)}>back</button>
        </div> 
  </div>)
}
export default Uniq