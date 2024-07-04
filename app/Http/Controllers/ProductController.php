<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Gender;
use App\Models\Size;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Support\Facades\Log;
use App\Models\Color;

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


    public function edit(Product $product)
    {
        $categories = Category::all();
        $colors = Color::all();
        $genders = Gender::all();
        $sizes = Size::all();

        return inertia('Edit', [
            'categories' => $categories,
            'colors' => $colors,
            'sizes' => $sizes,
            'genders' => $genders,
            'product' => new ProductResource($product)
        ]);
    }

    // Handle the form submission
    public function update(Request $request, Product $product)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'gender' => 'required|string',
            'category' => 'required|string',
            'color' => 'required|string',
            'size' => 'required|string',
        ]);
        
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
            $validatedData['image'] = $imagePath;
        }


        $product->update($validatedData);


        // Redirect back with success message
        return redirect()->route('products.index')->with('success', 'Product updated successfully.');
    }



    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        
        Storage::disk('public')->delete($product->image);
        
        $product->delete();

        return redirect('/products');
    }

    public function create()
    {
        $categories = Category::all();
        $colors = Color::all();
        $genders = Gender::all();
        $sizes = Size::all();
        
        return inertia('AddProduct', [
            'categories' => $categories,
            'colors' => $colors,
            'sizes' => $sizes,
            'genders' => $genders,
        ]);


    }

}
