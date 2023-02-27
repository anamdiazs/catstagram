'use client'

import Image from 'next/image';	

export default function Highlights(props) {
	const { image , name } = props
	return (
		<div className="w-12 h-12">
			<img className="rounded-full w-full h-full" src={image} alt="cat-image" />
			<p className="text-xs text-center font-semibold">{name}</p>
		</div>
  )
}
