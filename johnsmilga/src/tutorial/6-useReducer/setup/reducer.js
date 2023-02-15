const reducer = (state,action) =>{
  if(action.type === 'ADD_ITEM'){
    const newPeople = [...state.people,action.payload]
    return {
      ...state,
      people:newPeople,
      isModalOpen:true,
      modalContent:'Item added'
    }
  }
  if(action.type === 'NO_VALUE'){
    return {...state,showModal:true,modalContent:'please enter value'}
  }
  if(action.type === "CLOSE_MODAL"){
    return {...state,isModalOpen:false,modelContent:""}
  }
  if(action.type === "REMOVE_ITEM"){
    const newPeople = state.people.filter((person) => person.id !== action.payload)
    return {...state,people:newPeople}
  }
  throw new Error('no matching action type')
}