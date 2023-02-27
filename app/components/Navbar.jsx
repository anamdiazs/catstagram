import Dropdown from "./Dropdown"


export default function Navbar(props) {
	const { breeds } = props
  return (
	 <nav className="w-full h-16 bg-rose-200 p-4 flex items-center z-50 justify-between">
		<div className="flex space-x-4 items-center lg:space-x-10">
			<img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/2865/2865523.png"/>
			<h1 className="text-white text-lg lg:text-xl">Catstagram</h1>
		</div>
		<Dropdown breeds={breeds} />
	 </nav>
  )
}
