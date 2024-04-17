import Lottie from 'react-lottie-player'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

import { AllProducts } from '../../compartilhado/Produtos'

import SliderProdutos from '../../assets/components/sliders/SliderProdutos'
import CardProduto from '../../assets/components/cardProdutos/CardProduto'
import SliderVideos from '../../assets/components/sliders/SliderVideos'
import Botao from '../../assets/components/button/Botao';

import banner from '../../assets/images/banners/BannerHome.webp'
import logo from '../../assets/images/logoZoomies.webp'
import paw from '../../assets/images/animations/paw.json'
import naturais from '../../assets/images/naturais.webp'
import bifinhos from '../../assets/images/bifinhos.webp'


export default function HomePage(){

    /*SLIDE PRODUTOS*/
    const slideProdutos = [
        ...AllProducts.map( (produto) => (
            <CardProduto 
                link={`/produtos/${produto.nome.toLowerCase().replace(/\s+/g, '-')}`} 
                image= {produto.imagem} 
                name= {produto.nome}
                styleExtra='mx-3 mt-10 '
            />
        ))
    ];
    const slideCountProdutos= slideProdutos.length;

    /*SLIDE BIFINHOS*/
    const slideBifinhos = [
        ...AllProducts.filter(produto => produto.linha === 'bifinhos').map( (produto) => (
            <CardProduto 
                link={`/produtos/${produto.nome.toLowerCase().replace(/\s+/g, '-')}`} 
                image= {produto.imagem} 
                name= {produto.nome}
                styleExtra='mx-5 mt-10'
            />
        ))
    ];
    const slideCountBifinhos= slideBifinhos.length;

    /*SLIDE NATURAIS*/
    const slideNaturais = [
        ...AllProducts.filter(produto => produto.linha === 'naturais').map( (produto) => (
            <CardProduto 
                link={`/produtos/${produto.nome.toLowerCase().replace(/\s+/g, '-')}`} 
                image= {produto.imagem} 
                name= {produto.nome}
                styleExtra='mx-5 mt-10'
            />
        ))
    ];
    const slideCountNaturais= slideNaturais.length;

    /*SLIDE VIDEOS*/
    const slideVideos = [
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[500px]  px-[10px] rounded ' src="https://www.youtube.com/embed/YbCEtHMdhbU?si=01T31s44gt5AAMBu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[500px]  px-[10px] rounded ' src="https://www.youtube.com/embed/zMUiskeQ1sI?si=gbefInTQ6ktGPqBA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[500px]  px-[10px] rounded ' src="https://www.youtube.com/embed/gBBg5i6AQs0?si=AHKZ10wx7BqKaPSP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[500px]  px-[10px] rounded ' src="https://www.youtube.com/embed/hh_PySplqNk?si=35wptomvgEYdG9HB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>, 
    ]

    const slideCountVideos= slideVideos.length;
    
    return (
        <>
            {/*BANNER*/}
            <section className='relative'>
                <div className=' xl:h-auto lg:pt-[104px] bg-[#0089cb] '>
                    
                    <Link to='/'>
                        <img src={logo} alt="" className='max-w-[400px] w-[80%] mx-auto py-10 lg:hidden' />
                    </Link>
                    <div className='w-full flex flex-col md:flex-row-reverse justify-end bannerHome'>
                        <div className='max-w-[600px] px-5 flex flex-col justify-center'>
                            <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold text-center md:text-start text-white '>
                                Nós somos a revolução do mercado pet brasileiro!
                            </h1>
                            <p className="mb-7 text-lg text-[#ffffff] text-center lg:text-start mt-7">
                                Com a melhor fórmula e ingredientes selecionados, oferecemos petiscos com qualidade super premium, sabor, nutrição e diversão para os nossos amigos de quatro patas.
                            </p>
                        </div>

                        <div className='w-full max-w-3xl flex justify-end' >
                            <img src={banner} alt="" className=''/>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className='max-w-[1276px] mx-auto px-5 lg:mt-10 '>
                <div className='lg:pt-14 flex flex-col items-center justify-center '>
                    <Lottie
                        play
                        loop
                        animationData={paw}
                        className='w-[150px] mx-auto rotate-45'
                    />
                    <div className='flex flex-col items-center lg:flex-row mb-5 h-full'>
                        <h1 className='text-4xl md:text-5xl text-center text-[#233466] '>
                            Conheça nossos
                        </h1>
                        <div className='w-[300px] h-[90px] py-2 flex items-center justify-center bg-faixa-azul '>
                            <h1 className='text-4xl md:text-5xl  text-center text-white '>
                                produtos
                            </h1>
                        </div>
                    </div>
                    
                </div>
                 
            </section>

            {/*SECTION SLIDER PRODUTOS*/}
            <section>
                <div className='flex gap-5' id='slider-produtos'>
                    <SliderProdutos 
                        slideContent={slideProdutos}
                        slideCount={slideCountProdutos}
                    />
                </div>
                <div className='mt-12 flex justify-center '>
                    <Botao 
                        children="Veja todos o produtos"
                        page='/produtos'
                        icon= {''}
                    />
                </div> 
            </section>
            
            {/*SECTION BIFINHOS*/}
            <section className='max-w-[1276px] mx-auto px-5 pt-20 pb-10 flex gap-10 flex-col lg:flex-row'>
                <div className='lg:w-2/3 flex flex-col gap-5'>
                    <h1 className='text-4xl md:text-5xl  lg:text-7xl  text-[#233466] '>Linha de <br className='hidden lg:block'/>
                        Bifinhos
                    </h1>
                    <p className='text-[#1E1E1E] text-lg'>Os bifinhos são petiscos que, além de saborosos, beneficiam a saúde do seu pet. Produzidos pela Zoomies em diversos sabores e para diferentes idades, eles são ricos em proteínas, mantendo músculos e ossos saudáveis. Além disso, auxiliam na higiene dental, o que previne problemas bucais, auxiliam no processo de adestramento e também oferecem estímulos sensoriais que fortalecem o vínculo, promovendo confiança entre você e seu animal de estimação.</p>
                    <div className='flex justify-center lg:justify-start'>
                        <Botao 
                            children="Veja todos o produtos"
                            page='/produtos'
                            icon= {''}
                        />
                    </div>
                </div>
                <img className='lg:w-[400px] 2xl:w-[500px] bg-[#f5a518]  rounded-2xl' src={bifinhos} alt="" />
            </section>
            <SliderProdutos 
                slideContent={slideBifinhos}
                slideCount={slideCountBifinhos}
            />

            {/*SECTION NATURAIS*/}
            <section className='max-w-[1276px] mt-10 mx-auto px-5 pt-12 flex gap-10 flex-col-reverse lg:flex-row-reverse'>
                <div className='lg:w-2/3 flex flex-col lg:items-start gap-5'>
                    <h1 className='text-4xl md:text-5xl lg:text-7xl  text-[#233466] '>Linha de <br className='hidden lg:block' /> Naturais</h1>
                    <p className='text-[#1E1E1E] text-lg'>O estresse pode causar diversos problemas de saúde nos cães, por isso criamos uma linha de produtos especiais que ajudam os animais a controlar a sua ansiedade e irritação. Essa linha de naturais antiestresse veio para ajudar o seu cãozinho a ter mais tranquilidade no dia a dia, unindo bem-estar e lazer, fazendo com que ele se sinta verdadeiramente feliz e saudável.</p>
                    <div className='w-full flex justify-center lg:justify-start'>
                        <Botao 
                            children="Veja todos o produtos"
                            page='/produtos'
                            icon= {''}
                        />
                    </div>
                </div>
                <img className='lg:w-[400px] 2xl:w-[500px] bg-[#f5a518] rounded-2xl' src={naturais} alt="" />
            </section>
            <SliderProdutos 
                slideContent={slideNaturais}
                slideCount={slideCountNaturais}
            />
            
            {/*SECTION VIDEOS*/}
            <section className='max-w-[1276px] mx-auto px-5 pt-20  flex flex-col items-center gap-7'>
                
                <div className=''>
                    <Lottie
                        play
                        loop
                        animationData={paw}
                        className='w-[150px] mx-auto rotate-45'
                    />
                    <div className='relative w-full mx-auto flex lg:items-center lg:flex-row mb-5 '>
                        
                        <div className=' w-[350px] md:w-[420px] py-2 flex items-center justify-center lg:justify-center bg-faixa-azul bg-right md:bg-end'>
                            <h1 className=' text-4xl md:text-5xl lg:text-center text-[#233466] '>
                                Conheça 
                            </h1>
                            
                            <h1 className='ml-2 text-4xl md:text-5xl text-center text-white '>
                                melhor
                            </h1>
                        </div>
                        
                    </div>
                   
                </div>
                <div className='w-full px-2 xl:px-28 flex mx-auto' id='slick-videos'>
                    <SliderVideos
                        slideContent={slideVideos}
                        slideCount={slideCountVideos}
                    />
                </div>
                <div className='w-auto mx-auto mt-5'>
                    <Botao
                        children= 'Inscreva-se'
                        page='https://www.youtube.com/@zoomiesbr'
                        icon= {<FontAwesomeIcon icon={faYoutube} className="ml-3 text-lg"/>}
                    />
                </div>
                
            </section>
             
            
        </>
    )
}             