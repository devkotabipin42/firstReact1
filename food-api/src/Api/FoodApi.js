import axios from 'axios'

export const getData = async()=>{
  const response = await axios.get('https://free-food-menus-api-two.vercel.app/burgers')
  return response.data
  
}
