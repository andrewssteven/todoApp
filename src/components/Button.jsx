import React from 'react'

const Button = ({text, className, onClick}) => {
  return (
    <div className={`py-1 px-3 rounded-md cursor-pointer ${className}`} onClick={onClick}>
        {text}
    </div>
  )
}

export default Button