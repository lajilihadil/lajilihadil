import http from './axiosContext'

const create = (data) => {
    return http.post("/Passion", data);
  }

const getAll = () => {
    return http.get("/Passion/")
}

const getOne =(id) =>{
    return http.get(`/Passion/${id}`)
}

const Update =(id,data) =>{
    return http.put(`/Passion/${id}`,data)

}

const deleteOne =(id) =>{
    return http.delete(`/Passion/${id}`)

}
export default { create,deleteOne,Update,getOne,getAll}
