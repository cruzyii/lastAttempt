import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Subnav(){
    return (
        <div className="bg-gray-100 flex">
            <div className="flex items-center py-4 m-auto">
                <MdChevronLeft/>
                <h2>Free shipping on orders €50+</h2>
                <MdChevronRight/>
            </div>
        </div>
    )
}
export default Subnav;