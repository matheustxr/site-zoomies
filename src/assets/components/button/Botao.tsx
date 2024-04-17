import { ReactElement } from "react"
import { Link } from "react-router-dom";


interface botaoProps{
    children: string;
    page: string;
    icon: ReactElement | string;
}

export default function Botao( {children, page, icon}:botaoProps){
    return (
        <Link to={page} id='logoImg' className='w-auto '>
            <button className='bg-red-600 mx-auto py-3 px-10 flex items-center justify-center rounded-2xl hover:bg-[#04083a] transition-all text-white font-semibold'>
                {children} {icon}
            </button>
        </Link>
    )
}