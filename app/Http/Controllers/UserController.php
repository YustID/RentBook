<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\RentLogs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function profile()
    {
        
        $rentLogs = RentLogs::With(['user', 'book'])->where('user_id', Auth::user()->id)->get();
        return inertia('Views/Profile', ['rentLogs' => $rentLogs ]);
    }

    public function index()
    {
        $users = User::where('role_id', 2)->where('status', 'active')->get();
        return inertia('Views/User', ['users' => $users ]);
    }

    public function registeredUsers()
    {
        $registeredUsers = User::where('status', 'inactive')->where('role_id', 2)->get();
        return inertia('Views/RegisteredUsers', ['registeredUsers' => $registeredUsers]);
    }

    public function show($id)
    {
        $rentLogs = RentLogs::With(['user', 'book'])->where('user_id', $id)->get();
        $user = User::where('id', $id)->first();
        
        return inertia('Views/DetailUsers', ['user' => $user, 'rentLogs' => $rentLogs]);
    }

    public function approve($slug)
    {
        $user = User::where('slug', $slug)->first();
        $user->status = 'active';
        $user->save();

        return redirect('users')->with([
            'message' => 'Users Approved Successfuly',
            'type' => 'success'
        ]);
    }

    public function destroy($slug)
    {
        $users = User::where('slug', $slug)->first();
        $users->delete();
        return redirect()->route('users');;
    }

    public function deletedUsers()
    {
        $deletedUsers = User::onlyTrashed()->get();
        return inertia('Views/DeletedListUser', ['deletedUsers' => $deletedUsers]);
    }

    public function restoreUsers($user)
    {
        User::withTrashed()->find($user)->restore();
        return redirect('/users')->with([
            'message' => 'Users Restored Successfuly',
            'type' => 'success'
        ]);

    }
}       
