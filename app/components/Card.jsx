'use client'


import { useState, useRef } from "react";
import Modal from "./Modal";

export default function Card(props) {
	const { image, imageID } = props
	const [isOpen,setIsOpen ] = useState(false)
	const imageRef = useRef(imageID)
	// console.log(imageRef)

	// isOpen === true? < Modal />: console.log('close')
  return (

	 <div className='w-32 h-32 lg:w-96 lg:h-96' ref={imageRef} onClick={ () => setIsOpen(!isOpen)}>
		<img className=" w-full h-full object-cover" src={image} alt='cat-image'/>
	 </div>
  )
}
