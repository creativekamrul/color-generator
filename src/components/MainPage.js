import React, {useState, useEffect} from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor'

const MainPage = () => {
    const [color, setColor] = useState("#f78562")
    const [error, setError] = useState(false)
    const [colorList, setColorList] = useState([])

    const submitHandeler = (e) => {
        e.preventDefault()
        try {
        const colors = new Values(color).all(10)
        setColorList(colors)
        setError(false)
        } catch (error) {
            setError(true)
            console.log(error)
        }
    }
    useEffect(()=>{
        const colors = new Values(color).all(10)
        setColorList(colors)
    }, [])
    return (
        <div className='main_page_div'>
            <div className='search_area'>
                <h3>Search a Color</h3>
                <form onSubmit={submitHandeler}>
                    <input 
                    className={error ? `error`: ``}
                    type="text" placeholder='#f78562' value={color} onChange={(e)=>{
                        setColor(e.target.value)
                    }}/>
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div className='single_colors'>
                {
                    colorList.map((col, index)=>{
                            return(
                                <SingleColor key={col.hex} colorData={col} index={index}/>
                            )
                    })
                }
            </div>
        </div>
    )
}

export default MainPage
