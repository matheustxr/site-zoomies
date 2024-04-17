import Lottie from 'react-lottie-player'

import paw from '../../images/animations/paw.json'
import mercado from '../../images/logos-marketplace/LogoMercadoLivre.webp'
import frio from '../../images/logos-marketplace/pontoFrio.png'
import bahia from '../../images/logos-marketplace/logoCasasBahia.webp'
import extra from '../../images/logos-marketplace/LogoExtra.webp'


export default function Fornecedores(){
    return(
        <>
            <section className=" text-black">
                <Lottie
                    play
                    loop
                    animationData={paw}
                    className='w-[150px] mx-auto rotate-45'
                />
                <div className='max-w-[1276px] mx-auto px-5 pb-10 flex flex-col items-center'>
                    <div className='flex flex-col items-center lg:flex-row mb-5 h-full'>
                        <h1 className='text-4xl md:text-5xl text-center text-[#233466] '>
                            Onde encontrar os produtos  
                        </h1>
                        <div className='w-[300px] h-[90px] py-2 flex items-center justify-center  bg-faixa-azul '>
                            <h1 className='text-4xl md:text-5xl text-center text-white faixa-azul bg-bottom'>
                                Zoomies? 
                            </h1>
                        </div>
                        
                    </div>
                    
                    <div className='w-full md:h-[40px] lg:h-[50px] xl:h-[60px] grid grid-cols-2 md:grid-cols-4 justify-items-center gap-5 mt-7'>
                        <a 
                            href="https://lista.mercadolivre.com.br/zoomies_NoIndex_True_SHIPPING*ORIGIN_10215068#applied_filter_id%3DSHIPPING_ORIGIN%26applied_filter_name%3DOrigem+do+frete%26applied_filter_order%3D10%26applied_value_id%3D10215068%26applied_value_name%3DLocal%26applied_value_order%3D2%26applied_value_results%3D79%26is_custom%3Dfalse" 
                            target="_blank" 
                            className='py-2 md:py-10 md:px-7 px-4 w-full flex flex-col items-center justify-center rounded-2xl bg-white shadow-lg md:shadow-2xl text-white'
                        >
                            <img src={mercado} className='w-full md:h-[40px] lg:h-[50px] xl:h-[60px] ' alt="" />
                        </a>

                        <a 
                            href="https://www.pontofrio.com.br/zoomies/b" 
                            target="_blank" 
                            className='py-2 md:py-10 md:px-7 px-4 w-full flex flex-col items-center justify-center rounded-2xl bg-white shadow-lg md:shadow-2xl text-white'
                        >
                            <img src={frio} className='w-full md:h-[40px] lg:h-[50px] xl:h-[60px] ' alt="" />
                        </a>

                        <a 
                            href="https://www.casasbahia.com.br/zoomies/b" 
                            target="_blank" 
                            className='py-2 md:py-10 md:px-7 px-4 w-full flex flex-col items-center justify-center rounded-2xl bg-white shadow-lg md:shadow-2xl text-white'
                        >
                            <img src={bahia} className='w-full md:h-[40px] lg:h-[50px] xl:h-[60px] ' alt="" />
                        </a>

                        <a 
                            href="https://www.extra.com.br/zoomies/b" 
                            target="_blank" 
                            className='py-2 md:py-10 md:px-7 px-4 w-full flex flex-col items-center justify-center rounded-2xl bg-white shadow-lg md:shadow-2xl text-white'
                        >
                            <img src={extra} className='w-full md:h-[40px] lg:h-[50px] xl:h-[60px] ' alt="" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}