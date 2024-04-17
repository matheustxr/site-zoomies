import CardProduto from "../../../assets/components/cardProdutos/CardProduto";
import SliderProdutos from "../../../assets/components/sliders/SliderProdutos";
import { AllProducts } from "../../../compartilhado/Produtos";

import logo from '../../../assets/images/logoColorida.webp'
import { Link } from "react-router-dom";
import tabela from '../../../assets/images/tabelaConsumo.png'

interface Produto {
    nome: string;
    imagem: string;
    descricao: string;
    composicao: string;
    doadores?: string;
    substitutos?: string;
    garantias?: string;
    linha: string;
}

interface ProductDetailProps {
    produto: Produto;
}

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

export default function ProdutoDetail({ produto }: ProductDetailProps){

    
    
    return (
        <>
            <div className="h-[100px] bg-[#04083a] hidden md:block"></div>
            <section className="max-w-[1276px] mx-auto px-5  text-black">
                <img src={logo} alt="" className='max-w-[400px] w-[90%] mx-auto pt-10 pb-5 md:hidden' />
                <div className="w-full flex flex-col ">
                    <h1 className="my-10 text-xl font-medium torusBold">
                        <Link to='/produtos/catalogo' className="my-10 text-xl font-medium ">Produtos</Link> / {produto.nome}
                    </h1>

                    <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                        <img className="w-full max-w-md rounded-2xl" src={produto.imagem} alt="" />
                        <div className="flex flex-col pt-10 ">
                            <h1 className="text-3xl md:text-4xl md:mt-6 mb-2">{produto.nome}</h1>
                            <p className=" ">
                                {produto.descricao}
                            </p>
                            <img src={tabela} alt="" className="mt-5 lg:mt-10 w-[300px] " />
                        </div>
                        
                    </div>
                    
                </div>
                <div className="mb-10 max-w-80% ">
                    <h1 className="text-3xl md:text-4xl mt-6 mb-2 ">Descrição</h1>
                    <div className="flex flex-col gap-2">
                        <p>
                            <strong className="text-lg font-bold">Composição: </strong>
                            {produto.composicao}
                        </p>

                        {produto.linha === 'bifinhos' && (
                            <div className="flex flex-col gap-2">
                                <p>
                                    <strong className="text-lg font-bold">Ingredientes transgênicos / Espécies doadoras do gene: </strong>
                                    {produto.doadores}
                                </p>
                                <p>
                                    <strong className="text-lg font-bold">Eventuais Subtitutos: </strong>
                                    {produto.substitutos}
                                </p>
                                <p>
                                    <strong className="text-lg font-bold">Níveis de garantia: </strong>
                                    {produto.garantias}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="max-w-[1276px] mx-auto px-5  text-black">
                
                {produto.linha === 'bifinhos' ?  (
                    <div className='flex gap-5 mb-10'>
                        <SliderProdutos 
                            slideContent={slideBifinhos}
                            slideCount={slideCountBifinhos}
                        />
                    </div>
                ) : (
                    <div className='flex gap-5 mb-10'>
                        <SliderProdutos 
                            slideContent={slideNaturais}
                            slideCount={slideCountNaturais}
                        />
                    </div>
                )}
            </section>

            <section>
                <div className="mx-auto my-20 max-w-[80%] roundedxl">
                    <iframe 
                        src="https://www.youtube.com/embed/deQRZLfwnUM?si=EO4dxVyYrqIcGk_B" 
                        className="w-[100%] h-[200px] sm:h-[400px]  lg:h-[450px] xl:h-[550px]  px-[10px] rounded"
                    />
                </div>
            </section>
        </>
    )
}