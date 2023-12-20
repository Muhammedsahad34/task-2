import React from 'react'
import './Header.css';
import image1 from '../../Assets/image1.png';
import image2 from '../../Assets/arab.jpg'

function Header() {
    return (
        <div className='d-flex main'>
            <div className='div1 d-flex justify-content-center'>
                <img src={image1} alt="Logo" className='image1'/>
            </div>
            <div className='div2 d-flex align-items-center'>
                <div className='d-flex bg-white inside shadow-lg ms-auto'>
                    <img src={image2} alt="Logo" className='image2 m-1 rounded-4'/>
                    <p className='fw-bold mt-2 ms-2'>XYZ Enterprises Pvt.Ltd</p>
                </div>
                <div className=' d-flex shadow-lg bg-white downlogo align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Header