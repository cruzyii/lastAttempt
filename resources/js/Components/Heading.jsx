function Heading({heading, subheading}) {
    return (
        <div className='pb-2 p-8 font-bold text-center font-AbhayaLibre'>
            <h1 className='text-7xl'>{heading}</h1>
            <h2 className='text-3xl'>{subheading}</h2>
        </div>
    )
}
export default Heading;