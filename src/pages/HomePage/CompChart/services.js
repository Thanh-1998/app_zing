import axios from "axios";

const getList = async (params) => {
  const respone = await axios.get('https://mp3.zing.vn/xhr/recommend?type=audio&id=ZW67OIA0', { params })
  return respone;
}

export { getList };