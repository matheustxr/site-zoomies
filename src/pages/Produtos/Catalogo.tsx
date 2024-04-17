import { Tilt } from 'react-tilt'
import Lottie from 'react-lottie-player'
import paw from '../../assets/images/animations/paw.json'

import { AllProducts } from "../../compartilhado/Produtos"
import CardProduto from '../../assets/components/cardProdutos/CardProduto'

import banner from '../../assets/images/banners/BannerProdutos.png'
import logo from '../../assets/images/logoZoomies.webp'
import { Link } from 'react-router-dom'


const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    maxGlare:       .5,
}

export default function ProdutosPage(){
    return (
        <>

            <section className='relative'>
                <div className=' xl:h-auto lg:pt-[104px] bg-[#0089cb] '>
                    
                    <Link to='/'>
                        <img src={logo} alt="" className='max-w-[400px] w-[80%] mx-auto py-10 lg:hidden' />
                    </Link>
                    <div className='mt-5 w-full flex flex-col items-center bannerHome'>
                        <div className=' px-5 flex flex-col justify-center'>
                            <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold text-center md:text-start text-white '>
                                Os melhores produtos!
                            </h1>
                        </div>

                        <div className='w-full max-w-[80%] ' >
                            <img src={banner} alt="" className=''/>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="max-w-[1276px] mx-auto px-5 text-blackbg-home">
                <div className='mb-14 lg:mb-20 '>
                    <Lottie
                        play
                        loop
                        animationData={paw}
                        className='w-[150px] mx-auto rotate-45'
                    />
                    <div className='px-5 flex flex-col md:flex-row gap-5 md:gap-8 lg:gap-14 xl:gap-28'>
                        <h1 className='text-start text-7xl xl:text-6xl text-[#0089cb] '>
                            Nossos Produtos
                        </h1>
                        <div className='flex items-center'>
                            <p>
                                A missão da Zoomies é revolucionar o mercado pet com sua inovação, qualidade e atenção aos detalhes. Nós acreditamos que os pets merecem o melhor, por isso, selecionamos os ingredientes com muito cuidado e criamos receitas saborosas e saudáveis para eles.
                            </p>
                        </div>
                    </div>
                    
                </div>
                
                <div className='w-full mb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 md:gap-14 '>
                    {AllProducts.map( (produto, index) => (
                        <Tilt options={defaultOptions} key={index}>
                            <CardProduto 
                                link={`/produtos/${produto.nome.toLowerCase().replace(/\s+/g, '-')}`}
                                image= {produto.imagem} 
                                name= {produto.nome} 
                            />
                        </Tilt >
                    ))}
                    
                </div>
                
            </section>

        </>
    )
}