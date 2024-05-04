import React, { useState, useEffect } from "react";
import "./assets/css/bootstrap.min.css"; 
import "./assets/css/style.css"; 
import "./assets/plugins/fontawesome/css/fontawesome.min.css"; 
import "./assets/plugins/fontawesome/css/all.min.css"; 
import "./assets/css/bootstrap-datetimepicker.min.css"; 
import "./assets/plugins/select2/css/select2.min.css"; 
import "./assets/plugins/daterangepicker/daterangepicker.css";
import Navbar from "../../../components/Navbar/Navbar";
import compteMedService from "../../Services/compteMedService";
const OurDoctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [doctorsData, setDoctorsData] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await compteMedService.getAll();
        console.log("Response from API:", response); // Affichez la réponse de l'API
        console.log("Data received:", response.data); // Affichez les données reçues de l'API
  
        if (Array.isArray(response.data.data)) {
          setDoctorsData(response.data.data); // Mettre à jour les données avec la réponse
          setFilteredDoctors(response.data.data); // Mettre à jour les données filtrées
        } else {
          console.error("Data received is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  
  // Fonction de filtrage des médecins en fonction du terme de recherche
  useEffect(() => {
    const filteredResults = doctorsData.filter((doctor) => {
      return (
        doctor.nom.toLowerCase().includes(searchTerm.toLowerCase()) || // Filtrer par nom
        doctor.specialite.toLowerCase().includes(searchTerm.toLowerCase()) // Filtrer par spécialité
      );
    });
    setFilteredDoctors(filteredResults);
  }, [searchTerm, doctorsData]);
  
  const [showAddModal, setShowAddModal] = useState(false); // État pour contrôler la visibilité du modal "add_time_slot"
  const [showEditModal, setShowEditModal] = useState(false); // État pour contrôler la visibilité du modal "edit_time_slot"
  
  const handleLoadMoreClick = () => {
    setShowAddModal(true); // Lorsque vous cliquez sur "Load More", affichez le modal "add_time_slot"
  }; 

  const handleAddMoreClick = () => {
    setShowEditModal(true); // Lorsque vous cliquez sur "Add More" dans "add_time_slot", affichez le modal "edit_time_slot"
  };

 

  return (
    <div>
      <Navbar />
      <div class="main-wrapper">
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
                <div class="card1 search-filter">
                  <div class="card-header">
                    <h4 class="card-title mb-0"> Filter par </h4>
                  </div>
                  <div class="card-body">
                    <div class="form-group">
                      <input
                        type="text"
                        id="dr_name"
                        class="form-control"
                        placeholder="Nom / Prénom"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div class="filter-widget">
                      <input
                        type="text"
                        class="form-control datetimepicker"
                        placeholder="Spécialité"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                      />
                    </div>
                    <div class="form-group search-location">
                      <input
                        type="text"
                        id="lat_long"
                        class="form-control"
                        placeholder=" &nbsp; &nbsp;  Localisation"
                      />
                    </div>
                    <div class="filter-widget " style={{ textAlign: "left" }}>
                      <h4>Gender</h4>
                      <div>
                        <label class="custom_check">
                          <input
                            type="checkbox"
                            value="Male"
                            name="gender_type"
                            checked
                          />
                          <span class="checkmark"></span> Masculin
                        </label>
                      </div>
                      <div>
                        <label class="custom_check">
                          <input
                            type="checkbox"
                            value="Female"
                            name="gender_type"
                          />
                          <span class="checkmark"></span> Féminin
                        </label>
                      </div>
                    </div>
                    <div class="filter-widget" style={{ textAlign: "left" }}>
                      <h4>Sélectionnez le Spécialiste </h4>
                      <div>
                        <label class="custom_check">
                          <input
                            type="checkbox"
                            value="Urology"
                            name="select_specialist"
                            checked
                          />
                          <span class="checkmark" value="Urology"></span>{" "}
                          Urologie
                        </label>
                      </div>
                      <div>
                        <label class="custom_check">
                          <input
                            type="checkbox"
                            value="Neurology"
                            name="select_specialist"
                            //checked
                          />
                          <span class="checkmark"></span> Neurologie
                        </label>
                      </div>
                      <div>
                        <label class="custom_check">
                          <input
                            type="checkbox"
                            value="Dentist"
                            name="select_specialist"
                          />
                          <span class="checkmark"></span> Dentiste
                        </label>
                      </div>
                      <div>
                        <label class="custom_check">
                          <input
                            type="checkbox"
                            value="Orthopedic"
                            name="select_specialist"
                          />
                          <span class="checkmark"></span> Orthopédique
                        </label>
                      </div>
                      <div>
                        <label class="custom_check">
                          <input
                            type="checkbox"
                            value="cardio"
                            name="select_specialist"
                          />
                          <span class="checkmark"></span> Cardiologue
                        </label>
                      </div>
                    </div>
                    <div class="btn-search">
                      <button
                        type="button"
                        id="seaerch"
                        //onClick="find_results();"
                        class="btn btn-block"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div id="doctor_details" class="col-md-12 col-lg-8 col-xl-9">
              {filteredDoctors.map((doctor, index) => (
                  <div class="card1" key={index}>
                    <div class="card-body">
                      <div class="doctor-widget">
                        <div class="doc-info-left">
                          <div class="doctor-img">
                            <a href={`Infomed/${doctor.id}`}>
                              <img
                                src={`http://localhost:5000/file/${doctor.image}`}
                                alt="Doctor"
                                class="img-fluid"
                              />
                            </a>
                          </div>
                          <div class="doc-info-cont">
                            <h4 class="doc-name">
                              <a href={`Infomed/${doctor.id}`}>
                                Dr. {doctor.nom} {doctor.prenom}
                              </a>
                            </h4>
                            <p
                              class="doc-speciality"
                              style={{ textAlign: "left" }}
                            >
                              Spécialité : {doctor.specialite}
                            </p>

                            <div class="clinic-details">
                              <p
                                class="doc-location"
                                style={{ textAlign: "left" }}
                              >
                                <i class="fas fa-map-marker-alt"></i>{" "}
                                {doctor.geolocalisation},{doctor.adresse}
                              </p>
                              <span style={{ width: "200%" }}>
                                <hr />
                              </span>
                              <p>
                                -------------------------------------------------------------                                
                              </p>
                            </div>
                            <div class="clinic-services">
                              <span>{doctor.actes_soins}</span>
                            </div>
                          </div>
                        </div>
                        <div class="doc-info-right">
                          <div class="clinic-booking">
                            <a class="view-pro-btn" href={`Infomed/${doctor.id}`}>
                              Voir profil
                            </a>
                            <a class="apt-btn" href="DynamicCalendar">
                              Prendre rendez-vous
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div class="load-more text-center">
                  <a
                    class="btn btn-primary btn-sm"
                    data-toggle="modal"
                    href="#add_time_slot"
                    onClick={handleLoadMoreClick}
                  >
                    Load More
                  </a>
                </div>
              </div>
              {showAddModal && (

              <div class="modal  custom-modal" id="add_time_slot">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Add Time Slots</h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
  <form>
    <div class="hours-info">
      <div class="row form-row hours-cont">
        <div class="col-12 col-md-10">
          <div class="row form-row">
            <div class="col-6">
              <div class="form-group">
                <label>Start Time</label>
                <select name="start_time" class="form-control">
                <option _ngcontent-serverapp-c91="" disabled="">-</option>
                                      <option _ngcontent-serverapp-c91="" value="08:00">08:00</option>
                                      <option _ngcontent-serverapp-c91="" value="08:30">08:30</option>
                                      <option _ngcontent-serverapp-c91="" value="09:00">09:00</option>
                                      <option _ngcontent-serverapp-c91="" value="09:30">09:30</option>
                                      <option _ngcontent-serverapp-c91="" value="10:00">10:00</option>
                                      <option _ngcontent-serverapp-c91="" value="10:30">10:30</option>
                                      <option _ngcontent-serverapp-c91="" value="11:00">11:00</option>
                                      <option _ngcontent-serverapp-c91="" value="11:30">11:30</option>
                                      <option _ngcontent-serverapp-c91="" value="12:00">12:00</option>
                                      <option _ngcontent-serverapp-c91="" value="12:30">12:30</option>
                                      <option _ngcontent-serverapp-c91="" value="13:00">13:00</option>
                                      <option _ngcontent-serverapp-c91="" value="13:30">13:30</option>
                                      <option _ngcontent-serverapp-c91="" value="14:00">14:00</option>
                                      <option _ngcontent-serverapp-c91="" value="14:30">14:30</option>
                                      <option _ngcontent-serverapp-c91="" value="15:00">15:00</option>
                                      <option _ngcontent-serverapp-c91="" value="15:30">15:30</option>
                                      <option _ngcontent-serverapp-c91="" value="16:00">16:00</option>
                                      <option _ngcontent-serverapp-c91="" value="16:30">16:30</option>
                                      <option _ngcontent-serverapp-c91="" value="17:00">17:00</option>
                                      <option _ngcontent-serverapp-c91="" value="17:30">17:30</option>
                                      <option _ngcontent-serverapp-c91="" value="18:00">18:00</option>
                                      <option _ngcontent-serverapp-c91="" value="18:30">18:30</option>
                                      <option _ngcontent-serverapp-c91="" value="19:00">19:00</option>
                                      <option _ngcontent-serverapp-c91="" value="19:30">19:30</option>
                                      <option _ngcontent-serverapp-c91="" value="20:00">20:00</option>
                                    
                </select>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label>End Time</label>
                <select name="end_time" class="form-control">
                <option _ngcontent-serverapp-c91="" disabled="">-</option>
                                      <option _ngcontent-serverapp-c91="" value="08:00">08:00</option>
                                      <option _ngcontent-serverapp-c91="" value="08:30">08:30</option>
                                      <option _ngcontent-serverapp-c91="" value="09:00">09:00</option>
                                      <option _ngcontent-serverapp-c91="" value="09:30">09:30</option>
                                      <option _ngcontent-serverapp-c91="" value="10:00">10:00</option>
                                      <option _ngcontent-serverapp-c91="" value="10:30">10:30</option>
                                      <option _ngcontent-serverapp-c91="" value="11:00">11:00</option>
                                      <option _ngcontent-serverapp-c91="" value="11:30">11:30</option>
                                      <option _ngcontent-serverapp-c91="" value="12:00">12:00</option>
                                      <option _ngcontent-serverapp-c91="" value="12:30">12:30</option>
                                      <option _ngcontent-serverapp-c91="" value="13:00">13:00</option>
                                      <option _ngcontent-serverapp-c91="" value="13:30">13:30</option>
                                      <option _ngcontent-serverapp-c91="" value="14:00">14:00</option>
                                      <option _ngcontent-serverapp-c91="" value="14:30">14:30</option>
                                      <option _ngcontent-serverapp-c91="" value="15:00">15:00</option>
                                      <option _ngcontent-serverapp-c91="" value="15:30">15:30</option>
                                      <option _ngcontent-serverapp-c91="" value="16:00">16:00</option>
                                      <option _ngcontent-serverapp-c91="" value="16:30">16:30</option>
                                      <option _ngcontent-serverapp-c91="" value="17:00">17:00</option>
                                      <option _ngcontent-serverapp-c91="" value="17:30">17:30</option>
                                      <option _ngcontent-serverapp-c91="" value="18:00">18:00</option>
                                      <option _ngcontent-serverapp-c91="" value="18:30">18:30</option>
                                      <option _ngcontent-serverapp-c91="" value="19:00">19:00</option>
                                      <option _ngcontent-serverapp-c91="" value="19:30">19:30</option>
                                      <option _ngcontent-serverapp-c91="" value="20:00">20:00</option>
                                    </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="add-more mb-3">
      <a href="#edit_time_slot" class="add-hours" onClick={handleAddMoreClick}>
        <i class="fa fa-plus-circle"></i> Add More
      </a>
    </div>
    <div class="submit-section text-center">
      <button type="submit" class="btn btn-primary submit-btn">
        Save Changes
      </button>
    </div>
  </form>
</div>

                  </div>
                </div>
              </div>
              )}
              {showEditModal && (
              <div class="modal  custom-modal" id="edit_time_slot">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Add Time Slots</h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form id="slots" name="slots">
                        <div class="hours-info">
                          <div class="row form-row hours-cont">
                            <div class="col-12 col-md-10">
                              <div class="row form-row">
                                <div class="col-12 col-md-6">
                                  <div class="form-group">
                                    <label>Start Time</label>
                                    <select
                                      id="start_time_1"
                                      name="start_time"
                                      class="form-control"
                                    >
                                      <option _ngcontent-serverapp-c91="" disabled="">-</option>
                                      <option _ngcontent-serverapp-c91="" value="08:00">08:00</option>
                                      <option _ngcontent-serverapp-c91="" value="08:30">08:30</option>
                                      <option _ngcontent-serverapp-c91="" value="09:00">09:00</option>
                                      <option _ngcontent-serverapp-c91="" value="09:30">09:30</option>
                                      <option _ngcontent-serverapp-c91="" value="10:00">10:00</option>
                                      <option _ngcontent-serverapp-c91="" value="10:30">10:30</option>
                                      <option _ngcontent-serverapp-c91="" value="11:00">11:00</option>
                                      <option _ngcontent-serverapp-c91="" value="11:30">11:30</option>
                                      <option _ngcontent-serverapp-c91="" value="12:00">12:00</option>
                                      <option _ngcontent-serverapp-c91="" value="12:30">12:30</option>
                                      <option _ngcontent-serverapp-c91="" value="13:00">13:00</option>
                                      <option _ngcontent-serverapp-c91="" value="13:30">13:30</option>
                                      <option _ngcontent-serverapp-c91="" value="14:00">14:00</option>
                                      <option _ngcontent-serverapp-c91="" value="14:30">14:30</option>
                                      <option _ngcontent-serverapp-c91="" value="15:00">15:00</option>
                                      <option _ngcontent-serverapp-c91="" value="15:30">15:30</option>
                                      <option _ngcontent-serverapp-c91="" value="16:00">16:00</option>
                                      <option _ngcontent-serverapp-c91="" value="16:30">16:30</option>
                                      <option _ngcontent-serverapp-c91="" value="17:00">17:00</option>
                                      <option _ngcontent-serverapp-c91="" value="17:30">17:30</option>
                                      <option _ngcontent-serverapp-c91="" value="18:00">18:00</option>
                                      <option _ngcontent-serverapp-c91="" value="18:30">18:30</option>
                                      <option _ngcontent-serverapp-c91="" value="19:00">19:00</option>
                                      <option _ngcontent-serverapp-c91="" value="19:30">19:30</option>
                                      <option _ngcontent-serverapp-c91="" value="20:00">20:00</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="col-12 col-md-6">
                                  <div class="form-group">
                                    <label>End Time</label>
                                    <select
                                      id="end_time_1"
                                      name="end_time"
                                      class="form-control"
                                    >   
                                      <option _ngcontent-serverapp-c91="" disabled="">-</option>
                                      <option _ngcontent-serverapp-c91="" value="08:00">08:00</option>
                                      <option _ngcontent-serverapp-c91="" value="08:30">08:30</option>
                                      <option _ngcontent-serverapp-c91="" value="09:00">09:00</option>
                                      <option _ngcontent-serverapp-c91="" value="09:30">09:30</option>
                                      <option _ngcontent-serverapp-c91="" value="10:00">10:00</option>
                                      <option _ngcontent-serverapp-c91="" value="10:30">10:30</option>
                                      <option _ngcontent-serverapp-c91="" value="11:00">11:00</option>
                                      <option _ngcontent-serverapp-c91="" value="11:30">11:30</option>
                                      <option _ngcontent-serverapp-c91="" value="12:00">12:00</option>
                                      <option _ngcontent-serverapp-c91="" value="12:30">12:30</option>
                                      <option _ngcontent-serverapp-c91="" value="13:00">13:00</option>
                                      <option _ngcontent-serverapp-c91="" value="13:30">13:30</option>
                                      <option _ngcontent-serverapp-c91="" value="14:00">14:00</option>
                                      <option _ngcontent-serverapp-c91="" value="14:30">14:30</option>
                                      <option _ngcontent-serverapp-c91="" value="15:00">15:00</option>
                                      <option _ngcontent-serverapp-c91="" value="15:30">15:30</option>
                                      <option _ngcontent-serverapp-c91="" value="16:00">16:00</option>
                                      <option _ngcontent-serverapp-c91="" value="16:30">16:30</option>
                                      <option _ngcontent-serverapp-c91="" value="17:00">17:00</option>
                                      <option _ngcontent-serverapp-c91="" value="17:30">17:30</option>
                                      <option _ngcontent-serverapp-c91="" value="18:00">18:00</option>
                                      <option _ngcontent-serverapp-c91="" value="18:30">18:30</option>
                                      <option _ngcontent-serverapp-c91="" value="19:00">19:00</option>
                                      <option _ngcontent-serverapp-c91="" value="19:30">19:30</option>
                                      <option _ngcontent-serverapp-c91="" value="20:00">20:00</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                        </div>

                        <div class="submit-section text-center">
                          <button
                            type="button"
                            id="btnSave"
                            class="btn btn-primary submit-btn"
                          >
                            Save Changes
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDoctors;
