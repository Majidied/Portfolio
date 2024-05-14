<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\clients;

class clientsController extends Controller
{
    public function getClients()
    {
        $clients = clients::all();
        return $clients;
    }
}
