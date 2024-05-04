import http from './axiosContext'

const create = (data) => {
      return http.post("/Medecin",data);
}

const getAll = () => {
    return http.get("/Medecin/")
}

const getOne =(id) =>{
    return http.get(`/Medecin/${id}`)
}

const Update =(id,data) =>{
    return http.patch(`/Medecin/${id}`,data)

}

const deleteOne =(id) =>{
    return http.delete(`/Medecin/${id}`)

}
export default { create,deleteOne,Update,getOne,getAll}
