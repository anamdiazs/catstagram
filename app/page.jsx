import Card from "./components/Card"
import Navbar from "./components/Navbar"
import HighlightsSection from "./components/HighlightsSection"

const fetchCats = () => {
	return fetch("https://api.thecatapi.com/v1/images/search?limit=50",{
		headers:{
			'x-api-key': "live_fn3DLX3NgTjf3rw6XZIExD27FysW12tRuN3KVBi8AYdRBEfMCFMpe9PKI2TSltXY"
		}
	})
	.then( res => res.json())
}
const fetchBreeds = () => {
	return fetch("https://api.thecatapi.com/v1/breeds",{
		headers:{
			'x-api-key': "live_fn3DLX3NgTjf3rw6XZIExD27FysW12tRuN3KVBi8AYdRBEfMCFMpe9PKI2TSltXY"
		}	
	})
	.then( res => res.json())
}

export default async function Home() {
	const catData = await fetchCats();
	const breedData = await fetchBreeds();
	const breed = breedData.map( item => {
		const currentBreed = {
			id:item.id,
			name: item.name
		}
		return currentBreed
	})


	return(
		<>
			<Navbar breeds={breed}/>
			<main>
				<HighlightsSection />
				<div className="grid grid-cols-3 lg:gap-4 lg:p-10 justify-center items-center pb-20">
					{catData ? catData.map(item => (
						<Card key={item.id} image={item.url} imageID={item.id}/>
					)): console.log('Cats loading....')}
				</div>
			</main>
		</>
  )
}
