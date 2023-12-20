import React from 'react'
import './Main.css'
import Card1 from '../Card1/Card1'
import Card2 from '../Card2/Card2'
import Card3 from '../Card3/Card3'
import Card4 from '../Card4/Card4'
import Card5 from '../Card5/Card5'
function Main() {
    return (
        <div className='main2 overflow-auto '>
            <div className="container-fluid">
                <div className='row '>
                    <h3 className='mt-5 ms-2'>Choose a Plan that's just for you !</h3>
                    <div className="col-12 col-md-4">
                          <Card1 />
        
                    </div>
                    <div className='col-12 col-md-4'>
                        <Card2/>
                    </div>
                    <div className='col-12 col-md-4'>
                        <Card3/>
                    </div>
                    <div className='col-12 col-md-6'>
                        <Card4/>
                    </div>
                    <div className='col-12 col-md-6'>
                        <Card5/>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Main