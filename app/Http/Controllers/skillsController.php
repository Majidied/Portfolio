<?php

namespace App\Http\Controllers;

use App\Models\skills;
use Illuminate\Http\Request;

class skillsController extends Controller
{
    public function getSkills()
    {
        $skills = skills::all();
        return $skills;
    }
}
