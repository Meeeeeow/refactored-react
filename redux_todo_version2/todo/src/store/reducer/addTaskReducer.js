import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
    allTasks:[],
    columns:{
        'column-1':{
            id:'column-1',
            title: 'To Do',
            taskIds: []
          },
          'column-2':{
            id:'column-2',
            title: 'In Progress',
            taskIds: []
          },
          'column-3':{
            id:'column-3',
            title: 'Done',
            taskIds: []
          },
    },
    columnOrder: ['column-1','column-2','column-3']

}

export const taskReducer = (state = initialState, action) =>{
    switch(action.type){
        case ACTION_TYPES.ADD_TASK:
            return{
                ...state,
                allTasks:[...state.allTasks, action.payload],
                columns:{
                    ...state.columns,
                    'column-1':{
                        ...state.columns['column-1'],
                        taskIds:[...state.columns['column-1'].taskIds,Number(action.payload.id)]
                    }
                }
                
            }
        default:
            return state;
    }
}