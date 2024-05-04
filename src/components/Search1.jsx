import React, { useEffect, useState } from "react";
import './searchbar.css';

const Search1 = ({ list, setList, filterField = item => item, ...props }) => {
  const [value, setValue] = useState("");
 
  const handleChange = (event) => {
    const updatedValue = event.target.value; // Mettre à jour la valeur de l'input
    setValue(updatedValue);

    // Utiliser la nouvelle valeur pour filtrer la liste
    if (updatedValue) {
      const filteredList = filterList(updatedValue);
      setList(filteredList); // Assurez-vous que setList est appelé avec la liste filtrée
    } else {
      setList([]); // Si la valeur est vide, réinitialiser la liste affichée
    }
  };

  const filterList = (value) => {
    // Vérifier si list est défini
    if (!list) return [];
    
    return list.filter(item => {
      // Vérifie si 'nom' et 'specialite' sont définis dans l'objet item avant de les utiliser
      if (item.nom && item.specialite) {
        return (
          item.nom.toLowerCase().includes(value.toLowerCase()) ||
          item.specialite.toLowerCase().includes(value.toLowerCase())
        );
      } else {
        return false; // Retourne false si 'nom' ou 'specialite' est manquant dans l'objet item
      }
    });
  };
  

  return (
    <input type="text" className="form-control" id="inputAddress1" placeholder="" onChange={handleChange} value={value} {...props} />
  );
};

export default Search1;
