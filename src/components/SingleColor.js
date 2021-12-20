import React from 'react'

const SingleColor = ({colorData, index}) => {
    console.log(colorData)
    const newRgb = colorData.rgb.join(",")
    const background = colorData.hex
    return (
        <div className={index > 10 ? `single_color text_light`: `single_color`} style={{backgroundColor: `rgb(${newRgb})`}}>
            <h3># {background}</h3>
            <h3>{colorData.weight}%</h3>
        </div>
    )
}

export default SingleColor
