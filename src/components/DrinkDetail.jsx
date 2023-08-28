import React from 'react'

const DrinkDetail = () => {
  return (
    <div>
      <div className='flex flex-row-reverse items-center justify-evenly border-t-[1.5px] border-solid border-inherit'>
        <img className='w-[250px] h-[250px] hover:-rotate-12 rotate-3 duration-1000' src="./src/assets/drink-bg.svg" alt="" />
          <div className=''>
            <h1 className="text-lg font-medium text-center py-3 md:text-xl xl:text-2xl">Wisata Minuman Di Jogja</h1>
            <p className="text-[10px] font-light text-justify pb-3 md:text-xs xl:text-sm">Yogyakarta yang terkenal membumi dan akrab di hati selalu mengundang pelancong dari penjuru Nusantara untuk selalu kembali. Apalagi ditambah reputasi Kota Jogja yang kaya jajanan jalanan yang ringan di kantong, membuat acara rekreasi semakin menyenangkan. Buat yang berdomisili di Jogja dan sekitarnya maupun para petualang yang akan mengunjungi kota kesayangan ini, tempat kuliner minuman di bawah ini dijamin sesuai dengan selera dan ringan di kantong.</p>
          </div>
      </div>
    </div>
  )
}

export default DrinkDetail