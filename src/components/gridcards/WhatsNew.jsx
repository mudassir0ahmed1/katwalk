import React from 'react'
import CardGrids from './GridCards'

const WhatsNew = () => {
    let rtl = false
    let contentBasedOnLang = rtl ? "ما الجديد في المصممين"  : "What's new in designers"
    return (
        <CardGrids heading={contentBasedOnLang} viewMore  gridStyleThree/>
    )
}

export default WhatsNew
