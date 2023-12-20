import React from 'react'
import './RightAside.css'

function RightAside() {
    return (
        <div className='aside'>
            <div className='notification bg-white mt-2 ms-2 d-flex justify-content-center pt-1 rounded-2 pb-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bell-fill text-primary ps-1" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" fill="red" className="bi bi-3-circle-fill mt-1 " viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
                </svg>
            </div>
            <div className='position-absolute bottom-0 mb-4 ms-3 rounded-5 plus d-flex align-items-center justify-content-center pb-1'>+</div>
            <div className='position-absolute bottom-0 bg-white plain rounded-1 shadow-lg '></div>
        </div>
    )
}

export default RightAside