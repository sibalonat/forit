<?php

namespace App\Models\Traits;

/**
 * this will be the trait
 */
trait RelatesToProject
{
    public function scopeForCurrentProject($query, $project)
    {
        $query->where('project_id', $project);
    }
}

