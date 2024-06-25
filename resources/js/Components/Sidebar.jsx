import { FaChevronDown } from "react-icons/fa";

function Sidebar(){
    return (
        <div className="flex flex-col w-[240px] pl-[72px] py-2 my-2 text-xl leading-relaxed font-medium overflow-y-scroll">
            <ul className="">
                <li>T-Krekli</li>
                <li>Džinsi</li>
                <li>Džemperi</li>
                <li>Mēteļi</li>
                <li>Apavi</li>
                <li>Bikses</li>
                <li>Šorti</li>
                <li>Apakšveļa</li>
            </ul>
            <ul className="py-4 divide-y divide-gray-200 w-11/12">
                <div></div>{/*This div is used to create a dividing line between the two lists*/}
                <div className="flex items-center">Izmērs<FaChevronDown className='opacity-50 cursor-pointer hover:opacity-100 ml-auto' size={17}/></div>
                <div className="flex items-center">Cena<FaChevronDown className='opacity-50 cursor-pointer hover:opacity-100 ml-auto' size={17}/></div>
                <div className="flex items-center">Pieejamība<FaChevronDown className='opacity-50 cursor-pointer hover:opacity-100 ml-auto' size={17}/></div>
                <li>
                    <div>
                        <div className="flex items-center">
                        Krāsa
                        <FaChevronDown className='opacity-50 cursor-pointer hover:opacity-100 ml-auto' size={17}/>
                        </div>
                        <ul className="hidden">
                            <li>balts</li>
                            <li>melns</li>
                            <li>zils</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div>
                        <div className="flex items-center">
                            Zīmoli
                            <FaChevronDown className='opacity-50 cursor-pointer hover:opacity-100 ml-auto' size={17}/>
                        </div>
                        <ul className="hidden">
                            <li>Adidas</li>
                            <li>Nike</li>
                            <li>Puma</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;