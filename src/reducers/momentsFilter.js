const momentsFilter = (state = '',action)=>{
   switch (action.type) {
    case 'SET_OWNER_FILTER':
      return action.filter
    default:
      return state
  }
}

export default momentsFilter