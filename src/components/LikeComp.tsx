import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {data} from "./ApiUrl"

type Like = {
    _id: string | undefined,
    likes: string[] | undefined,
}

const LikeComp : React.FC<Like>= ({_id,likes}: Like) => {

    const [mainUser, setMainUser] = useState<string>("")


    useEffect(()=>{
        const userData : any = localStorage.getItem("myData")
        if(userData){
            const convert = JSON.parse(userData)
            setMainUser(convert._id)
        }
    },[])



    const LikeFunction = async () => {
        await axios.post(`${data.url}/post/${_id}/${mainUser}`)   
        window.location.reload()  
    }

    // console.log(likes?.includes(mainUser));

  return (
     <div className="likeIcon">
     {likes?.includes(mainUser)=== false? 
     <div
     onClick={LikeFunction}
     >🤍</div>
     : <div>💗</div>}
     </div> 
  )
}

export default LikeComp