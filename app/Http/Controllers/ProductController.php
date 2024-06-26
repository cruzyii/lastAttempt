<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Product;

class ProductController extends Controller
{
    public function store(Request $request)
    {
        if($request->hasFile('image')){
            Storage::disk('public')->put('images', $request->image);
        }
        $product = new Product();
        $product->name = $request->name;
        $product->price = $request->price;
        $product->description = $request->description;
        $product->gender = $request->gender;
        $product->category = $request->category;
        $product->image = $request->image;
        $product->availability = $request->availability;
        $product->save();
        return redirect('/products');
    }
}
