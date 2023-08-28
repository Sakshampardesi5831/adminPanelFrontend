import axios from "axios";
//"http://localhost:8080/"
const instance=axios.create({
  baseURL:`${process.env.NEXT_PUBLIC_BACKENDAPI}`,
  withCredentials:true  
});

export default instance;