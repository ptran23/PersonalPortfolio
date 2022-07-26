import React from 'react'

function ButtonsComp({button,filter}) {
  return (
    <div className='buttonsdiv'>
        {
        button.map((cat , i)=>{
            return <button key= {cat} className="buttons"type="button" onClick={()=> filter(cat)}>{cat}</button>
        })
        }
    </div>
  )
}

export default ButtonsComp