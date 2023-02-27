
export default function Card(props) {
	const { image } = props
  return (
	 <div className='w-32 h-32 lg:w-96 lg:h-96'>
		<img className=" w-full h-full object-cover" src={image} alt='cat-image'/>
	 </div>
  )
}
