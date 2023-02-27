'use client'

import { useState } from 'react'
export default function Dropdown(props) {
	
	const [selectedBreed, setSelectedBreed] = useState("none")
	const { breeds } = props

	const handleChange = (e) => {
		setSelectedBreed(e.target.value)
	}

	console.log(selectedBreed)
  return (
	<div className=''>
		<form>
			<select className='' defaultValue={selectedBreed} onChange={ e => handleChange(e)}>
				<option>Select breed</option>
				{breeds.map(item => (
					<option className='text-lg' key={item} value={item}>{item}</option>
				))}
			</select>
		</form>
	</div>

  )
}


