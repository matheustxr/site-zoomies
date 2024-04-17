
import { Link } from 'react-router-dom';
import logo from '../../images/logoZoomies.webp'


interface propsBanner {
    imagem: string;
    title: string;
    text: string | null;
    botao: string | null;
    styleExtra: string | null;
}

export default function Banner( {imagem, title, text, styleExtra}:propsBanner ){
    //const style = 'lg:px-[8%] lg:h-[600px] xl:h-auto pb-12 lg:pb-10 xl:pb-20 lg:pt-[104px] bg-[#0089cb] '
    const style2= 'w-full max-w-3xl '
    
    return (
        <div className='relative'>
            <div className=' xl:h-auto lg:pt-[104px] bg-[#0089cb] '>
                
                <Link to='/'>
                    <img src={logo} alt="" className='max-w-[400px] w-[80%] mx-auto py-10 lg:hidden' />
                </Link>
                <div className='w-full flex flex-col md:flex-row-reverse justify-end bannerHome'>
                    <div className='max-w-[600px] px-5 flex flex-col justify-center'>
                        <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold text-center md:text-start text-white '>
                            {title}
                        </h1>
                        <p className="mb-7 text-lg text-[#ffffff] text-center lg:text-start mt-7">
                            {text}
                        </p>

                        {/*<Link to="/produtos" className='w-auto underline text-xl text-white font-semibold'>
                            <button className=' py-3 px-10 mt-5 rounded-2xl bg-red-600 hover:bg-[#04083a] transition-all'>
                                {botao}
                            </button>
                        </Link>*/}
                    </div>

                    <div className={style2 + styleExtra} >
                        <img src={imagem} alt="" className=''/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

/*
<div className=' absolute z-30 w-full bottom-0 bg-gradient-to-b from-transparent from-[90%] to-[#fff] to-[90%]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#fff" fillOpacity="1" d="M0,128L60,144C120,160,240,192,360,224C480,256,600,288,720,272C840,256,960,192,1080,160C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>  
            </div>
            */