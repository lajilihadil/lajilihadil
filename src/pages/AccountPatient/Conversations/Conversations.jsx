import React from 'react'
import './conversation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import AccountP from '../AccountP';

const Conversations = () => {
  return (
    <div>
    <AccountP/>
      <main id="main-content">
       <div id ="react-main">
         <div className='dl-emptystate h-full w-full' data-design-system="oxygen" data-design-system-componenet = "EmptyState">
           <div className='flex flex-col dl-emptystate-content items-center text-center'>
           <div className='self-center image'>
             <img src={`${process.env.PUBLIC_URL}/img/conv1.jpg`} alt="Image" />
           </div>
         
             <div className='mt-16'>
              <h1 className='dl-text dl-text-title dl-text-bold dl-text-l' data-design-system="oxygen" data-design-system-component="Text">Envoyer des demandes </h1>
             </div>

             <div className='mt-16'>
               <span className='dl-text dl-text-body dl-text-regular dl-text-s' data-design-system="oxygen" data-design-system-component="Text">
                  <span className='dl-text dl-text-body dl-text-regular dl-text-s' data-design-system="oxygen" data-design-system-component="Text">
                  Vous pouvez envoyer à votre médecin des demandes spécifiques , sur des résultats d'examen , des courriers d'adressages ou d'autres 
                  </span>
               </span>
             </div>

             <button className='envoyer-demande-button'>
             <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: '8px' }} />
             Envoyer une demande
             </button>
             <a className='Tappable-inactive dl-button-small-primary !mt-8 dl-button dl-button-size-meduim' type="button" text="Voir comment envoyer une demande" href="#">
              <span className='dl-button-label '>Voir comment envoyer une demande 
              </span>
             </a>
           </div>
         </div>
       </div>
      </main>
    </div>
  )
}

export default Conversations
