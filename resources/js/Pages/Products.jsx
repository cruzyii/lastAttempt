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
                <div className="flex flex-wrap">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="w-full md:w-1/2 lg:w-1/3">
                            <div className="p-4 m-2 border rounded-md">
                                <div className='aspect-video'><img src={`/storage/${product.image}`} alt={product.name} className="rounded-md object-cover w-full h-full mb-4" /></div>
                                <div className='flex justify-between'>
                                    <div className=''> 
                                        <h3 className="text-lg font-bold">{product.name}</h3>
                                        <p className="text-gray-600">{product.category}</p>
                                        <p className="text-gray-800">${product.price}</p>
                                    </div>
                                    <div className=''>
                                        <Button className='block w-full'>Pievienot grozam</Button>
                                        {/* <Button className='block w-full' onClick={() => handleEdit(product.id)}>Rediģēt</Button> */}
                                        <Link href={route('products.edit', product.id)} className='block w-full' >Rediģēt</Link>
                                        <Button className='block w-full' onClick={() => handleDelete(product.id)}>Dzēst</Button>
                                    </div>
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