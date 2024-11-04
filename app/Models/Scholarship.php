<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Scholarship extends Model
{
    use HasFactory;

    protected $table = 'scholarship'; // Ensure this matches your actual table name
    protected $fillable = [
        'provider_id',
        'course_id',
        'requirements_id',
        'scholarship_status',
        'scholarship_contact',
    ];
}
