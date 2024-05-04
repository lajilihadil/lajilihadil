import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./infomed.css";
// Importez les composants nécessaires de Leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import LeafletGeocoder from "./LeafletGeocoder";
import LeafletRoutingMachine from "./LeafletRoutingMachine";
import compteMedService from "../Services/compteMedService";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
const Infomed = () => {
  const [medecins, setMedecins] = useState([]);
  const [medecinsData, setMedecinsData] = useState([]);
  useEffect(() => {
    const fetchMedecins = async () => {
      try {
        const response = await compteMedService.getAll();
        if (Array.isArray(response.data.data)) {
          setMedecins(response.data);
          setMedecinsData(response.data.data);
          console.log("Affichage des plannings des médecins :");
          medecinsData.forEach((medecin, index) => {
            console.log(`Médecin ${index + 1}:`);
            console.log(medecin.planning);
            const planning = medecin.planning;
            console.log("ee", planning);
          });
        } else {
          console.error("Data received is not an array:", response.data);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des médecins :", error);
      }
    };
    fetchMedecins();
  }, []);
  const planning = {
    lundi: { statut: "ouvert", matin: true, apresMidi: true },
    mardi: { statut: "ouvert", matin: true, apresMidi: false },
    mercredi: { statut: "ferme", matin: false, apresMidi: false },
    jeudi: { statut: "ouvert", matin: false, apresMidi: true },
    vendredi: { statut: "ouvert", matin: true, apresMidi: true },
    samedi: { statut: "ferme", matin: false, apresMidi: false },
    dimanche: { statut: "ferme", matin: false, apresMidi: false },
  };
  // Fonction pour formater les horaires
  function formatHoraires(planning) {
    let result = "";
    for (const [jour, horaires] of Object.entries(planning)) {
      let horaireText = "fermé";
      if (horaires.statut === "ouvert") {
        horaireText =
          horaires.matin && horaires.apresMidi
            ? "00h00 - 00h00"
            : horaires.matin
            ? "08h00 - 12h00"
            : horaires.apresMidi
            ? "14h00 - 18h00"
            : "fermé";
      }
      result += `${
        jour.charAt(0).toUpperCase() + jour.slice(1)
      } :\n${horaireText}\n\n`;
    }
    return result;
  }
  // Appel de la fonction pour formater les horaires
  const formattedHoraires = formatHoraires(planning);
  console.log(formattedHoraires);
  return (
    <div className="content-info">
      <Navbar />
      <section class="single-detail">
        <div class="container">
          <div class="row">
            <div className="col-md-8 col-lg-3 col-12 mb-3">
              {medecinsData.map((medecin, index) => (
                <div key={index} class="pro-sec">
                  <div class="single-pic">
                    <img
                      src={`http://localhost:5000/file/${medecin.image}`}
                      alt={`Dr. ${medecin.nom}`}
                    />
                  </div>
                  <div class="single-data">
                    <h4
                      class="centered-text"
                      style={{ textAlign: "center", marginLeft: "-70px" }}
                    >
                      {" "}
                      Dr. {medecin.nom} {medecin.prenom}{" "}
                    </h4>
                    <p>{medecin.specialite}</p>
                    <ul class="list-unstyled">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "10px",
                        }}
                      >
                        <i
                          class="fas fa-user-md"
                          style={{
                            marginRight: "9px",
                            marginTop: "-29px",
                            fontSize: "13px",
                            color: "#0893CF",
                          }}
                        ></i>
                        <li style={{ margin: "0", padding: "0" }}>
                          Accepte les nouveaux patients sur MediSphèreVie
                        </li>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "10px",
                        }}
                      >
                        <i
                          style={{
                            marginRight: "0px",
                            marginTop: "-38px",
                            color: "#0893CF",
                          }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            class="dl-icon mr-8 mt-4 dl-icon-xsmall"
                            data-icon-name="regular/location-dot"
                            data-design-system="oxygen"
                            data-design-system-component="Icon"
                          >
                            <path d="M9.875 6.5A1.866 1.866 0 0 1 8 8.375 1.85 1.85 0 0 1 6.125 6.5c0-1.031.82-1.875 1.875-1.875A1.88 1.88 0 0 1 9.875 6.5M8 5.75a.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75A.77.77 0 0 0 8 5.75m4.5.75c0 2.063-2.742 5.695-3.96 7.219a.707.707 0 0 1-1.102 0C6.218 12.195 3.5 8.563 3.5 6.5 3.5 4.016 5.492 2 8 2c2.484 0 4.5 2.016 4.5 4.5M8 3.125A3.376 3.376 0 0 0 4.625 6.5c0 .305.094.75.352 1.36.234.562.585 1.218.984 1.874A36 36 0 0 0 8 12.594c.563-.75 1.336-1.781 2.016-2.86.398-.656.75-1.312.984-1.875.258-.609.375-1.054.375-1.359A3.39 3.39 0 0 0 8 3.125"></path>
                          </svg>
                        </i>
                        <li
                          style={{
                            margin: "0",
                            padding: "0",
                            marginTop: "30px",
                          }}
                        >
                          <strong> Adresse :</strong>
                          {medecin.adresse}, {medecin.gouvernorat} 10 Place
                          Hoche, 78000 Versailles
                        </li>
                      </div>
                    </ul>
                  </div>
                  <ul class="list-inline list-unstyled sgd">
                    <li
                      class="list-inline-item"
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "#F7DB3B",
                        padding: "5px",
                        margin: "5px",
                      }}
                    >
                      <a
                        href="/DynamicCalendar"
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        <FaCalendarAlt />
                        <span style={{ marginLeft: "5px" }}>
                          Prendre un rendez-vous 
                        </span>
                      </a>
                    </li>
                    {/*<li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li class="list-inline-item"> <a href="#"><i class="fab fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>*/}
                  </ul>
                </div>
              ))}
            </div>
            <div class="col-md-8 col-lg-9 col-12 mb-3">
              {medecinsData.map((medecin, index) => (
                <div key={index}>
                  <div class="single-serv">
                    <h5>
                      <i class="fas fa-user-md" style={{ color: "black" }}></i>
                      Présentation
                    </h5>
                    <p>{medecin.description}</p>
                  </div>
                  <div class="single-serv">
                    <h5>
                      <i
                        class="fas fa-briefcase-medical"
                        style={{ marginRight: "5px" }}
                      ></i>
                      Expertises et actes
                    </h5>
                    <div
                      class="dl-profile-skills"
                      style={{ overflow: "inherit", maxHeight: "inherit" }}
                    >
                      <div class="dl-profile-skill-chip">{medecin.actes} </div>
                      {/*<div class="dl-profile-skill-chip">
                        Exploration pneumologique
                      </div>
                      <div class="dl-profile-skill-chip">
                        Pneumo-allergologie
                      </div>
                      <div class="dl-profile-skill-chip">
                        Polygraphie ventilatoire
                      </div>
                      <div class="dl-profile-skill-chip">Ronflements</div>
                      <div class="dl-profile-skill-chip">Tabacologie</div>
                      <div class="dl-profile-skill-chip">
                        Troubles du sommeil
                      </div>
                      <div class="dl-profile-skill-chip">
                        Épreuves fonctionnelles respiratoires (EFR)
                      </div>*/}
                    </div>
                  </div>
                  <div class="single-serv">
                    <h5>
                      <i class="fas fa-user-md"></i>Tarif et remboursements
                    </h5>
                    <div className="card-section">
                      <img
                        src="/img/cnam.png"
                        alt="Description de l'image"
                        style={{ marginRight: "10px", height: "40px" }}
                      />
                      <span style={{ fontSize: "15px" ,marginRight:"555px"}}>
                        Conventionné avec CNAM {medecin.conventionCNAM}
                      </span>
                    </div>
                    <div className="col-md-6 ml-auto">
                      <div
                        className="card-section"
                        style={{ marginTop: "-55px" }}
                      >
                        <h4
                          style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            marginLeft: "-30px",
                          }}
                        >
                          <i
                            className="fas fa-credit-card"
                            style={{ marginRight: "10px", color: "blue" }}
                          ></i>
                          Moyens de paiement
                        </h4>
                      </div>
                      <p style={{ fontSize: "15px" }}>
                        Chèques, Espèces et Carte bancaire
                      </p>
                    </div>
                  </div>
                  <div class="single-serv ">
                    <div class="row">
                      <div class="col-md-12">
                        <h5 class="section-title">
                          <i class="fas fa-briefcase-medical"></i>Carte et
                          informations d'accès
                        </h5>
                      </div>
                      <div class="col-md-6">
                        <div class="section-content ">
                          <div class="">
                            <div>
                              <div class="">
                                <h3 class="" style={{ fontSize: "23px" }}>
                                  Informations de Contact
                                </h3>
                                <div class=""></div>
                                <i
                                  class="fas fa-map-marker-alt"
                                  style={{
                                    marginRight: "7px",
                                    color: "red",
                                    fontSize: "15px",
                                  }}
                                />
                                {medecin.adresse}
                              </div>
                            </div>
                            <span style={{ fontSize: "15px" }}>
                              12 Rue Carnot, Versailles
                            </span>
                            <div style={{ marginTop: "10px" }}>
                              <span style={{ fontSize: "13px" }}>
                                <BsFillTelephoneFill />
                              </span>{" "}
                              <a
                                class="profile__btn-msg btn-calling viewphone btn-action"
                                data-type="call"
                                data-id="221842"
                              >
                                {medecin.telephone_mobile}
                              </a>
                              <br />
                              <span style={{ fontSize: "13px" }}>
                                <BsFillTelephoneFill />
                              </span>{" "}
                              <a
                                class="profile__btn-msg btn-calling viewphone btn-action"
                                data-type="call"
                                data-id="221842"
                              >
                                {" "}
                                {medecin.telephone_fixe}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-resp col-md-6 col-sm-12 col-xs-12">
                        <div class="iframe-container">
                          <iframe
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            src="https://maps.google.com/maps?q=35.676050,10.876514&amp;hl=fr&amp;z=14&amp;output=embed"
                          ></iframe>
                        </div>
                        <button
                          class="maproute btn-action"
                          style={{
                            width: "108%",
                            height: "35px",
                            marginTop: "-30px",
                            fontSize: "15px",
                          }}
                          onclick="window.location.href = 'https://www.google.com/maps/dir/?api=1&amp;destination=35.676050,10.876514';"
                        >
                          <i
                            class="fas fa-map-marker-alt"
                            style={{ marginRight: "5px" }}
                          ></i>
                          Itinéraire
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="single-serv">
                    <h5>
                      <i class="fas fa-user-md"></i>Horaires d'ouverture et
                      contacts
                    </h5>
                    <div class="row">
                      <div class="col-md-6">
                        <h3
                          className="dl-profile-card-subtitle"
                          style={{ fontSize: "22px" }}
                        >
                          Horaires d'ouverture
                        </h3>
                        <div
                          className="js-opening-hours"
                          data-props={JSON.stringify({
                            openingHours: [
                              {
                                day: 1,
                                ranges: [["00:00", "00:00"]],
                                enabled: true,
                              },
                              {
                                day: 2,
                                ranges: [["00:00", "00:00"]],
                                enabled: true,
                              },
                              {
                                day: 3,
                                ranges: [["00:00", "00:00"]],
                                enabled: true,
                              },
                              {
                                day: 4,
                                ranges: [["00:00", "00:00"]],
                                enabled: true,
                              },
                              {
                                day: 5,
                                ranges: [["00:00", "00:00"]],
                                enabled: true,
                              },
                              {
                                day: 6,
                                ranges: [["00:00", "00:00"]],
                                enabled: true,
                              },
                              {
                                day: 0,
                                ranges: [["00:00", "00:00"]],
                                enabled: true,
                              },
                            ],
                            profile_id: 835175,
                            speciality_id: 16,
                          })}
                        >
                          <div
                            data-test="opening-hours"
                            data-design-system="base"
                          >
                            <time
                              itemprop="openingHours"
                              content="Mo 00:00-00:00"
                              className="dl-openings-day"
                              data-design-system="base"
                            >
                              <div className="dl-openings-day-label">
                                {formattedHoraires
                                  .split("\n")
                                  .map((line, index) => (
                                    <React.Fragment key={index}>
                                      {line}
                                      <br />
                                    </React.Fragment>
                                  ))}
                              </div>
                            </time>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <time
                          itemprop="openingHours"
                          content="Tu 00:00-00:00"
                          className="dl-openings-day"
                          data-design-system="base"
                        >
                          <div className="dl-openings-day-label">Lundi : </div>
                          <div className="dl-openings-day-slots">
                            <span>
                              {" "}
                              <img
                                src="https://cdn.med.tn/img/icon/ic-time.svg"
                                style={{ width: "16px", height: "16px" }}
                                alt=""
                              />{" "}
                            </span>
                          </div>
                          00h00 - 00h00
                        </time>
                        <time
                          itemprop="openingHours"
                          content="Tu 00:00-00:00"
                          className="dl-openings-day"
                          data-design-system="base"
                        >
                          <div className="dl-openings-day-label">Mardi : </div>
                          <div className="dl-openings-day-slots">
                            <span>
                              {" "}
                              <img
                                src="https://cdn.med.tn/img/icon/ic-time.svg"
                                style={{ width: "16px", height: "16px" }}
                                alt=""
                              />{" "}
                            </span>
                          </div>
                          00h00 - 00h00
                        </time>
                        <time
                          itemprop="openingHours"
                          content="We 00:00-00:00"
                          className="dl-openings-day"
                          data-design-system="base"
                        >
                          <div className="dl-openings-day-label">
                            Mercredi :{" "}
                          </div>
                          <div className="dl-openings-day-slots">
                            <span>
                              {" "}
                              <img
                                src="https://cdn.med.tn/img/icon/ic-time.svg"
                                style={{
                                  width: "16px",
                                  height: "18px",
                                  marginLeft: "-22px",
                                }}
                                alt=""
                              />
                            </span>
                          </div>{" "}
                          00h00 - 00h00
                        </time>
                        <time
                          itemprop="openingHours"
                          content="Th 00:00-00:00"
                          className="dl-openings-day"
                          data-design-system="base"
                        >
                          <div className="dl-openings-day-label">Jeudi : </div>
                          <div className="dl-openings-day-slots">
                            <span>
                              {" "}
                              <img
                                src="https://cdn.med.tn/img/icon/ic-time.svg"
                                style={{
                                  width: "16px",
                                  height: "16px",
                                  marginLeft: "2px",
                                }}
                                alt=""
                              />{" "}
                            </span>
                          </div>
                          00h00 - 00h00
                        </time>
                        <time
                          itemprop="openingHours"
                          content="Fr 00:00-00:00"
                          className="dl-openings-day"
                          data-design-system="base"
                        >
                          <div className="dl-openings-day-label">
                            Vendredi :{" "}
                          </div>
                          <div className="dl-openings-day-slots">
                            <span>
                              {" "}
                              <img
                                src="https://cdn.med.tn/img/icon/ic-time.svg"
                                style={{
                                  width: "16px",
                                  height: "16px",
                                  marginLeft: "-22px",
                                }}
                                alt=""
                              />
                            </span>
                          </div>{" "}
                          00h00 - 00h00
                        </time>
                        <time
                          itemprop="openingHours"
                          content="Sa 00:00-00:00"
                          className="dl-openings-day"
                          data-design-system="base"
                        >
                          <div className="dl-openings-day-label">Samedi : </div>
                          <div className="dl-openings-day-slots">
                            <span>
                              {" "}
                              <img
                                src="https://cdn.med.tn/img/icon/ic-time.svg"
                                style={{
                                  width: "16px",
                                  height: "16px",
                                  marginLeft: "-12px",
                                }}
                                alt=""
                              />
                            </span>
                          </div>{" "}
                          00h00 - 00h00
                        </time>
                        <time
                          itemprop="openingHours"
                          content="Su 00:00-00:00"
                          className="dl-openings-day"
                          data-design-system="base"
                        >
                          <div className="dl-openings-day-label">
                            Dimanche :{" "}
                          </div>
                          <div className="dl-openings">
                            <span>
                              {" "}
                              <img
                                src="https://cdn.med.tn/img/icon/ic-time.svg"
                                style={{
                                  width: "16px",
                                  height: "16px",
                                  marginLeft: "-25px",
                                }}
                                alt=""
                              />
                            </span>
                          </div>{" "}
                          Fermé
                        </time>
                      </div>
                    </div>
                  </div>
                  <div class="single-serv">
                    <h5>
                      <i class="fas fa-user-md"></i>Tarif et remboursements
                    </h5>
                    <ul className="p-0">
                      <li className="list-none">
                        <div className="dl-profile-text dl-profile-fee">
                          <span
                            className="dl-profile-fee-name"
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              marginLeft: "-60px",
                            }}
                          >
                            Consultation :{" "}
                          </span>
                          <span className="dl-profile-fee-tag">
                            {medecin.tarif}
                          </span>
                        </div>
                      </li>
                    </ul>
                    <span style={{ width: "200%" }}>
                      <hr />
                    </span>
                    <p className="dl-profile-pricing-warning">
                      Ces honoraires vous sont communiqués à titre indicatif par
                      le praticien. Ils peuvent varier selon le type de soins
                      finalement réalisés en cabinet, le nombre de consultations
                      et les actes additionnels nécessaires. En cas de
                      dépassement des tarifs, le praticien doit en avertir
                      préalablement le patient.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Infomed;
