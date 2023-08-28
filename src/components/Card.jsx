import React from 'react'
import database from '../../database.json'


function Card() {
  return (
    <div className='flex flex-wrap justify-center w-full mt-5'>
        
          {
            database.map (data => {
              return (
                  <div className='card bg-white mb-5 mx-3 border-none rounded-xl px-5 py-5 w-[220px] h-max drop-shadow-xl hover:scale-105 duration-300' key={data.id}>
                    <a href="">
                      <div className='mx-auto relative w-[160px] h-[160px] bg-slate-700 border border-none rounded-xl'>
                        <img className='mx-auto object-cover h-full border-none rounded-xl' src={data.src} alt="" />
                          <div className="bg-cyan-100 w-[3em] h-[3em] absolute bottom-0 right-0 opacity-80 rounded-xl flex place-items-center">
                            <img className="w-[2em] h-[2em] mx-auto" src="./src/assets/heart-icon.svg" alt="" />
                          </div>
                      </div>
                      <h1 className='text-center text-lg font-medium xl:text-xl'>{data.name}</h1>
                      <p className='text-left text-[8px] font-light text-slate-500 md:text-[10px]'>{data.address}</p>
                      <p className='text-left text-[10px] font-light md:text-xs xl:text-sm'>{data.description}</p>
                    </a>
                  </div>                    
          )})
          }
    </div>
  )
}

export default Card