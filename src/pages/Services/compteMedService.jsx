import http from './axiosContext'

const create = (data) => {
    return http.post("/CompteMedecin", data);
  }
  
const getAll = () => {
  return http.get("/CompteMedecin/");
}


const getOne = (id) => {
  return http.get(`/CompteMedecin/${id}`);
}

const update = (id, data) => {
  return http.patch(`/CompteMedecin/${id}`, data);
}

const deleteOne = (id) => {
  return http.delete(`/CompteMedecin/${id}`);
}

export default { create, deleteOne, update, getOne, getAll };
