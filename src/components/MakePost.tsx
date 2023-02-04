import React from 'react'
import PostModal from './PostModal'
import "./style.css"

const MakePost: React.FC= () => {

   

  return (
    <div
    className='makePost_cont'
    >
        <PostModal/>
        <div className="smallCont">📝 <span>Create Post</span></div>
    </div>
  )
}

export default MakePost