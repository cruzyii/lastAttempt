import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "@inertiajs/react";

function Subnav(){
    return (
        <div className="bg-gray-100 flex justify-center">
            <div className="flex flex-1">
            </div>
            <div className="flex items-center justify-between py-3 w-[600px]">
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' size={30}/>
                <div className="content-center"><h2 className="underline font-bold text-sm">Free shipping on orders €50+</h2></div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' size={30}/>
            </div>
            <div className="flex flex-1 justify-end">
            <div className="my-2 mr-[72px] content-center drop-shadow rounded-md bg-gray-800 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600">
                    <Link href="/add">Pievienot produktu</Link>
                </div>
            </div>
        </div>
    )
}
export default Subnav;