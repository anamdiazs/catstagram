'use client'

import useIntersectionObserver from "../hooks/useIntersectionObserver"

import { useRef } from "react";

export default function Card(props) {
	const { image } = props
	const cardRef = useRef(null)
	const isIntersecting = useIntersectionObserver(cardRef)
  return (
	 <div className='w-32 h-32 lg:w-96 lg:h-96' ref={cardRef}>
		<img className=" w-full h-full object-cover" src={image} alt='cat-image'/>
		{isIntersecting ? "Itersecting" : "Not intersecting"}
	 </div>
  )
}
