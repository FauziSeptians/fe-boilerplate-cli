<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class User_konveksi extends Model
{

    protected $fillable = [
        'Nama',
    ];

    use HasFactory;
}
