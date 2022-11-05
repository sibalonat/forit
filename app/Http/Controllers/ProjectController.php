<?php

namespace App\Http\Controllers;

use App\Http\Requests\FolderStoreRequest;
use Inertia\Inertia;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ProjectStoreRequest;
use App\Models\Obj;

use function PHPSTORM_META\map;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Project/IndexProject');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Project/CreateProject');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProjectStoreRequest $request)
    {
        $request->validated();
        $project = Project::create($request->all());
        return Redirect::route('project.show', $project->id);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // public function folderStore(Request $request, Project $project)
    public function folderStore(FolderStoreRequest $request, Project $project)
    {
        $request->validated();

        $object = Obj::whereUuid(
            $request->get('uuid', Obj::forCurrentProject($project->id)->whereNull('parent_id')->first()->uuid)
        )->firstOrFail();

        $obj = $project->objects()->make(['parent_id' => $object->id]);
        $obj->objectable()->associate($project->folders()->create($request->all()));
        $obj->save();
        $obj = $object->fresh();

        return Redirect::route('project.show', [$project->id, 'uuid'=>$obj->uuid]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project, Request $request)
    {
        $object = Obj::with('children.objectable', 'ancestorsAndSelf.objectable')->forCurrentProject($project->id)->whereUuid(
            $request->get('uuid', Obj::forCurrentProject($project->id)->whereNull('parent_id')->first()->uuid)
        )->firstOrFail();

        return Inertia::render('Project/ShowProject', [
            'objects' => $object,
            'ancestors' => $object->ancestorsAndSelf()->with('objectable')->breadthFirst()->get(),
            'project' => $project
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        return Inertia::render('Project/CreateProject', [
            'project' => $project
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
