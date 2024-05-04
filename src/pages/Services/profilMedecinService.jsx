import http from './axiosContext'
const create = (data) => {
    console.log(data); // Ajoutez cette ligne pour afficher les données dans la console
    return http.post("/ProfilMed", data);
  }
const getAll = () => {
  return http.get("/ProfilMed/");
}
const getOne = (id) => {
  return http.get(`/ProfilMed/${id}`);
}
const update = (id, data) => {
  return http.patch(`/ProfilMed/${id}`, data);
}
const deleteOne = (id) => {
  return http.delete(`/ProfilMed/${id}`);
}
export default { create, deleteOne, update, getOne, getAll };