<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contacts;

class DashboardController extends Controller
{
    public function index()
    {
        $messages = Contacts::latest()->get();
        return view('admin.dashboard', compact('messages'));
    }
}
