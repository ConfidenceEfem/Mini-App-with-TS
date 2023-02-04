import React from 'react'
import LikeComp from './LikeComp'

interface Props {
    content?: string,
    createdAt?: string,
    image?: string,
    likes?: string[],
    updatedAt?: string,
    user?: string,
    _id?: string,
}

const OnePost: React.FC<Props> = ({content,createdAt,likes,image,_id}: Props) => {
  return (
    <div
    className='postCard'
    >
        <div className="postCardWrapper">
            <div className="postProfileAnddelete">
            <div className="postProfile">
                <div className="circleName">CE</div>
                <div className="nameandtime">
                    <div className="name">Confidence Efem </div>
                    <div className="time">Posted {createdAt}</div>
                </div>
            </div>
            <div className="delete">📍</div>
            </div>
            <img src={image} alt="postImage" className='myImage'/>
            <div className="subItems">
               <LikeComp _id={_id} likes={likes}/>
                <div className="likeCount">{likes?.length} Likes</div>
            </div>
            <div className="content">
                {content}
            </div>
        </div>
    </div>
  )
}

export default OnePost