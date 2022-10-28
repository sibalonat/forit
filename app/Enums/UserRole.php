<?php

namespace App\Enums;

enum UserRole: string
{
    case employee = 'employee';
    case admin = 'admin';
    case SuperAdmin = 'Super-Admin';
}
