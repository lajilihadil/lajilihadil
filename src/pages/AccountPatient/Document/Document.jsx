import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { faFileAlt , faFileWord } from '@fortawesome/free-solid-svg-icons';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import AccountP from '../AccountP';
const Document = () => {
  return (
    <div>
      <AccountP/>
      <main id="main-content">
      <div id ="react-main">
        <div className='dl-emptystate h-full w-full' data-design-system="oxygen" data-design-system-componenet = "EmptyState">
          <div className='flex flex-col dl-emptystate-content items-center text-center'>
          <div className='self-center image'>
            <img src={`${process.env.PUBLIC_URL}/img/doc.png`} alt="Image" style={{ width: '150px' }} />
          </div>
        
            <div className='mt-16'>
             <h1 className='dl-text dl-text-title dl-text-bold dl-text-l' data-design-system="oxygen" data-design-system-component="Text">Gérez vos documents de santé sur MediShpèreVie </h1>
            </div>

            <div className='mt-16'>
              <span className='dl-text dl-text-body dl-text-regular dl-text-s' data-design-system="oxygen" data-design-system-component="Text">
                 <span className='dl-text dl-text-body dl-text-regular dl-text-s' data-design-system="oxygen" data-design-system-component="Text">
                 Conservez vos documents et vos informations de santé dans un endroit sécurisé. Partagez-les avec les médecins lors de la prise de rendez-vous
                 </span>
              </span>
            </div>

            <button className='envoyer-demande-button'>
            <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '8px' }} />
            Mes documents 
            </button>
            <button className='envoyer-demande-button'>
            <FontAwesomeIcon icon={faStickyNote}  style={{ marginRight: '8px' }} />
            Mes notes  
            </button>
          </div>
        </div>
      </div>
     </main>
    </div>
  )
}

export default Document
