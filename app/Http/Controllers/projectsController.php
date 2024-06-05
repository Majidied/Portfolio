<?php

namespace App\Http\Controllers;

use App\Models\projects;
use Illuminate\Http\Request;

class projectsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getProjects()
    {
        $projects = projects::all();
        return response()->json(['projects' => $projects]);
    }

    public function addproject(Request $request)
    {
        $project = new projects();
        $project->title = $request->title;
        $project->description = $request->description;
        $project->image = $request->image;
        $project->githubLink = $request->githubLink;
        $project->save();
        return redirect()->back()->with('success', 'Project added successfully!');
    }
}
