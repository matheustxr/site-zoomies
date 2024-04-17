import { useEffect, useState } from 'react';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BackTop(){
    const [isSticky, setIsSticky] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          if (scrollTop > 0) {
            setIsSticky(true);
            document.querySelector('#backTop')?.classList.remove('hidding')
          } else {
            setIsSticky(false);
            document.querySelector('#backTop')?.classList.add('hidding')
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isSticky]);

    return(
      <div id='backTop' className='fixed left-4 bottom-24 md:bottom-5 z-50'>
        <a href="#"  className='flex justify-center items-center rounded-full py-[6px] px-2 bg-red-600 border border-[#f5a518] shadow-[0px_0px_5px_#f5a518]'>
          <FontAwesomeIcon icon={faArrowUp} className='text-[20px] text-white' />
        </a>
      </div>
    )
}