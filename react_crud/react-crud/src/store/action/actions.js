import * as ACTION_TYPES from './action_types';
import axios from 'axios';

export const fetchPostsRequest = ()=>{
    return{
        type:ACTION_TYPES.FETCH_POSTS_REQUEST,
    }
}

export const fetchPostsSuccess = (posts)=>{
    return{
        type:ACTION_TYPES.FETCH_POSTS_SUCCESS,
        payload: posts,
    }
}

export const fetchPostsFailure = (error)=>{
    return{
        type: ACTION_TYPES.FETCH_POSTS_FAILURE,
        payload: error,
    }
}

export const addPostRequest = ()=>{
    return {
        type: ACTION_TYPES.ADD_POST_REQUEST,
    }
}
export const addPostSuccess = (postData)=>{
    return{
        type: ACTION_TYPES.ADD_POST_SUCCESS,
        payload: postData,
    }
}
export const addPostFailure = (error)=>{
    return{
        type:ACTION_TYPES.ADD_POST_FAILURE,
        payload: error,
    }
}

export const updatePostSuccess = (updatedPost)=>{
    return{
        type:ACTION_TYPES.UPDATE_POST_SUCCESS,
        payload:updatedPost
    }
}
export const updatePostRequest = ()=>{
    return{
        type:ACTION_TYPES.UPDATE_POST_REQUEST,
    }
}
export const updatePostFailure = (error)=>{
    return{
        type:ACTION_TYPES.UPDATE_POST_FAILURE,
        payload:error,
    }
}

export const deletePostRequest = ()=>{
    return{
        type:ACTION_TYPES.DELETE_POST_REQUEST,
    }
}
export const deletePostSuccess = (postId)=>{
    return{
        type: ACTION_TYPES.DELETE_POST_SUCCESS,
        payload: postId
    }
}
export const deletePostFailure = (error)=>{
    return{
        type:ACTION_TYPES.DELETE_POST_FAILURE,
    }
}

export const fetchPosts = ()=>{
    return async(dispatch)=>{
        dispatch(fetchPostsRequest());
        const postsFromLocalStorage = JSON.parse(localStorage.getItem('posts'));
        console.log(postsFromLocalStorage);
        
        if(postsFromLocalStorage)
        {  
            dispatch(fetchPostsSuccess(postsFromLocalStorage));
        }
        else{
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                dispatch(fetchPostsSuccess(response.data));

                localStorage.setItem('posts', JSON.stringify(response.data));

            }catch(error)
            {
                dispatch(fetchPostsFailure(error.message));
            }
        }
        
    }
}

export const addPost = (title, body)=>{
    return async(dispatch)=>{
        dispatch(addPostRequest());
        axios.post('https://jsonplaceholder.typicode.com/posts',{
            title,
            body,
            userId:1,
        }).then(response =>{
            dispatch(addPostSuccess(response.data))
            alert("Added Successfully");
        }).catch(error =>{
            dispatch(addPostFailure(error.message))
            alert(`Ther was an error in adding new data: ${error.message}`);
        })
    }
}

export const updatePost = (id, title, body)=>{
    return async(dispatch)=>{
        dispatch(updatePostRequest());
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            title,
            body,
            userId:1
        }).then(response=>{
            dispatch(updatePostSuccess(response.data))
            alert('Updated Successfully');
        }).catch(error=>{
            dispatch(updatePostFailure(error.message))
            alert(`Ther was an error in updating current data: ${error.message}`);
        })
    }
}

export const deletePost = (id)=>{
    return async(dispatch)=>{
        dispatch(deletePostRequest());
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response=>{
            console.log(response.data);
            dispatch(deletePostSuccess(id))
            alert('Deleted Successfully');
        }).catch(error=>{
            dispatch(deletePostFailure(error.message))
            alert(`Ther was an error in deleting: ${error.message}`);
        })
    }
}