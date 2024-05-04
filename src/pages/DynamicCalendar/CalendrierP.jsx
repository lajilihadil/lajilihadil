import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./style.css";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import intlTelInput from "intl-tel-input";
import profilMedecinService from "../Services/profilMedecinService";
const CalendrierP = () => {
  const [actes, setActes] = useState([]);
  const [availableMotifs, setAvailableMotifs] = useState([]);
  const [activeStep, setActiveStep] = useState(1);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currMonth, setCurrMonth] = useState(currentDate.getMonth());
  const [currYear, setCurrYear] = useState(currentDate.getFullYear());
  const [selectedHour, setSelectedHour] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [hoursVisible, setHoursVisible] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const motifs = getAvailableMotifs();
    setAvailableMotifs(motifs);
  }, [actes]);

  const fetchData = async () => {
    try {
      const response = await profilMedecinService.getAll();
      setActes(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getAvailableMotifs = () => {
    if (Array.isArray(actes) && actes.length > 0) {
      const motifs = actes.map(({ actes_soins }) => actes_soins);
      return [...new Set(motifs)];
    }
    return [];
  };
  const toggleHoursVisibility = () => {
    setHoursVisible((prevVisibility) => !prevVisibility);
  };
  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  const handleHourClick = (hour) => {
    setSelectedHour(hour);
    setActiveStep((prevStep) => prevStep + 1);
  };
  const daysOfWeek = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const months = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  const renderCalendar = () => {
    const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();

    const calendarData = [];

  for (let i = 1; i <= lastDateofMonth; i++) {
    const date = new Date(currYear, currMonth, i);
    const today = new Date();
    
    // Ajouter une condition pour filtrer les dates avant la date d'aujourd'hui
    if (date >= today) {
      const dayOfWeek = date.getDay();

      // Ajouter les horaires disponibles pour chaque date ici
      const availableHoursForDate = [
        "8:00",
        "9:00",
        "10:00",
        "8:00",
        "9:00",
        "10:00",
      ]; // Exemple d'horaires disponibles

      calendarData.push({ date, availableHours: availableHoursForDate });
    }
  }

  return calendarData;
};

  const handlePrevNextClick = (increment) => {
    setCurrMonth(currMonth + increment);

    if (currMonth < 0 || currMonth > 11) {
      const newDate = new Date(currYear, currMonth, new Date().getDate());
      setCurrYear(newDate.getFullYear());
      setCurrMonth(newDate.getMonth());
    }
  };
  const handleDateClick = (date) => {
    // Si la date cliquée est la même que la date sélectionnée, désélectionnez-la
    if (selectedDate && selectedDate.getTime() === date.getTime()) {
      setSelectedDate(null); // Désélectionner la date
    } else {
      setSelectedDate(date); // Sinon, sélectionner la date cliquée
    }
  };

  const handleOnChange = (value, country) => {
    // La valeur de téléphone mise à jour avec le nouveau numéro de téléphone
    setPhoneNumber(value);
  };
  return (
    <div style={{ backgroundColor: "#f1f7fe" }}>
      <Navbar />
      <section className="single-detail">
        <div className="container">
          <div className="row">
            {activeStep === 1 && (
              <div
                className="col-md-6 col-lg-7 col-12 mb-3"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  marginRight: "5%",
                }}
              >
                <div style={{ marginLeft: "7%", marginRight: "-7%" }}>
                  <div className="btn-group2">
                    <button
                      class="Tappable-inactive dl-button-small-neutral dl-button dl-button-size-medium"
                      type="button"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "white",
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        border: "none",
                        paddingLeft: "10px",
                        cursor: "pointer",
                      }}
                    >
                      <span class="dl-button-label">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                          class="dl-icon dl-button-left-icon dl-icon-small"
                          data-icon-name="regular/arrow-left"
                          data-design-system="oxygen"
                          data-design-system-component="Icon"
                        >
                          <path d="M7.04 12.36 2.913 8.421A.56.56 0 0 1 2.75 8a.55.55 0 0 1 .164-.398L7.04 3.664c.234-.21.586-.21.797.024a.56.56 0 0 1-.024.796L4.696 7.438h7.97c.327 0 .562.257.562.562a.57.57 0 0 1-.563.563h-7.97l3.117 2.976a.56.56 0 0 1 .024.797.56.56 0 0 1-.797.023Z"></path>
                        </svg>
                        <a href="/Infomed">Étape précédente</a>
                      </span>
                    </button>
                  </div>
                  <h4 style={{ marginLeft: "-10%" }}>
                    Choisissez la date de consultation
                  </h4>
                  <div className="calendar">
                    <div className="icons">
                      <span
                        id="prev"
                        className="material-symbols-rounded arrow-left"
                        onClick={() => handlePrevNextClick(-1)}
                      >
                        <FaChevronLeft /> {/* Icône de flèche gauche */}
                      </span>
                      <span
                        id="next"
                        className="material-symbols-rounded arrow-left"
                        onClick={() => handlePrevNextClick(1)}
                      >
                        <FaChevronRight /> {/* Icône de flèche droite */}
                      </span>
                    </div>
                    {renderCalendar().map((dayData, index) => (
                      <div
                        key={index}
                        className="day-container"
                        style={{ textAlign: "left", cursor: "pointer" }}
                      >
                        <p onClick={() => handleDateClick(dayData.date)}>{`${
                          daysOfWeek[dayData.date.getDay()]
                        } ${dayData.date.getDate()} ${
                          months[currMonth]
                        } ${currYear}`}</p>
                        {selectedDate &&
                          selectedDate.getTime() === dayData.date.getTime() && (
                            <>
                              <hr
                                style={{
                                  width: "100%",
                                  marginTop: "10px",
                                  marginBottom: "10px",
                                }}
                              />
                              <div
                                style={{ display: "flex", flexWrap: "wrap" }}
                              >
                                {dayData.availableHours.map(
                                  (hour, hourIndex) => (
                                    <div
                                      key={hourIndex}
                                      style={{ width: "25%", padding: "5px" }}
                                      onClick={() =>
                                        handleHourClick(dayData.date)
                                      }
                                    >
                                      <div
                                        style={{
                                          background: "#e5f9ff",
                                          padding: "10px",
                                          borderRadius: "5px",
                                          textAlign: "center",
                                        }}
                                      >
                                        {hour}
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </>
                          )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {/* Saisie du motif de consultation */}
            {activeStep === 2 && (
              <div
                className="col-md-6 col-lg-7 col-12 mb-3"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  marginRight: "5%",
                }}
              >
                <div style={{ marginLeft: "7%", marginRight: "-7%" }}>
                  {selectedHour && (
                    <div>
                      <div className="btn-group2">
                        {activeStep > 1 && (
                          <button
                            class="Tappable-inactive dl-button-small-neutral dl-button dl-button-size-medium"
                            type="button"
                            style={{
                              cursor: "pointer",
                              backgroundColor: "white",
                              color: "black",
                              display: "flex",
                              alignItems: "center",
                              border: "none",
                              paddingLeft: "10px",
                              cursor: "pointer",
                            }}
                            onClick={handlePrev}
                          >
                            <span class="dl-button-label">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                class="dl-icon dl-button-left-icon dl-icon-small"
                                data-icon-name="regular/arrow-left"
                                data-design-system="oxygen"
                                data-design-system-component="Icon"
                              >
                                <path d="M7.04 12.36 2.913 8.421A.56.56 0 0 1 2.75 8a.55.55 0 0 1 .164-.398L7.04 3.664c.234-.21.586-.21.797.024a.56.56 0 0 1-.024.796L4.696 7.438h7.97c.327 0 .562.257.562.562a.57.57 0 0 1-.563.563h-7.97l3.117 2.976a.56.56 0 0 1 .024.797.56.56 0 0 1-.797.023Z"></path>
                              </svg>
                              Étape précédente
                            </span>
                          </button>
                        )}
                      </div>
                      <h4 style={{ marginLeft: "-10%" }}>
                        Choisissez votre motif de consultation
                      </h4>
                      <div
                        className="dl-scrollable flex flex-col px-16 pb-24"
                        data-design-system="base"
                      >
                        <div
                          data-test="booking-funnel-container"
                          className="mt-16"
                        >
                          <table
                            className="table"
                            style={{ borderRadius: "10px" }}
                          >
                            <tbody style={{ borderRadius: "10px" }}>
                              {actes.map((acte, index) => (
                                <tr
                                  key={index}
                                  tabIndex="0"
                                  role="button"
                                  className="Tappable-inactive dl-list-item dl-list-item-medium dl-list-item-tappable dl-list-item-border-all dl-list-item-rounded dl-list-item-hover"
                                  aria-describedby="step-title"
                                  data-test="booking-motive-list-item"
                                  aria-disabled="false"
                                  data-design-system="oxygen"
                                  data-design-system-component="ListItem"
                                  style={{
                                    borderRadius: "10px",
                                    "-webkit-tap-highlight-color":
                                      "rgba(0, 0, 0, 0)",
                                    "user-select": "none",
                                    cursor: "pointer",
                                  }}
                                >
                                  <td
                                    className="dl-list-item-content"
                                    onClick={() => handleNext()}
                                    style={{ border: "#f9fh5" }}
                                  >
                                    <span
                                      className="dl-text dl-text-body dl-text-regular dl-text-s dl-text-neutral-130 dl-list-item-description"
                                      data-design-system="oxygen"
                                      data-design-system-component="Text"
                                      style={{ borderRadius: "10px" }}
                                    >
                                      <span
                                        className=""
                                        role="text"
                                        style={{ borderRadius: "10px" }}
                                      >
                                        {acte.actes_soins}
                                      </span>
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            {activeStep === 3 && (
              <div
                className="col-md-6 col-lg-7 col-12 mb-3"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  marginRight: "5%",
                }}
              >
                <div style={{ marginLeft: "7%", marginRight: "-7%" }}>
                  {activeStep > 1 && (
                    <button
                      class="Tappable-inactive dl-button-small-neutral dl-button dl-button-size-medium"
                      type="button"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "white",
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        border: "none",
                        paddingLeft: "10px",
                        cursor: "pointer",
                      }}
                      onClick={handlePrev}
                    >
                      <span class="dl-button-label">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                          class="dl-icon dl-button-left-icon dl-icon-small"
                          data-icon-name="regular/arrow-left"
                          data-design-system="oxygen"
                          data-design-system-component="Icon"
                        >
                          <path d="M7.04 12.36 2.913 8.421A.56.56 0 0 1 2.75 8a.55.55 0 0 1 .164-.398L7.04 3.664c.234-.21.586-.21.797.024a.56.56 0 0 1-.024.796L4.696 7.438h7.97c.327 0 .562.257.562.562a.57.57 0 0 1-.563.563h-7.97l3.117 2.976a.56.56 0 0 1 .024.797.56.56 0 0 1-.797.023Z"></path>
                        </svg>
                        Étape précédente
                      </span>
                    </button>
                  )}
                  <h4
                    className="subtitle"
                    style={{ marginBottom: "10px", marginLeft: "-10%" }}
                  >
                    Saisissez vos informations
                  </h4>
                  <div className="pfalign-center">
                    <div className="col-md-12 col-xs-12 mbxs mb-3">
                      <div className="row">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Tapez votre nom"
                            name="nom"
                            id="nom"
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Tapez votre prénom"
                            name="prenom"
                            id="prenom"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 col-xs-12 mbxs mb-3">
                      <PhoneInput
                        country={"tn"}
                        value={phoneNumber}
                        onChange={handleOnChange}
                        placeholder="Tapez votre numéro"
                      />
                    </div>
                    <div
                      className="pf-row clearfix"
                      style={{ textAlign: "left" }}
                    >
                      <p
                        id="sendsmscode"
                        style={{
                          marginTop: "10px",
                          fontSize: "12px!important",
                          lineHeight: "18px!important",
                          color: "#1B2746!important",
                          fontWeight: "600",
                        }}
                      >
                        Un code va vous être envoyé sur ce numéro pour valider
                        votre RDV.
                      </p>
                    </div>
                    <div className="pf-row clearfix">
                      <button id="register-patient-app-button" className="btn">
                        Valider <i className="pfadmicon-glyph-704"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div
              className="col-md-8 col-lg-3 col-12 mb-3"
              style={{ position: "sticky", top: "20px", width: "140%" }}
            >
              <div className="pro-sec1" style={{ width: "140%" }}>
                <img
                  src="img/female-doctor-blue-gown-portrait (1).jpg"
                  alt="Doctor portrait"
                  style={{ width: "20%", height: "20%" }}
                />
                <div className="single-data">
                  <h4> Dr. Hadil Lajili </h4>
                  <p>généraliste</p>
                  {/* <ul className="list-unstyled">
        <li>
          <i>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="dl-icon mr-8 mt-4 dl-icon-xsmall" data-icon-name="regular/user" data-design-system="oxygen" data-design-system-component="Icon">
              <path d="M9.125 9.125h-2.25A4.116 4.116 0 0 0 2.75 13.25c0 .422.328.75.75.75h9c.398 0 .75-.328.75-.75a4.13 4.13 0 0 0-4.125-4.125m-5.25 3.75a3.016 3.016 0 0 1 3-2.625h2.25a3.01 3.01 0 0 1 2.977 2.625zM8 8c1.64 0 3-1.336 3-3 0-1.64-1.36-3-3-3-1.664 0-3 1.36-3 3 0 1.664 1.336 3 3 3m0-4.875A1.88 1.88 0 0 1 9.875 5 1.866 1.866 0 0 1 8 6.875 1.85 1.85 0 0 1 6.125 5c0-1.031.82-1.875 1.875-1.875"></path>
            </svg>
            Accepte les nouveaux patients sur Doctolib
          </i>
        </li>
        <li>
          <i>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="dl-icon mr-8 mt-4 dl-icon-xsmall" data-icon-name="regular/location-dot" data-design-system="oxygen" data-design-system-component="Icon">
              <path d="M9.875 6.5A1.866 1.866 0 0 1 8 8.375 1.85 1.85 0 0 1 6.125 6.5c0-1.031.82-1.875 1.875-1.875A1.88 1.88 0 0 1 9.875 6.5M8 5.75a.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75A.77.77 0 0 0 8 5.75m4.5.75c0 2.063-2.742 5.695-3.96 7.219a.707.707 0 0 1-1.102 0C6.218 12.195 3.5 8.563 3.5 6.5 3.5 4.016 5.492 2 8 2c2.484 0 4.5 2.016 4.5 4.5M8 3.125A3.376 3.376 0 0 0 4.625 6.5c0 .305.094.75.352 1.36.234.562.585 1.218.984 1.874A36 36 0 0 0 8 12.594c.563-.75 1.336-1.781 2.016-2.86.398-.656.75-1.312.984-1.875.258-.609.375-1.054.375-1.359A3.39 3.39 0 0 0 8 3.125"></path>
            </svg>
            10 Place Hoche, 78000 Versailles
          </i>
        </li>
      </ul>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalendrierP;
