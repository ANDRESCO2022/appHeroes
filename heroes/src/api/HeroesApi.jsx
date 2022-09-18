import axios  from 'axios'
 const baseURL = 'https://api-heroes-v1-default-rtdb.firebaseio.com'

 const heroApi =axios.create({baseURL})
 
 export default heroApi