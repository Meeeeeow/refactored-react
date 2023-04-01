
import './App.css';
import React,{useEffect} from 'react'
import { fetchPosts } from './store/action/actions';
import { useDispatch, useSelector } from 'react-redux';
import Posts from './components/posts';

function App() {
  const dispatch = useDispatch();
  const {posts, isLoading} = useSelector((state)=> state);
  useEffect(()=>{
    dispatch(fetchPosts());
  },[dispatch])  
  console.log(posts);

  return (
    <div clasName='App'>
        {
            isLoading ? <h1>Loading...</h1> : (
                <Posts posts={posts} />
            )
        }
    </div>
  );
}

export default App;
