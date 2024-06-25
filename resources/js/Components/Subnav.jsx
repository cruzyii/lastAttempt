import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Subnav(){
    return (
        <div className="bg-gray-100 flex justify-center">
            <div className="flex items-center justify-between py-3 w-[600px]">
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' size={30}/>
                <h2 className="underline font-bold text-sm">Free shipping on orders €50+</h2>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' size={30}/>
            </div>
        </div>
    )
}
export default Subnav;