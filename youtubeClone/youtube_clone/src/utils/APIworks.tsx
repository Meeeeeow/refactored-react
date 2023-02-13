import axios from "axios";
const BASE_URL ='https://youtube-v31.p.rapidapi.com';
const options = {
    url: BASE_URL,
    params: {
        maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': 'ab25ec6887msh829066c2387ba60p15f9e2jsncde1c68a29a6',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI = async(url: string)=>{
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // console.log(data.items);
    return data;

}  