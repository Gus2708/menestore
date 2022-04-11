import React from 'react'

export const StoreCard = () => {
  return (
    <div className='storeCard'>
        <div className="image">
            <img src={require("./img/gabriella-clare-marino-y_WdglftxBo-unsplash.jpg")} alt="" />
        </div>
        <div className="info">
            <h3 className="name">Arepera Julia</h3>
            <p className='about'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, nulla eaque accusantium illo eius unde vitae cumque omnis quas molestiae quis atque. Sequi fugiat fugit ex ad pariatur qui doloremque. </p>
        </div>
        <div className="schedule">
            <h3>Horario:</h3>
            <div className="days">Lun - Vie</div>
            <div className="hour">8:30AM - 7:00PM</div>
            <div className="open">Abierto</div>
        </div>
        <div className="button"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg></div>
    </div>
  )
}
