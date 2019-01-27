const initaialstate = {
    age:25
};

const reducer= (state=initaialstate,action)=>{
    const newState ={...state};
  if(action.type==='age_up'){
      newState.age=newState.age+action.value;
  }
    if(action.type==='age_down'){
        newState.age=newState.age-action.value;
    }
    return newState;
};

export default reducer;