<?php

namespace App\Models;

use App\Models\User;
use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use Uuids;

    protected $with = ['emisor', 'receiver'];

    public $timestamps = false;

    public function emisor()
    {
        return $this->hasOne(User::class, 'id', 'emisorId');
    }

    public function receiver()
    {
        return $this->hasOne(User::class, 'id', 'receiverId');
    }
}
