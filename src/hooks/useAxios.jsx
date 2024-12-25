import React, { useState } from 'react';
import axios from "axios"

const useAxios = () => {
  const [data, setData] = useState([])

  const addData = async(endpoint="") => {
    const response = await axios.get(`${baseUrl}${endpoint}`)
    setData((data) => [...data, {...response.data}])
  }
  return [data,addData]
}

export default useAxios