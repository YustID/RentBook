<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PublicController extends Controller
{
    public function index()
    {
        $books = Book::all();
        return inertia('Views/Public', ['books' => $books]);
    }

    public function search(Request $request)
    {    
        
        if ($request->search) {
            $search = $request->get('search');
            $books = Book::where('title', 'like', '%' . $search . '%')->get();
        } else {
            $books = Book::OrderByDesc('title')->get();
        }

        return Inertia('Views/Public', [
            "books" => $books,   
]);
            
           
    }
}
