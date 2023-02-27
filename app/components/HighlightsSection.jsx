'use client'

import { useRecoilValue } from "recoil"
import { currentBreedState } from "../atoms/currentBreed"
import { useEffect, useState } from "react"
import Highlight from "./Highlight"

export default function HighlightsSection() {
	const breedID = useRecoilValue(currentBreedState)
	const [ breedData, setBreedData] = useState()

	const fetchSelectedBreed  = async () => {
		const res = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedID}`, {
			headers: {
				'x-api-key': "live_fn3DLX3NgTjf3rw6XZIExD27FysW12tRuN3KVBi8AYdRBEfMCFMpe9PKI2TSltXY"
			}
		})
		setBreedData(await res.json())
		return breedData
	}

	useEffect(() => {
		fetchSelectedBreed()
	}, [breedID])
	
	return (
		<div className="w-screen h-32 lg:h-40 grid grid-flow-col justify-center items-center gap-6 overflow-x-auto">
			{breedData?breedData.map(item => (
				<Highlight 
				key={item.id} 
				image={item.url} 
				name={
						item.breeds.map(item =>{
							return item.name
					}
				)}/>
			)
			): console.log('Cats loading...')}
	 	</div>
  )
}
