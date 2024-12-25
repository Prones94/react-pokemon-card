import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import axios from "axios"

const useAxios = (baseUrl, formatData, localStorageKey) => {
  const [data, setData] = useState(localStorageKey,[])

  const addData = async(endpoint="") => {
    const response = await axios.get(`${baseUrl}${endpoint}`)
    const formattedData = formatData(response.data)
    setData((data) => [...data, formattedData])
  }

  const clearData = () => {
    setData([])
  }
  return [data,addData, clearData]
}

export default useAxios