import React, { useState } from 'react';
import './LeftAside.css';
import image1 from '../../Assets/579.jpg'
import dashbord from '../../Assets/dashboard (1).png'
import puzzle from '../../Assets/puzzle-piece.png'
import faq from '../../Assets/qa.png'
import customer from '../../Assets/customer.png'

function LeftAside() {
    const [select, setSelect] = useState(null);
    let classes = 'mt-3 d-flex rounded-2 dash'
    let class2 = 'mt-3 d-flex rounded-2 select shadow-lg'
    const setItem = (option) => {
        setSelect(option)
    }
    return (
        <div className='leftaside bg-white d-flex flex-column'>
            <div className='d-flex flex-column profile shadow-lg  align-items-center'>
                <img src={image1} alt="" className='rounded-5 w-25 h-25 mt-5 shadow-lg' />
                <div className='d-flex mt-4'>
                    <p className='fw-bold name'>Sahad</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-chevron-right right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
                <p className='fw-bold email'>sahad2@gmail.com</p>
            </div>
            <div className={select === 'dash'?class2:classes} onClick={()=>{setItem('dash')}} >
                <img src={dashbord} alt="" className='dashIcon mt-2 ms-2' />
                <p className='fw-bold ms-2 mt-2'>Dashboard</p>
            </div>
            <div className={select === 'perk'?class2:classes} onClick={()=>{setItem('perk')}}>
                <img src={puzzle} alt="" className='dashIcon mt-2 ms-2' />
                <p className='fw-bold ms-2 mt-2'>Perks</p>
            </div>
            <div className={select === 'addon'?class2:classes} onClick={()=>{setItem('addon')}}>
                <img src={puzzle} alt="" className='dashIcon mt-2 ms-2' />
                <p className='fw-bold ms-2 mt-1'>Addons</p>
            </div>
            <div className={select === 'faq'?class2:classes} onClick={()=>{setItem('faq')}}>
                <img src={faq} alt="" className='dashIcon mt-2 ms-2' />
                <p className='fw-bold ms-2 mt-1'>FAQ</p>
            </div>
            <div className={select === 'support'?class2:classes} onClick={()=>{setItem('support')}}>
                <img src={customer} alt="" className='dashIcon mt-2 ms-2' />
                <p className='fw-bold ms-2 mt-2'>Support</p>
            </div>
            <div className='position-absolute bottom-0 logout'>
                <button className='w-100 log text-primary'>Logout <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
                    <path d="M7.5 1v7h1V1z" />
                    <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                </svg></button>
            </div>

        </div>
    )
}

export default LeftAside