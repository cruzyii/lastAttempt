<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function store(Request $request)
    {
        if($request->hasFile('image')){
            Storage::disk('public')->put('images', $request->image);
        }
    }
}
