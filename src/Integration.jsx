import React from 'react'
import Header from './components/Header'
import { IoScan } from 'react-icons/io5'

import bmb from "/public/BMW.png"

export default function Integration() {

  const h1 = "The Name of my school is Al-Aleem Model Group of Schools. It is located in Karachi, Pakistan. The school offers a wide range of academic programs and extracurricular activities for students of all ages. The school has a strong focus on academic excellence and provides a supportive learning environment for its students."

  const p = "The school has a team of highly qualified and experienced teachers who are dedicated to helping students achieve their full potential. The school also has a strong emphasis on character development and encourages students to become responsible and compassionate members of society."

  const text = {
    h1: "I am DBLACK.",

    p: "my favorite car is BMW. It is a German luxury car brand that is known for its high-performance vehicles and sleek designs. BMW cars are often associated with status and prestige, and they are popular among car enthusiasts around the world.",

    p1: "My favorite color is black.",

  }



  return (
    <div>
      <Header />


      <div className='card1'>

        <img src={bmb} alt='image' className='bbm' />

        <h1 >{h1}</h1>
        <p >{p}</p>


      </div>


      < div className='card2'>

        <h1>{text.h1}</h1>
        <p>{text.p}</p>
        <p>{text.p1}</p>

      </div>


    </div>
  )
}
