import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({noFooter,children}) => {
    return (
        <>
        <Header/>
            {children}
      { noFooter || <Footer/>}
        </>
            
        
    )
}

export default Layout
