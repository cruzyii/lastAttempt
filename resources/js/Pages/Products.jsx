import React, { useState } from 'react';
import Layout from "@/Components/Layout";
import Sidebar from "@/Components/Sidebar";
import { IoIosMenu } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import Button from "@/Components/Button";
import { router } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

function Products({ products }) {
    const [category, setCategory] = useState('');
    const filteredProducts = category
        ? products.filter(product => product.category === category)
        : products;


    const handleDelete = (productId) => {
        router.delete(`/products/${productId}`, {
            _method: 'delete',
            $id: productId,
        })
    };





    return (
        <Layout>
            <div className="flex flex-1 px-[72px] py-4 font-medium text-l justify-between">
                <h1 className="text-2xl">Vīriešu Apģērbi(3)</h1>
                <ul className="flex space-x-4">
                    <li>
                        <div className="flex items-center">
                            <p className="px-1">Slēpt Filtrus</p>
                            <IoIosMenu className='opacity-50 cursor-pointer hover:opacity-100 ml-auto' size={25} />
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <p className="px-1">Kārtot pēc</p>
                            <FaChevronDown className='opacity-50 cursor-pointer hover:opacity-100 ml-auto' size={15} />
                        </div>
                    </li>
                </ul>
            </div>
            <div className='flex'>
                <Sidebar />
                <div className="my-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-[72px]">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="rounded-lg flex overflow-hidden flex-col">
                            <div className='w-full h-auto bg-gray-100'>
                                <img src={`/storage/${product.image}`} alt={product.name} className="object-contain aspect-square" />
                            </div>
                            <div className='px-2 flex justify-between'>
                                <div className='flex flex-1 justify-between'>
                                    <h3 className="text-lg font-light">{product.name}</h3>
                                    <p className="text-gray-800">${product.price}</p>
                                </div>
                            </div>

                                <div className='px-1'>
                                    <Button className='block w-full'>Pievienot grozam</Button>
                                    <div className='flex space-x-2'>
                                    <Button variant='secondary' className='block w-full outline-1 outline outline-gray-300'><Link href={route('products.edit', product.id)}>Rediģēt</Link></Button>
                                    <Button className='block w-full' onClick={() => handleDelete(product.id)}>Dzēst</Button>
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}
export default Products;