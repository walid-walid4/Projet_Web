import React from 'react'
import './Partners.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import gallery_5 from '../../assets/gallery-5.png'
import gallery_6 from '../../assets/gallery-6.png'
import gallery_7 from '../../assets/gallery-7.png'
import gallery_8 from '../../assets/gallery-8.png'

const Partners = () => {
    return (
        <div className='partners'>
            <div className='gallery'>
                <img src={gallery_1} alt="" />
                <img src={gallery_2} alt="" />
                <img src={gallery_3} alt="" />
                <img src={gallery_4} alt="" />
                <img src={gallery_5} alt="" />
                <img src={gallery_6} alt="" />
                <img src={gallery_7} alt="" />
                <img src={gallery_8} alt="" />
                <img src={gallery_1} alt="Partner 1" />
                <img src={gallery_2} alt="Partner 2" />
                <img src={gallery_3} alt="Partner 3" />
                <img src={gallery_4} alt="Partner 4" />
                <img src={gallery_5} alt="Partner 5" />
                <img src={gallery_6} alt="Partner 6" />
                <img src={gallery_7} alt="Partner 7" />
                <img src={gallery_8} alt="Partner 8" />
            </div></div>
    )
}

export default Partners