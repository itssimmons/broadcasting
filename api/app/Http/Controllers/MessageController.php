<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller;
use App\Models\Message;

class MessageController extends Controller
{
    public function all()
    {
        $messages = Message::query()->orderBy('createdAt', 'asc')->get();

        return response()->json([
            'success' => true,
            'data' => $messages
        ]);
    }

    public function store(Request $request)
    {
        $message = new Message();
        $message->message = $request->message;
        $message->emisorId = $request->emisorId;
        $message->receiverId = $request->receiverId;
        $message->type = $request->type;
        $message->createdAt = Carbon::now();
        $message->updatedAt = Carbon::now();
        $message->save();

        return response()->json([
            'success' => true,
            'data' => $message
        ]);
    }
}
