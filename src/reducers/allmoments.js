const moment = (state, action) => {
  switch (action.type) {
    case 'ADD_MOMENT':
      return {
        id: action.id,
        content: action.content,
        nickname: action.nickname,
        profile_photo: '',
        pubish_time: '2017-06-06 08:00'
      }
    case 'LIKE_MOMENT':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        like_count: state.like_count+1
      }
    default:
      return state
  }
}
const allmoments = (state = [], action) => {
    switch (action.type) {
    	case 'LOAD_MOMENTS':
            return 
        case 'ADD_MOMENT':
            return [
                ...state,
                moment(undefined, action)
            ]
        case 'LIKE_MOMENT':
            return state.map(t =>
                moment(t, action)
            )
        case 'COMMENT_MOMENT':
            return state.map(t =>
                moment(t, action)
            )

        default:
            return state
    }

}

export default allmoments