import React, { useState } from 'react';
import { router } from '@inertiajs/react'





function AddProduct(){
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);

        router.post('/images', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    };

return (
  <form onSubmit={handleSubmit}>
    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
    <button type="submit">Submit</button>
  </form>
)
}
export default AddProduct;