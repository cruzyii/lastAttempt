<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $data = Product::all();

        return Inertia::render('Shop', [
            'data' => $data
        ]);
    }

    public function store(Request $request)
    {
        // if($request->hasFile('image')){
        //     Storage::disk('public')->put('images', $request->image);
        // }
        $request->validate([
            'name' => ['required','max:255'],
            'price' => ['required', 'min:0'],
            'image' => ['image', 'mimes:jpeg,png,jpg,svg', 'max:2048'],
        ]);

        Storage::disk('public')->put('images', $request->image);
        $product = new Product();
        $product->name = $request->name;
        $product->price = $request->price;
        $product->description = $request->description;
        $product->gender = $request->gender;
        $product->category = $request->category;
        $product->image = $request->image;
        $product->availability = $request->availability;
        $product->size = $request->size;
        $product->color = $request->color;
        $product->save();
        return redirect('/products');
    }
}
