import React from 'react'
import Card from './Card'

const CardGrids = ({gridStyleThree,heading,viewMore}) => {
     let grid = gridStyleThree  
     console.log(gridStyleThree,grid)
    return (
        <div className='GRIDCARDS'>
            <h4>{heading}</h4>
            <div className="CARDCONTAINER">
                <div className={`CardRow ${ grid ? "Grid3-2" : "Grid4-2"}`}>
                    <Card/>
                    <Card/>
                    <Card/>
                    {gridStyleThree || <Card/>}
                </div>
                <div className={`CardRow ${ grid ? "Grid3-2" : "Grid4-2"}`}>
                    <Card/>
                    <Card/>
                    <Card/>
                    {gridStyleThree || <Card/>}
                </div>
            </div>
            <div className="CENTER">
           { viewMore &&     <button className='VIEWBTN' data-text='View More'></button>
           } </div>
        </div>
    )
}

export default CardGrids
