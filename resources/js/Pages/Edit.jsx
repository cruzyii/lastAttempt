import React, { useEffect, useState } from 'react';
import { router, useForm, usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react'
import Layout from '@/Components/Layout';





function Edit({product}) {
    const { errors } = usePage().props;
    const { data, setData, put } = useForm({
        name: product.name,
        price: product.price,
        description: product.description,
        image: null,
        gender: product.gender,
        category: product.category,
        color: product.color,
        size: product.size,
    });

    const [preview, setPreview] = useState(`/storage/${product.image}`);

    useEffect(() => {
        if (!data.image) {
            setPreview(`/storage/${product.image}`);
            return;
        }

        const objectUrl = URL.createObjectURL(data.image);
        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [data.image]);


    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('_method', 'PUT'); // Simulate a PUT request
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('description', data.description);
        formData.append('image', data.image);
        formData.append('gender', data.gender);
        formData.append('category', data.category);
        formData.append('color', data.color);
        formData.append('size', data.size);

        router.post(`/products/${product.id}`, formData)
    }

    function handleCancel() {
        Inertia.get(route('products.index'));
    }



    return (
        <Layout>
            <div className='flex justify-center'>
        <div className=''>
            <h2 className="py-8 text-2xl font-semibold text-gray-900">Produkta rediģēšana</h2>
            <form onSubmit={handleSubmit}>
                <div className="w-[1200px] bg-gradient-to-b from-white to-gray-100 border-gray-200 border rounded-lg p-8 pb-4 drop-shadow-xl">
                    <div className="flex flex-1">
                        <div className='flex'>{/*Left side div*/}
                            <div className='flex flex-1 flex-col'>
                                <h2 className="text-xl font-semibold text-gray-900">Rediģēt produktu "{product.name}"</h2>
                                <div className="flex my-4">
                                    <div className='pr-8'>
                                        <label htmlFor="name" className="block text-base font-medium leading-6 text-gray-900">
                                            Produkta nosaukums
                                        </label>
                                        <input
                                            onChange={e => setData('name', e.target.value)}
                                            value={data.name}
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="w-[300px] drop-shadow py-1.5 pl-3 border border-gray-300 rounded-md flex-1 bg-white pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                                            required
                                        />
                                        {errors.name && <div>{errors.name}</div>}
                                    </div>
                                    <div className="">
                                        <label htmlFor="gender" className="block text-base font-medium leading-6 text-gray-900">
                                            Dzimums
                                        </label>
                                        <select
                                            value={product.gender} onChange={e => setData('gender', e.target.value)}
                                            id="gender"
                                            name="gender"
                                            autoComplete="gender"
                                            className="w-[300px] drop-shadow py-1.5 pl-3  border border-gray-300 rounded-md bg-white pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                                        >
                                            <option>Vīriešiem</option>
                                            <option>Sievietēm</option>
                                            <option>Unisex</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='flex mb-8'>
                                    <div className='pr-8'>
                                        <label htmlFor="price" className="block text-base font-medium leading-6 text-gray-900">
                                            Produkta cena (EUR)
                                        </label>
                                        <input
                                            onChange={e => setData('price', e.target.value)}
                                            type="number"
                                            step="any"
                                            name="price"
                                            id="price"
                                            autoComplete="0"
                                            className="w-[300px] drop-shadow py-1.5 pl-3  border border-gray-300 rounded-md flex-1 bg-white pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="0€"
                                            required
                                        />
                                        {errors.price && <div>{errors.price}</div>}
                                    </div>
                                    <div>
                                        <label htmlFor="category" className="block text-base font-medium leading-6 text-gray-900">
                                            Kategorija
                                        </label>
                                        <select
                                            value={data.category} onChange={e => setData('category', e.target.value)}
                                            id="category"
                                            name="category"
                                            autoComplete="category"
                                            className="w-[300px] drop-shadow py-1.5 pl-3  border border-gray-300 rounded-md flex-1 bg-white pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                                        >
                                            <option>T-Krekli</option>
                                            <option>Bikses</option>
                                            <option>Šorti</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='mb-8'>
                                    <label htmlFor="description" className="block text-base font-medium leading-6 text-gray-900">
                                        Produkta apraksts
                                    </label>
                                    <div className=''>
                                        <textarea
                                            onChange={e => setData('description', e.target.value)}
                                            id="description"
                                            name="description"
                                            rows={3}
                                            className="drop-shadow block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className='flex mb-8'>
                                    <div className='pr-8'>
                                        <label htmlFor="color" className="block text-base font-medium leading-6 text-gray-900">
                                            Krāsas
                                        </label>
                                        <select
                                            value={data.color} onChange={e => setData('color', e.target.value)}
                                            id="color"
                                            name="color"
                                            className="w-[300px] pl-3 drop-shadow py-1.5  border border-gray-300 rounded-md flex-1 bg-white pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                                        >
                                            <option>Balts</option>
                                            <option>Melns</option>
                                            <option>Sarkans</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="size" className="block text-base font-medium leading-6 text-gray-900">
                                            Izmērs
                                        </label>
                                        <select
                                            value={data.size} onChange={e => setData('size', e.target.value)}
                                            id="size"
                                            name="size"
                                            autoComplete="size"
                                            className="w-[300px] pl-3 drop-shadow py-1.5  border border-gray-300 rounded-md flex-1 bg-white pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                                        >
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                        </select>
                                    </div>

                                </div>
                                <div className='mb-8'>
                                    <div className='flex'>
                                        <input
                                            onChange={(e) => setData('image', e.target.files[0])}
                                            type="file"
                                            name="file"
                                            id="file"
                                            className="hidden"
                                            required
                                        />
                                        <label htmlFor="file" className="drop-shadow inline-block border border-gray-300 bg-white px-4 py-2 text-sm font-semibold rounded-md cursor-pointer hover:bg-gray-200">
                                            Izvēlēties failu
                                        </label>
                                        <div className="content-center pl-4">
                                            <label htmlFor="file" className="flex align-center text-base font-medium leading-6 text-gray-900">
                                                Augšupielādēt attēlu
                                            </label>
                                        </div>
                                    </div>
                                    {errors.image && <div>{errors.image}</div>}
                                </div>
                            </div>
                        </div>


                        <div className='flex flex-1 pl-8 pb-8'>
                            <div className='flex flex-col flex-1 bg-gray-100 p-4 rounded-md justify-center'>
                                <div className='flex justify-center'>
                                    <div className="pb-4 mb-4">
                                        <h2 className="text-center text-xl font-semibold text-gray-900 mb-4">Priekšskatījums</h2>
                                        <div className='aspect-video'>
                                            {preview ? (
                                                <img src={preview} alt="Product Preview" className="w-full h-64 object-cover mb-4 rounded-md" />
                                            ) : (
                                                <img src='https://placehold.co/600x400?text=Your+product+here' alt="Product Preview" className="w-full h-64 object-cover mb-4 rounded-md" />
                                            )}
                                        </div>
                                        <div className='flex justify-between'>
                                            <div>
                                                <h3 className="text-lg font-bold">{data.name}</h3>
                                                <p className="text-gray-600">{data.category}</p>
                                                <p className="text-gray-800">€{data.price}</p>
                                            </div>
                                            <div className='flex flex-col'>
                                                <a href='#' className='block text-lg hover:text-gray-600 font-bold'>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>


                    </div>
                    <div className="flex items-center justify-end gap-x-3">
                        <Link href='/' className="drop-shadow rounded-md px-4 bg-white py-2 text-sm font-semibold shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Atcelt
                        </Link>
                        <button
                            type="submit"
                            className="drop-shadow rounded-md bg-gray-800 px-4  py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Saglabāt
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </div>
        </Layout>
    )
}
export default Edit;