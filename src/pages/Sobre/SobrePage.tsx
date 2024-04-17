

import { Link } from 'react-router-dom';
import { AllProducts } from '../../compartilhado/Produtos';

import Lottie from 'react-lottie-player';

import banner from '../../assets/images/banners/bannerSobre.webp'
import CardProduto from '../../assets/components/cardProdutos/CardProduto';
import SliderProdutos from '../../assets/components/sliders/SliderProdutos';

import logo from '../../assets/images/logoZoomies.webp'
import Botao from '../../assets/components/button/Botao';

import selo from '../../assets/images/animations/patinha.json'
import hug from '../../assets/images/animations/hugg.json'

export default function SobrePage(){

    /*SLIDE PRODUTOS*/
    const slideProdutos = [
        ...AllProducts.map( (produto) => (
            <CardProduto 
                link={`/produtos/${produto.nome.toLowerCase().replace(/\s+/g, '-')}`} 
                image= {produto.imagem} 
                name= {produto.nome}
                styleExtra='mx-5 mt-10'
            />
        ))
    ];
    const slideCountProdutos= slideProdutos.length;

    return (
        <>

            <section className='relative'>
                <div className=' xl:h-auto lg:pt-[104px] bg-[#0089cb] '>
                    
                    <Link to='/'>
                        <img src={logo} alt="" className='max-w-[400px] w-[80%] mx-auto py-10 lg:hidden' />
                    </Link>
                    <div className='w-full flex flex-col md:flex-row-reverse justify-end bannerHome'>
                        <div className='max-w-[600px] px-5 flex flex-col justify-center'>
                            <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold text-center md:text-start text-white '>
                                Conheça a Zoomies
                            </h1>
                            <p className="mb-7 text-lg text-[#ffffff] text-center lg:text-start mt-7">
                                A Zoomies é a mais nova marca do Grupo Patense, dedicada a oferecer petiscos saborosos e de alta qualidade para os nossos amigos pets.
                            </p>
                        </div>

                        <div className='w-full max-w-2xl ' >
                            <img src={banner} alt="" className=''/>
                        </div>
                        
                    </div>
                </div>
            </section>

            <div className='flex flex-col items-center md:justify-center md:flex-row h-full p-2 mt-20 mb-5 lg:mb-20'>
                <h1 className='relative text-5xl md:text-5xl text-center text-[#233466] ml-[-50]'>
                    Qual a nossa 
                </h1>
                <div className='w-[300px] h-[90px] py-2 flex items-center justify-center bg-faixa-azul '>
                    <h1 className='text-5xl  text-center text-white '>
                        missão?
                    </h1>
                </div>
                
            </div>

            <section className='max-w-[1276px] mx-auto max-h-[650px] md:max-h-[800px] lg:max-h-[400px] px-5 pb-10 flex gap-10 flex-col lg:flex-row '>
                
                
                
                <div className='lg:w-full  flex flex-col gap-5'>
                    <p className='text-[#1E1E1E] text-xl'>A missão da Zoomies é revolucionar o mercado pet com sua inovação, qualidade e atenção aos detalhes. Nós acreditamos que os pets merecem o melhor, por isso, selecionamos os ingredientes com muito cuidado e criamos receitas saborosas e saudáveis para eles.</p>
                </div>

                <div className='relative top-[-40px]  lg:top-[-80px] '>
                    <Lottie
                        play
                        loop
                        animationData={hug}
                        className='w-[80%] mx-auto '
                    />
                </div>
            </section>
        
            <section className='max-w-[1276px] mx-auto px-5 mb-10 flex lg:gap-10 flex-col lg:flex-row-reverse'>
                <div className='lg:w-2/3 flex flex-col lg:justify-center gap-5'>
                    <p className='text-[#1E1E1E] text-xl'>A nossa embalagem moderna e vibrante é um convite para que os donos de pets escolham os nossos produtos e vejam a diferença que eles fazem na vida de seus animais de estimação.</p>
                    <p className='text-[#1E1E1E] text-xl'>Nos orgulhamos em ser a escolha certa para aqueles que amam seus pets e querem oferecer a eles o que há de melhor em termos de nutrição e diversão</p>
                </div>
                <div>
                    <Lottie
                        play
                        loop
                        animationData={selo}
                        className='w-[80%] mx-auto'
                    />
                </div>
            </section>


            <div className='flex gap-5' id='slider-produtos'>
                <SliderProdutos 
                    slideContent={slideProdutos}
                    slideCount={slideCountProdutos}
                />
            </div>
            <div className='mt-12 mb-5 flex justify-center '>
                <Botao 
                    children='Veja todos os produtos'
                    page='/produtos'
                    icon=''
                />
            </div>  
        </>
    )
}