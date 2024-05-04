import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import AccountP from '../AccountP';
import './rendezvous.css'
const Rendezvous = () => {
  return (
    <div>
    <AccountP/>
    <main id="main-content">
    <div id ="react-main">
      <div className='dl-emptystate h-full w-full' data-design-system="oxygen" data-design-system-componenet = "EmptyState">
        <div className='flex flex-col dl-emptystate-content items-center text-center'>
        <div className='self-center image'>
          <img src={`${process.env.PUBLIC_URL}/img/calen.png`} alt="Image" style={{ maxWidth: '150%', height: 'auto' }} />
        </div>
      
          <div className='mt-16'>
           <h1 className='dl-text dl-text-title dl-text-bold dl-text-l' data-design-system="oxygen" data-design-system-component="Text">Aucun Rendez-vous à venir </h1>
          </div>

          <div className='mt-16'>
            <span className='dl-text dl-text-body dl-text-regular dl-text-s' data-design-system="oxygen" data-design-system-component="Text">
               <span className='dl-text dl-text-body dl-text-regular dl-text-s' data-design-system="oxygen" data-design-system-component="Text">
               Trouvez un médecin et Prenez vos rendez-vous en ligne à tout moment
               </span>
            </span>
          </div>

          <button className='envoyer-demande-button'>
          <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: '8px' }} />
          Prendre Rendez-Vous
          </button>

    
          <div className='sr-only'>
            <h1 className='dl-text dl-text-body dl-text-regular dl-text-s' data-design-system="oxygen" data-design-system-component="Text">
             Mes rendez-vous
            </h1>
          </div>
          <div className='dl-desktop-appointments-view-list'>
           <div className='flex dl-justify-center'>
             <button className=''>Voir mes rendez-vous passés</button>
           </div>
          </div>

        

        </div>
      </div>
    </div>
   </main>
    </div>
  )
}

export default Rendezvous
