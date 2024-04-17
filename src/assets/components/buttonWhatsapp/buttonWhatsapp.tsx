
import imgWpp from '../../assets/whatsapp.png'

export default function Whatsapp(){
    return (
        <div className='fixed left-5 bottom-5 z-50 animate-bounce'>
            <a href="https://api.whatsapp.com/send?phone=5513997289237&text=Gostaria%20de%20falar%20com%20um%20consultor" target='_blank' className=' '>
                <img src={imgWpp} alt='icone whatsapp' className='w-[54px] h-[54px] ' />
            </a>
        </div>
    )
}