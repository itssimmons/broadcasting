<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller;
use App\Models\User;

class UserController extends Controller
{
    public function find($id)
	{
        $user = User::find($id);         

        return response()->json([
            'success' => true,
            'data' => $user
        ]);
	}
}