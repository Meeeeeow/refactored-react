import React,{useState} from 'react'
import Post from './post';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/action/actions';

const Posts = ({posts}) => { 
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
  const dispatch=useDispatch();
  
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch(addPost(title,body));
    setTitle('');
    setBody('');
  }
  return (
    <>
        <div className="flex flex-col mt-4 p-2  items-center justify-center">
            <form onSubmit={handleSubmit} className='flex flex-col  mt-3 p-2'>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                    Title
                </label>
                <input type="text" id="title" className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={title} placeholder="Enter a title..." onChange={(e)=> setTitle(e.target.value)}/>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="body">
                    Body
                </label>
                <input type="text" id="body" className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={body} placeholder="Enter a description..." onChange={(e)=>setBody(e.target.value)}/>
                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md">Add Post</button>
            </form>
        </div>
        {
            posts.map(post =>(
                <Post key={post.id} {...post}/>
             ))
        }
    </>
  )
}

export default Posts;