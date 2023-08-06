import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const deletePerson = id =>{
    console.log(`are we going to delete ${id}`)
    const request = axios.delete(baseUrl +`/${id}`)
    return request.then(response => response.data)
}

const updateNumber =(id, changedPerson) =>{
    const request = axios.put(`${baseUrl}/${id}`, changedPerson)
    return request.then(response => response.data)
}

export default { getAll, create, deletePerson, updateNumber}