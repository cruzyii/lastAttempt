import React from 'react';
import { useForm } from '@inertiajs/react'






function AddProduct() {
    const { data, setData, post } = useForm({
        name: '',
        price: '',
        description: '',
        image: '',
        sex: '',
        category: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post('/products');
    }

    return (
        <div className=''>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <input type="file" onChange={(e) => setData('image', e.target.files[0])} />Product image
                <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} />Product name
                <input type="number" value={data.price} onChange={e => setData('price', e.target.value)} />Product price
                <input type="text" value={data.description} onChange={e => setData('description', e.target.value)} />Product description
                <input type="text" value={data.sex} onChange={e => setData('sex', e.target.value)} />Product sex
                <input type="text" value={data.category} onChange={e => setData('category', e.target.value)} />Product category
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AddProduct;