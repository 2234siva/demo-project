let initialState = []
export default function workreducer(state=initialState,action)
 { switch(action.type){

     case'Employees':

     return action.workload;

     default:

         return state;

}
    
}
