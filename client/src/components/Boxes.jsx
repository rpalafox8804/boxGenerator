import React, { Component } from 'react'

const Boxes = ({allColors}) => {
    return (
        <div>
            {
                allColors.map((color, i) => {
                    return (
                        <div className="d-inline-flex" key={i}>
                            .

                                <div style={{ backgroundColor: color.boxColor, width: color.boxSize+'px', height: color.boxSize+'px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '5px', border: '1px solid black' }}>               </div>
                        </div>
                    )
                }
                )
            }   
        </div>
    )
}

export default Boxes