import Layout from "@/Components/Layout";
import Subnav from "@/Components/Subnav";
import Sidebar from "@/Components/Sidebar";
import { IoIosMenu } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";

function Products(){
    return (
            <Layout>
                <Subnav/>
                <div className="flex flex-1 px-[72px] py-4 font-medium text-l justify-between">
                    <h1 className="text-2xl">Vīriešu Apģērbi(3)</h1>
                    <ul className="flex space-x-4">
                        <li>
                            <div className="flex items-center">
                                <p className="px-1">Slēpt Filtrus</p>
                                <IoIosMenu className='opacity-50 cursor-pointer hover:opacity-100 ml-auto' size={25}/>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <p className="px-1">Kārtot pēc</p>
                                <FaChevronDown className='opacity-50 cursor-pointer hover:opacity-100 ml-auto' size={15}/>
                            </div>
                        </li>
                    </ul>
                </div>
                <Sidebar/>
            </Layout>
    )
}
export default Products;