import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost, updatePost } from '../store/action/actions';

const Post = ({title,body,id}) => {
  const dispatch =useDispatch();
  const handleUpdate=()=>{
    const newTitle = prompt('Enter new title', title);
    const newBody = prompt('Enter new body', body);

    dispatch(updatePost(id,newTitle,newBody));

  } 
  const handleDelete=()=>{
    dispatch(deletePost(id));
  } 
  return (
    <div>
        <h1 className="text-3xl font-bold mt-2 p-2">{title}</h1>
        <p className="text-lg p-2">{body}</p>
        <div className="flex p-2 w-48 justify-between">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md" onClick={handleDelete}>Delete</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" onClick={handleUpdate}>Update</button>
        </div>
    </div>
  )
}

export default Post;