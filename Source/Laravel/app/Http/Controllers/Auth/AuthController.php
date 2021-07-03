<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Laravel\Sanctum\Sanctum;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), Response::HTTP_BAD_REQUEST);
        }

        $user = User::create(array_merge(
            $validator->validated(),
            ['password' => bcrypt($request->password)]
        ));

        $token = $user->createToken($request->email)->plainTextToken;

        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user,
            'access' => [
                'token' => $token,
                'token_type' => 'bearer',
            ],
        ], Response::HTTP_CREATED);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->only('email', 'password'), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $user = User::where('email', $request->email)->first();
        $user->accounts ;

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['error' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        $token = $user->createToken($request->email)->plainTextToken;
        Storage::set('id', $user->id);
        return response()->json([
            'message' => 'User successfully logged in',
            'user' => $user,
            'access' => [
                'token' => $token,
                'token_type' => 'bearer',
            ],
        ]);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return response()->json([
            'message' => 'User successfully logged out'
        ]);
    }

    public function profile(Request $request)
    {
        return response()->json(auth()->user());
    }

    public function update(Request $request, $idUser){

        try{

            $user = User::find($idUser);
            $user->fill($request->all());
            if ($request->hasFile('avatar')) {

                Storage::delete('public/' . $user->avatar);
                $newAvatarName = time().'.'.$request->avatar->getClientOriginalExtension();
                $request->avatar->storeAs('public/images/users', $newAvatarName);
                $user->avatar = "images/users/" . $newAvatarName;
            }
            $user->save();


            return response()->json($request,['message' => 'success']);
        }catch(Exception $e){
            return response()->json(['message' => 'error']);
        }
    }


}
