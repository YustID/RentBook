<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Book;
use App\Models\RentLogs;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookRentController extends Controller
{
    public function index()
    {
        $users = User::where('id', '!=', 1)->where('status', '!=', 'inactive')->get();
        $books = Book::all();
        return inertia('Views/BookRent', ['users' => $users, 'books' => $books]);
    }

    public function store(Request $request)
    {
       
        $request['rent_date'] = Carbon::now()->toDateString();  
        $request['return_date'] = Carbon::now()->addDay(3)->toDateString();
        
        $bookStatus = Book::findOrFail($request->book_id)->status;

        if ($bookStatus != 'in stock') {
            return redirect('/book-rent')->with([
                'message' => 'Cannot rent, the book is not available',
                'type' => 'danger'
            ]);
        } else {
            $count = RentLogs::where('user_id', $request->user_id)->where('actual_return_date', null)->count();
            
            if($count >= 3){
                return redirect('/book-rent')->with([
                    'message' => 'Cannot rent, user has reach limit of book',
                    'type' => 'danger'
                ]);
            }
            else{
                try {
                    DB::beginTransaction();
                    // process insert to rent_logs table
                    RentLogs::create($request->all());
                    // process update status column
                    $book = Book::findOrFail($request->book_id);
                    $book->status = 'not available';
                    $book->save();
                    DB::commit();
                    return redirect('/book-rent')->with([
                        'message' => 'Rent book success !!',
                        'type' => 'success'
                    ]);
                } catch (\Throwable $th) {
                    DB::rollBack();
                }
            }
        }
        
    }

    public function returnBook()
    {
        $users = User::where('id', '!=', 1)->where('status', '!=', 'inactive')->get();
        $books = Book::all();
        return inertia('Views/ReturnBook', ['users' => $users, 'books' => $books]);
    }

    public function storeReturnBook(Request $request)
    {
        $rent = RentLogs::where('user_id', $request->user_id)->where('book_id', $request->book_id)->where('actual_return_date', null);
        $rentData = $rent->first();
        $countData = $rent->count();
        

        if($countData == 1){
            $rentData->actual_return_date = Carbon::now()->toDateString();
            $rentData->save();
            
            $book = Book::findOrFail($request->book_id);
            $book->status = 'in stock';
            $book->save();

            return redirect('return-book')->with([
                'message' => 'The book is returned successfully',
                'type' => 'success'
            ]);
        }else{
            return redirect('return-book')->with([
                'message' => 'There is error in process',
                'type' => 'danger'
            ]);
        }
    
    }
}
