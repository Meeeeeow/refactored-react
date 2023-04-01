import * as ACTION_TYPES from '../action/action_types';

const initialState = {
    posts:[],
    isLoading:false,
    error:''
}

export const postsReducer = (state=initialState,action)=>{
    switch(action.type)
    {
        case ACTION_TYPES.FETCH_POSTS_REQUEST:
        case ACTION_TYPES.ADD_POST_REQUEST:
        case ACTION_TYPES.DELETE_POST_REQUEST:
        case ACTION_TYPES.UPDATE_POST_REQUEST:
            return{
                ...state,
                isLoading:true
            }
        case ACTION_TYPES.FETCH_POSTS_SUCCESS:
            return{
                ...state,
                posts:action.payload,
                isLoading:false
            }
        case ACTION_TYPES.ADD_POST_SUCCESS:
            const allPosts = [action.payload, ...state.posts];

            localStorage.setItem('posts',JSON.stringify(allPosts));
            
            return{
                ...state,
                posts:allPosts,
                isLoading:false,
            }
        case ACTION_TYPES.DELETE_POST_SUCCESS:
            const filteredPosts = state.posts.filter(post=>post.id!==action.payload);
            
            localStorage.setItem('posts',JSON.stringify(filteredPosts));

            return{
                ...state,
                posts:filteredPosts,
                isLoading:false,
            }
        case ACTION_TYPES.UPDATE_POST_SUCCESS:
        
            const updatedPosts = state.posts.map(post=> {
                if(post.id === action.payload.id)
                {
                    return{
                        ...post,
                        title: action.payload.title,
                        body:action.payload.body,
                    }
                }
                return post;
            })

            localStorage.setItem('posts',JSON.stringify(updatedPosts));

            return{
                ...state,
                posts:updatedPosts,
                isLoading:false,
            } 
        case ACTION_TYPES.FETCH_POSTS_FAILURE:
        case ACTION_TYPES.ADD_POST_FAILURE:
        case ACTION_TYPES.DELETE_POST_FAILURE:
        case ACTION_TYPES.UPDATE_POST_FAILURE:
            return{
                ...state,
                isLoading:false,
                posts:[],
                error:action.payload
            }
        
        default:
            return state;
    }
}