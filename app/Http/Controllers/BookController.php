<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::all();
        return inertia('Views/Book', ['books' => $books]);
    }

    public function add()
    {
        return inertia('Views/AddBook');
    }

    public function Store(Request $request, Book $book)
    {
        $this->validate($request, [
            'book_code' => 'required|unique:books|max:255',
            'title' => 'required|max:255'
          ]);

        //   {cara fajar} //
          $newName = '';
          if( $request->file('image')) {
            $extension = $request->file('image')->getClientOriginalExtension();
            $newName = $request->title.'-'.now()->timestamp.'.'.$extension;
            $request->file('image')->storeAs('cover', $newName);
          }

        $request['cover'] = $newName;
        $book = Book::create($request->all());

        // {cara bg khilmi} //
        // $image = '';
        // $image = $request->file('image');
        // $image->storeAs('public/books', $image->hashName());

        // $book = Book::create([
        //     'book_code' => $request->book_code,
        //     'cover'=> $image->hashName(),
        //     'title' => $request->title
        // ]);

        return redirect('books')->with([
            'message' => 'Book Added Successfuly',
            'type' => 'success'
        ]);
    }

    public function edit(Book $book)
    {   
        return inertia('Views/EditBook', [
            'book' => $book,
            
        ]);
    }

    public function update(Request $request, Book $book)
    { 

        $this->validate($request, [
            'book_code' => 'required|unique:books|max:255',
            'title' => 'required|max:255'
          ]);

        if ($request->file('image')) {

            //remove old image
            Storage::disk('public')->delete('cover'.basename($book->cover));
        
            //upload new image
            $image = $request->file('image');
            $image->storeAs('cover', $image->hashName());

            //update category with new image
            $book->update([
                'book_code' => $request->book_code,
                'title' => $request->title,
                'cover'=> $image->hashName()
            ]);

        }

        //update category without image
        $book->update([
                'book_code' => $request->book_code,
                'title' => $request->title
        ]);

        
        return redirect('books')->with([
            'message' => 'Book Update Successfuly',
            'type' => 'success'
        ]);

        
    }

    public function destroy(Book $book)
    {
        $book->delete();
        return redirect()->route('books');
    }

    public function deletedBook()
    {
        $deletedBooks = Book::onlyTrashed()->get();
        return inertia('Views/DeletedListBook', ['deletedBooks' => $deletedBooks]);
    }

    public function restoreBook($id)
    {
        $bookSelect = Book::withTrashed()->find($id);
        $bookSelect->restore();
        return redirect('books')->with([
            'message' => 'Book Restored Successfuly',
            'type' => 'success'
        ]);

    }

}
