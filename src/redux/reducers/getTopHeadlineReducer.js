
const initialState = {
   isInitial: true
}

const getTopHeadlineReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'GET_TOP_HEADLINE': return {
         ...state,
         data: action.payload
      }

      default:
         return state
   }
}

export default getTopHeadlineReducer