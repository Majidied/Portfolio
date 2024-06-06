<?php

namespace App\Http\Controllers;

use App\Models\Skills;
use Illuminate\Http\Request;

class SkillsController extends Controller
{
    public function getSkills()
    {
        // Fetch all skills and return as JSON
        $skills = Skills::all();
        return response()->json(['technologies' => $skills]);
    }

    public function store(Request $request)
    {
        $skills = new Skills();
        $skills->title = $request->title;
        $skills->url = $request->url;
        $skills->category = $request->category;
        $skills->save();
        return redirect()->back()->with("success", "Skill saved successfully");
    }
    public function deleteLastRecord() {
        $clients = Skills::latest()->first();
        $clients->delete();
        return redirect()->back()->with("success","Client deleted successfully");
    }
}
