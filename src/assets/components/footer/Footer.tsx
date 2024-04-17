import logoFarol from '../../images/logosPatense/logo-dark.svg'
import logoPatense from '../../images/logosPatense/patense.svg'
import logoZoomies from '../../images/logosPatense/Logo-Zoomies-Pet-Care-horizontal-scaled.webp'
import logoPetsmellon from '../../images/logosPatense/petsmellon.svg'
import grupoPatense from '../../images/logosPatense/grupoPatense.webp'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";


export default function Footer(){
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='bg-gradient-to-b from-white from-[90%] to-[#0089cb] to-[90%] '>
                <path fill="#0089cb" fillOpacity="1" d="M0,128L60,144C120,160,240,192,360,224C480,256,600,288,720,272C840,256,960,192,1080,160C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg> 
            <footer className="w-full bg-[#0089cb] pb-[80px] md:pb-0">
                <div className='max-w-[1276px] mx-auto px-5 '>
                    <img src={grupoPatense} className='w-full max-w-[400px] mx-auto ' alt="" />
                </div>
                
                <div  className='max-w-[1276px] mx-auto px-5 py-10 md:py-14 grid grid-cols-4 justify-items-center gap-2 md:gap-5 '>
                    <a href='https://www.farol.ind.br/' target='_blank' className='w-full md:md:min-h-[100px] p-2 sm:p-5  flex justify-center items-center bg-white shadow-2xl rounded-xl cursor-pointer'>
                        <img src={logoFarol} className=' ' alt="" />
                    </a>

                    <a href='https://patense.com.br/' target='_blank' className='w-full md:min-h-[100px] p-2 sm:p-5  flex justify-center items-center bg-white shadow-2xl rounded-xl cursor-pointer '>
                        <img src={logoPatense} className=' ' alt="" />
                    </a>

                    <a href='https://petsmellon.com.br/' target='_blank' className='w-full md:min-h-[100px] p-2 sm:p-5 flex justify-center items-center bg-white shadow-2xl rounded-xl cursor-pointer '>
                        <img src={logoPetsmellon} className='md:max-h-[110px]' alt="" />
                    </a>

                    <a href='https://lojazoomies.com/' target='_blank' className='w-full md:min-h-[100px] p-2 sm:p-5  flex justify-center items-center bg-white shadow-2xl rounded-xl cursor-pointer '>
                        <img src={logoZoomies} className='  ' alt="" />
                    </a>
                </div>

                <div className='w-full py-5 flex flex-col items-center gap-3 lg:flex-row justify-center lg:gap-20 text-white'>
                    <div className='flex gap-2 justify-center items-center'>
                        <a href="https://www.facebook.com/zoomiesbr" target='_blank'> <FontAwesomeIcon size="lg" icon={faFacebookF} /> </a>
                        <a href="https://www.instagram.com/zoomiesbr/" target='_blank'> <FontAwesomeIcon size='lg' icon={faInstagram} /> </a>
                        <a href="https://www.youtube.com/channel/UCrpmqsDowU19j26UiIIlJfg" target='_blank'> <FontAwesomeIcon size='lg' icon={faYoutube} /> </a>
                        <a href="https://www.tiktok.com/@zoomiesbr" target='_blank'> <svg className='fill-white ' strokeWidth="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg> </a>
                    </div>

                    <p>Copyright Ⓒ 2023 Zoomies.</p>

                    <a href="https://www.bmouseproductions.com/" className='text-center' target="_blank" rel="noopener noreferrer"> Desenvolvido por <strong>BMOUSE PPRODUCTIONS</strong> </a>
                </div>
            </footer>
        </>
    )
}