import React, { useState } from 'react';

function Product({data = []}){
    return(
        <div>
            <h1>My Products</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default Product;