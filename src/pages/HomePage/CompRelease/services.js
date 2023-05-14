import axios from "axios";

const getList = async (params) => {
  const response = await axios.get('https://mp3.zing.vn/xhr/recommend?type=audio&id=ZW67OIA0', { params });
  return response
}



export { getList }