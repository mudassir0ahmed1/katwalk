import React from 'react'
import designerbgimg from '../../assets/designerBg.jpg'
import designerimg from '../../assets/designerProfile.jpg'

const DesignerDetails = () => {
    return (
        <div className='designer_detail_banner'>
           <img className='designer_detail_banner_img' src={designerbgimg} alt="" />
           <img className='designer_img' src={designerimg} alt="" />
         <span className='designer_detail_span'>
             Catalog Aliya Designs
         </span>
         <div className="designer_detail_content">
             <h4>Aliya Designs</h4>
             <p>Aliya Designs is a brand based in Dubai and $, founded in 2008 and having fur as a signature element. Its every item is uber contemporary and fun, standing out of the crowd at once. Indeed, these garments are rather art investment pieces that will cheer you up and reveal your fine sense of style.</p>
         </div>
        </div>
    )
}

export default DesignerDetails
