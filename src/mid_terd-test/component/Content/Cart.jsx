import React from 'react'
import './Cart.scss'
export default function Cart() {
    const cartItem = [
        {
            id : 1,
            img: "../images/banner_1.jpg",
            title: "WOMEN'S"
        },
        {
            id: 2,
            img: "../images/banner_2.jpg",
            title: "ACCESSORIES'S"
        },
        
        {
            id: 3,
            img: "../images/banner_3.jpg",
            title: "MEN'S"
        }
    ]

    

  return (
      <div className='main__card'>
    {cartItem.map((item) => ( 
              <div className="card" style={{ width: "18rem",height:"250px" , backgroundImage:`url(${item.img})` }}>
                
                  <p className="card-text">{item.title}</p>
              </div>
    ))}
      </div>
  )
}
