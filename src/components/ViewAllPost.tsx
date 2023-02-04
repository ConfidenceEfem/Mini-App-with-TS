import axios from 'axios'
import React, { useEffect, useState } from 'react'
import OnePost from './OnePost'
import "./style.css"
import {data} from "./ApiUrl"
import MakePost from './MakePost'

const ViewAllPost = () => {

    const [myData, setMyData] = useState([])

    const getAllData = async () => {
        const res = await axios.get(`${data.url}/post`)
        setMyData(res?.data?.data)
    }

    useEffect(()=>{
        getAllData()
    })

  return (
    <div
    className='mainBody'
    >
        <MakePost/>
        <div className="cardHolder">
            {
                myData?.map(({content, likes, image, createdAt, _id})=>{
                    return (
                        <OnePost 
                        content={content} 
                        likes={likes} 
                        image={image} 
                        createdAt={createdAt}
                        _id={_id}
                        />
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default ViewAllPost