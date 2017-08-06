var axios = require('axios')
const API_URL = 'http://localhost:3000/api';

export function action (){
 return function(dispatch){
 	axios.get(`${API_URL}/allmoments`)
	  .then((res)=>{
	  	dispatch({
	  		payload: res.data,
	  		type: 'LOAD_MOMENTS'
	  	})
	  })
	  .catch((err)=>{
	  	console.log(err)
	  })
 }
  
}

