import http from './axiosContext'

const create = (data) => {
    console.log(data); // Ajoutez cette ligne pour afficher les données dans la console
    return http.post("/auth/signin", data);
  }
  
const getAll = () => {
  return http.get("/auth/signin/");
}

const getOne = (id) => {
  return http.get(`/auth/signin/${id}`);
}

const update = (id, data) => {
  return http.patch(`/auth/signin/${id}`, data);
}

const deleteOne = (id) => {
  return http.delete(`/auth/signin/${id}`);
}

export default { create, deleteOne, update, getOne, getAll };
