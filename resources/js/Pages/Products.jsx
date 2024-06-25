import Layout from "@/Components/Layout";
import Subnav from "@/Components/Subnav";
import Sidebar from "@/Components/Sidebar";

function Products(){
    return (
            <Layout>
                <Subnav/>
                <div className="flex flex-1 px-[72px] py-4 font-medium text-xl justify-between">
                    <h1 className="text-2xl">Vīriešu Apģērbi(3)</h1>
                    <ul className="flex space-x-16">
                        <li>Filtri</li>
                        <li>Kārtot pēc</li>
                    </ul>
                </div>
                <Sidebar/>
            </Layout>
    )
}
export default Products;