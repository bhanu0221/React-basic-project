//-------------------------------------------------------API project---------------------------------------------------------
import React, { useEffect, useState } from "react"
import axios from 'axios';
import './Photos.css'

const Photos = () => {

  const [data, setData] = useState([])

  const getData = async ()=>{
  const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=100')

  setData(response.data.photos)  
  }
  useEffect(()=>{
    getData()
  },[])


  return ( 
    <div>
    <h2 className="title">Some Random pictures.</h2>
        <div className="main">
        {data.map(function(photo,idx){
            return <div key={idx} className='imges'>
            <img src={photo.url} alt={photo.title || "photo"} />
            </div>
        })}
        </div>
    </div>
  )
}
export default Photos;