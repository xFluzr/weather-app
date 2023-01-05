import React,{Component, useState} from 'react';

//importing icons
import searchIcon from '../assets/icons/magnifying-glass-solid.svg';


const Navbar = ({isCelsius,changeTemparuteHandler,inputValue,onChangeHandler}) => {
  return (
    <div className='flex p-8 items-center justify-between wrapper'>

      <div className='flex border-b-2 opacity-90'>
        <input placeholder='e.g Warsaw' value={inputValue} onChange={onChangeHandler} type='text' className='p-2 bg-transparent w-96 text-xl text-teal-50  font-bold font-main focus:outline-none' />
        <img src={searchIcon} alt='search icon' className='w-6 text-white hover:cursor-pointer'/>
      </div>
     
      <button type='button' onClick={changeTemparuteHandler} className='bg-teal-50 hover:bg-white transition-all px-6 py-2 rounded-xl w-44 font-main font-medium flex justify-center items-center '>
        <span className={isCelsius ?'selected-unit mr-2 ':'mr-2'}>C</span>/<span className={!isCelsius ?'selected-unit ml-2':'ml-2'}>F</span>
      </button>

    </div>
  )
}

export default Navbar