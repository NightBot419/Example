<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image_url',
        'description',
        'price',
        'category',
    ];

    public function orders()
    {
        return $this->belongsToMany(Order::class)->withTimestamps();
    }
}