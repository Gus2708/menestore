import React from 'react'
import food from "./img/food.svg"
import grocery from "./img/grocery.svg"

export const Home = () => {
  return (
    <div className='homePage'>
        <div className="header">
            <div className="blur"></div>
            <img className='backgroundImageHeader' src={require("./img/lucrezia-carnelos-wQ9VuP_Njr4-unsplash.jpg")} alt="" srcset="" />
            <h2>Si tienes <b>MeneStore</b>, tienes todo.</h2>
            <div className="search">
                <input type="text" placeholder='Busca tu tienda favorita:'/> 
                <button> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                <div className="location"><i><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg></i>Ver tiendas cerca de ti</div>
            </div>
        </div>
        <div className="category">
            <div className="shop">
                <img src={grocery}/>
                <p>Comprar productos<i><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg></i></p>
            </div>
            <div className="restaurant">
                <img src={food}/>
                <p>Ordenar Comida <i><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg></i></p>
            </div>
        </div>
        <div className="seller">
            <h2>Mas vendidos:</h2>
            <div className="cardContainer">
                <div className="card">
                    <img src={require("./img/food-photographer-david-fedulov-E94j3rMcxlw-unsplash.jpg")} alt="" />
                    <div className="info">
                    <p>Hamburguesa</p>
                    <p className='price'>1$</p>
                    </div>
                </div>
                <div className="card">
                    <img src={require("./img/food-photographer-david-fedulov-E94j3rMcxlw-unsplash.jpg")} alt="" />
                     <div className="info">
                    <p>Hamburguesa</p>
                    <p className='price'>1$</p>
                    </div>
                </div>
                <div className="card">
                    <img src={require("./img/food-photographer-david-fedulov-E94j3rMcxlw-unsplash.jpg")} alt="" />
                    <div className="info">
                    <p>Hamburguesa</p>
                    <p className='price'>1$</p>
                    </div>
                </div>
                <div className="card">
                    <img src={require("./img/food-photographer-david-fedulov-E94j3rMcxlw-unsplash.jpg")} alt="" />
                    <div className="info">
                    <p>Hamburguesa</p>
                    <p className='price'>1$</p>
                    </div>
                </div>
                <div className="card">
                    <img src={require("./img/food-photographer-david-fedulov-E94j3rMcxlw-unsplash.jpg")} alt="" />
                    <div className="info">
                    <p>Hamburguesa</p>
                    <p className='price'>1$</p>
                    </div>
                </div>
                <div className="card">
                    <img src={require("./img/food-photographer-david-fedulov-E94j3rMcxlw-unsplash.jpg")} alt="" />
                    <div className="info">
                    <p>Hamburguesa</p>
                    <p className='price'>1$</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="about">
            <div className="section">
                <img src={require("./img/istockphoto-1138671697-612x612.jpg")}/>
                <div className="text">
                    <h2>La mejor opcion para impulsar tu negocio.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor ratione alias nobis itaque eius magni nesciunt voluptas nam culpa iure voluptate, quasi eos amet cum, nisi in provident excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique corrupti quibusdam necessitatibus tenetur vero eius vel? Natus, nostrum architecto quo saepe soluta beatae incidunt debitis nobis tempore molestiae illo.</p>
                    <a>Convertirse en vendedor <i><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg></i></a>
                </div>                
            </div>
            <div className="section client">
                <div className="text">
                    <h2>La forma mas fácil de hacer compras en Mauroa, sin salir de casa.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor ratione alias nobis itaque eius magni nesciunt voluptas nam culpa iure voluptate, quasi eos amet cum, nisi in provident excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique corrupti quibusdam necessitatibus tenetur vero eius vel? Natus, nostrum architecto quo saepe soluta beatae incidunt debitis nobis tempore molestiae illo.</p>
                    <a>Registrarse <i><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg></i></a>
                </div>                
                <img src={require("./img/humphrey-muleba-zbosWhMFV_M-unsplash.jpg")}/>
            </div>
        </div>
    </div>
  )
}
