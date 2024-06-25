import React, { useState } from 'react';
import { router } from '@inertiajs/react'





function AddProduct(){
    const [data, setData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', data);

        router.post('/images', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    };

return (
  <form onSubmit={handleSubmit}>
    <input type="file" onChange={(e) => setData(e.target.files[0])} />
    <button type="submit">Submit</button>
  </form>
)
}
export default AddProduct;