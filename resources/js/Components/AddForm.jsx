import React from 'react';
import { useForm } from '@inertiajs/react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'


function AddForm() {
    const { data, setData, post } = useForm({
        name: '',
        price: '',
        description: '',
        image: '',
        gender: 'Vīriešiem',
        category: 'Kat1',
        availability: false,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post('/products');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Add a new product</h2>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Produkta nosaukums
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        onChange={e => setData('name', e.target.value)}
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="product-name"
                                        required
                                    />
                                </div>
                            </div>


                            <div className="sm:col-span-4">
                                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                    Produkta cena (EUR)
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            onChange={e => setData('price', e.target.value)}
                                            type="number"
                                            step="any"
                                            name="price"
                                            id="price"
                                            autoComplete="0"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="0€"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="">
                                <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                                    Dzimums
                                </label>
                                <div className="mt-2">
                                    <select
                                        value={data.gender} onChange={e => setData('gender', e.target.value)}
                                        id="gender"
                                        name="gender"
                                        autoComplete="gender"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>Vīriešiem</option>
                                        <option>Sievietēm</option>
                                        <option>Unisex</option>
                                    </select>
                                </div>
                            </div>

                            <div className="">
                                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                                    Kategorija
                                </label>
                                <div className="mt-2">
                                    <select
                                        value={data.category} onChange={e => setData('category', e.target.value)}
                                        id="category"
                                        name="category"
                                        autoComplete="category"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>Kat1</option>
                                        <option>Kat2</option>
                                        <option>Kat3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>

                        <div className="col-span-full">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                Produkta apraksts
                            </label>
                            <div className="mt-2">
                                <textarea
                                    onChange={e => setData('description', e.target.value)}
                                    id="description"
                                    name="description"
                                    rows={3}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>


                        <div className="col-span-full">
                            <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                                Product photo
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={(e) => setData('image', e.target.files[0])}/>
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-x-3'>
                    <label htmlFor="availability" className="font-medium text-gray-900">Ir pieejams noliktavā:</label>
                    <input
                        onChange={e => setData('availability', e.target.value)}
                        id="availability"
                        name="availability"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>

        </form>
    )
}
export default AddForm;
