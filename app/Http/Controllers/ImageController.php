<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function store(Request $request)
    {
        if($request->hasFile('image')){
            Storage::disk('public')->put('images', $request->image);
        }
    }
}
