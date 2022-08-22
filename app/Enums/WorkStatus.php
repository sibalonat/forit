<?php

namespace App\Enums;

enum WorkStatus: string
{
    case Free = 'Free';
    case Taken = 'Taken';
    case Working = 'Working';
    case Finished = 'Finished';
}
