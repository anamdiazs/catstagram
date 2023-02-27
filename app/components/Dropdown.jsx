'use client'

import { useRecoilState } from 'recoil'
import { currentBreedState } from '../atoms/currentBreed'


export default function Dropdown(props) {
	
	const [selectedBreed, setSelectedBreed] = useRecoilState(currentBreedState)
	const { breeds } = props

	const handleChange = (e) => {
		setSelectedBreed(e.target.value)
	}

  return (
	<div className=''>
		<form>
			<select className='h-8 rounded-md' defaultValue={'Select breed'} onChange={ e => handleChange(e)}>
				<option>Select breed</option>
				{breeds.map(item => (
					<option className='text-lg' key={item.id} value={item.id}>{item.name}</option>
				))}
			</select>
		</form>
	</div>

  )
}


