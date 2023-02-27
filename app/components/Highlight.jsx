'use client'

export default function Highlight(props) {
	const {image, name} = props
  return (
		<div className="w-12 h-12 lg:w-24 lg:h-24">
			<img className="rounded-full w-full h-full object-cover" src={image} alt="cat-image" />
			<p className="text-xs text-center font-semibold lg:text-lg">{name}</p>
		</div>
  )
}
