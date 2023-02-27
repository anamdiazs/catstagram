
'use client'

export default function Modal(props) {
	const { image } = props
  return (
	 <div className="w-screen h-screen bg-gray-400/25 z-50 flex justify-center items-center">
		<div className="w-9/12 h-1/2 lg:w-1/3 lg:h-2/3 bg-white rounded-md shadow-sm z-50 flex flex-col justify-center items-center space-y-2">
			<button className="w-6 h-6  ml-56 lg:ml-96">
				<img className="w-4 h-4 flex items-center justify-center" src="https://cdn-icons-png.flaticon.com/512/9684/9684650.png" alt="" />
			</button>
			<h1 className="text-lg font-semibold">Persian Cat</h1>
			<img className="w-72 h-72 lg:w-96 lg:h-96 object-cover" src={image} alt="" />
			<p>
				This breed is expensive
			</p>
		</div>
	 </div>
  )
}
