import React, {useState} from 'react'

const ColorBoxForm = ({allColors, setAllColors}) => {
    const [color, setColor] = useState({
        boxColor: '',
        boxSize: ''
    })
    const changeHandler = (e) => {
        setColor({...color, [e.target.name]: e.target.value})
    }
    

    const submitHandler = (e) => {
        e.preventDefault()
        setAllColors([...allColors, color])
        setColor({
            boxColor: '',
            boxSize: ''
        })
    }
    return (
        <div className='row mt-4'>
            <form action="" className='col-4 mx-auto'onSubmit={submitHandler}>
                <div className='form-group'>
                    {color.boxColor && color.boxColor.length < 2 ? <p className='text-danger'>Color must be at least 2 characters</p> : null}
                    <label htmlFor="boxColor" className='form-label'>Color:</label>
                    <input type="text" name="boxColor" id='boxColor' className='form-control' onChange={changeHandler} value={color.boxColor}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="boxSize" className='form-label'>Size:</label>
                    <input type="text" name="boxSize" id='boxSize' className='form-control' onChange={changeHandler} value={color.boxSize}/>
                </div>
                <button className='btn btn-primary my-4'>Add</button>
            </form>
        </div>
    )
}

export default ColorBoxForm