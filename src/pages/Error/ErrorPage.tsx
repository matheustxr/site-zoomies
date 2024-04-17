import Lottie from 'react-lottie-player'
import error404 from '../../assets/images/animations/error404.json'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logoZoomies.webp'

export default function ErrorPage(){
    return (
        <section className='relative'>
            <div className="md:h-[100px] bg-[#04083a] px-5 py-4">
                <Link to='/'>
                    <img src={logo} alt="" className='md:hidden' />
                </Link>
                
            </div>
            <div className="max-w-[1276px] max-h-[500px] md:max-h-[300px] mt-5 md:mt-20 mx-auto px-5 xl:px-0 flex flex-col md:flex-row text-black relative">
                <div className='w-full md:w-1/3  flex flex-col'>
                    <h1 className='text-7xl font-semibold text-[#dc2626] '>OOPS!</h1>
                    <h2 className='text-2xl mb-3'>Não encontramos a página que você tentou acessar.</h2>
                    <p className='text-lg mb-5'>Verifique o link que você digitou e tente novamente</p>
                    <Link to='/'>
                        <button className='py-3 px-5 border border-[#04083a] rounded-3xl hover:bg-[#04083a] hover:text-white '>
                            Acessar a home
                        </button>
                    </Link>
                </div>
                <div className='w-full md:w-2/3 flex items-start position relative top-[-50px] md:top-[-100px] lg:top-[-180px] xl:top-[-230px] xl:left-10 '>
                    <Lottie
                        play
                        loop
                        animationData={error404}
                        className='w-auto '
                    />
                </div>
                
            </div>
        </section>
    )
}