import { useState } from 'react'
import React from 'react'
import { NavLink } from 'react-router-dom'


function BarNav({visibilityMens, visibilityWomens, setVisibilityCarBuy ,visibilityCarBuy, carBuy ,setVisibilityWomens, setVisibilityMens, setVisibilityBarNavMens, setVisibilityBarNavWomens}) {
    const [visibilityButtonCarBuy, setVisibilityButtonCarBuy] = useState(false)


    const challangeVisibilityCarBuy = () => {
    setVisibilityCarBuy(true)
}


    const challangeMenFunction = () => {
    setVisibilityBarNavMens(true)
    setVisibilityMens(true)
    setVisibilityBarNavWomens(false)
    setVisibilityWomens(false)
}

const challangeWomenFunction = () => {
    setVisibilityBarNavMens(false)
    setVisibilityMens(false)
    setVisibilityBarNavWomens(true)
    setVisibilityWomens(true)
}



    return (
    <nav className='central-barnav'>
<NavLink to='/' className='barnav-item'>Home</NavLink>
<button className='barnav-item'>Help</button>
{(visibilityMens || visibilityWomens) && <button className='barnav-item'  onClick={() => challangeVisibilityCarBuy()}>CarBuy</button>}
<button className='barnav-item' onClick={challangeMenFunction}>Men</button>
<button className='barnav-item' onClick={challangeWomenFunction}>Women</button>

    </nav>
    
  )
}

export default BarNav