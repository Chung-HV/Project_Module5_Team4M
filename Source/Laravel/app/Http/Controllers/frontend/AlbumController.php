<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Album;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class AlbumController extends Controller
{
    public function create(Request $request, $idUser)
    {
        try {

            if ($request->hasFile('filePath')) {

                foreach ($request->filePath as $file) {

                    $name = time() . '.' . $file->getClientOriginalExtension();

                    $file->storeAs('public/images/albumUsers', $name);

                        Album::create([
                          'user_id' => $idUser,// lay user id vao day,
                          'filePath' => "images/users/" .$name // luu duong dan anh vao db
                        ]);

                }
            }

            return response()->json();

        } catch (Exception $e) {
            return response()->json($e->getMessage());
        }
    }
}
