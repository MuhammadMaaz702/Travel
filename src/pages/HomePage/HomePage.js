import React,{useState} from 'react'
import './homepage.css'
import { AiOutlineSearch} from 'react-icons/ai';
export default function HomePage() {
  return (
    <div>
      <div className='home-page'>
        <div className='home-search'>
            <form action="" className='position-relative'>
               <div>
                 <input type="text" placeholder='Where to Go?' />
                <span className='search-icon' type='submit'><AiOutlineSearch/></span>
               </div>
            </form>
        </div>
      </div>
    </div>
  )
}
