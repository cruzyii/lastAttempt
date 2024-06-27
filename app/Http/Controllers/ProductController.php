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
        $products = Product::all();

        return Inertia::render('Products', [
            'products' => $products
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

        $imagePath = $request->file('image')->store('images', 'public');

        Storage::disk('public')->put('images', $request->image);
        $product = new Product();
        $product->name = $request->name;
        $product->price = $request->price;
        $product->description = $request->description;
        $product->gender = $request->gender;
        $product->category = $request->category;
        $product->image = $imagePath;
        $product->size = $request->size;
        $product->color = $request->color;
        $product->save();
        return redirect('/products');
    }


    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        
        Storage::disk('public')->delete($product->image);
        
        $product->delete();

        return redirect('/products');
    }
}
