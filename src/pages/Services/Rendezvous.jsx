import http from './axiosContext'
const create = (data) => {
    return http.post("/RendezvousPatient", data);
  }
  
const getAll = () => {
  return http.get("/RendezvousPatient/");
}


const getOne = (id) => {
  return http.get(`/RendezvousPatient/${id}`);
}

const update = (id, data) => {
  return http.patch(`/RendezvousPatient/${id}`, data);
}

const deleteOne = (id) => {
  return http.delete(`/RendezvousPatient/${id}`);
}

export default { create, deleteOne, update, getOne, getAll };