<?php

namespace App\Http\Controllers;

use App\Models\RentLogs;
use Illuminate\Http\Request;

class RentLogController extends Controller
{
    public function index()
    {
        $rentLogs = RentLogs::with(['user', 'book'])->get();
        return inertia('Views/RentLogs', ['rentLogs' => $rentLogs]);
    }
}
