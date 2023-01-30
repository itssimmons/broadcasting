<?php

namespace App\Http\Controllers;

use App\Models\User;
use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Lumen\Routing\Controller;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'logout']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @param  Request  $request
     * @return Response
     */
    public function login(Request $request)
    {
        $this->validate($request, [
            'phone' => 'required|string',
        ]);

        $credentials = $request->only(['phone']);

        return $this->loginWithToken($credentials);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function loginWithToken($credentials)
    {
        $user = User::where('phone', $credentials['phone'])->first();

        if (! $user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        auth()->setUser($user);

        $key = env('JWT_SECRET');
        $exp = (time() + (24 * 60 * 60)) * 1000; // 1 day from now in ms
        $payload = ["id" => $user->id, "exp" => $exp];

        $token = JWT::encode($payload, $key, 'HS256');

        if (! $token) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        return response()->json([
            'user' => auth()->user(),
            'accessToken' => $token,
            'tokenType' => 'bearer',
            'expiresIn' => $exp
        ]);
    }
}
