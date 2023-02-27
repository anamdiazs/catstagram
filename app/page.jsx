import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Highlights from "./components/Highlights"

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
		return item.name
	})

	return(
		<>
			<Navbar breeds={breed}/>
			<main>
				<div className="w-screen h-40 grid grid-flow-col justify-center items-center gap-6 overflow-x-auto pl-20">
					{breedData ? breedData.map(item => (
						item.image ? <Highlights key={item.id} image={item.image.url} name={item.name}/> : console.log("Image not found..")
					)): console.log('Cats loading....')}
				</div>
				<div className="grid grid-cols-3 lg:gap-4 lg:p-10 justify-center items-center">
					{catData ? catData.map(item => (
						<Card key={item.id} image={item.url}/>
					)): console.log('Cats loading....')}
				</div>
			</main>
		</>
  )
}
