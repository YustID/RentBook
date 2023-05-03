<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    public function login()
    {
        return inertia('Auth/Login');
    }

    public function authenticating(Request $request)
    {
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {

          if(Auth::user()->status != 'active'){  
            Auth::logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();

            Session::flash('type', 'failed'); 
            Session::flash('message', 'Your account is not active, please contact admin'); 
 
            return redirect('/login');
          } 

          if(Auth::user()->role_id == 1) {
            return redirect(route('dashboard'));
          }

          if(Auth::user()->role_id == 2) {
            return redirect(route('profile'));
          }

        }

        Session::flash('type', 'failed'); 
        Session::flash('message', 'Login Invalid'); 
        return redirect('/login');
    }

    public function register()
    {
        return inertia('Auth/Register');
    }

    public function store(Request $request)
    {
        /**
         * validate request
         */
        $this->validate($request, [
          'username' => 'required|unique:users|max:255',
          'password' => 'required|max:225',
          'phone' => 'required|max:225',
          'address' => 'required',
        ]);

        /**
         * create user
         */
        User::create([
            'username'  => $request->username,
            'password'  => bcrypt($request->password),
            'phone'     => $request->phone,
            'address'   => $request->address
        ]);

        //redirect
        return redirect(route("login"))->with([
          'message' => 'Regiter berhasil',
          'type' => 'success'
        ]);
    }

    public function logout(Request $request)
    {
      Auth::logout();
      $request->session()->invalidate();
      $request->session()->regenerateToken();
      return redirect('/login');
    }
}

