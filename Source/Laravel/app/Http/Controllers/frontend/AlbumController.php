<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Album;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AlbumController extends Controller
{
    public function create(Request $request, $idUser)
    {
        try {
            foreach ($request->files as $key => $file) {
                foreach ($file as $key => $value) {
                    $name = time() . $key . '.' . $value->getClientOriginalExtension();
                    Storage::putFileAs(
                        'public/images/albumUsers', $value, $name
                    );
                    Album::create([
                        'user_id' => $idUser, // lay user id vao day,
                        'filePath' => "images/albumUsers/" . $name // luu duong dan anh vao db
                    ]);
                }
            }
            // $album = Album::all();

            return response()->json();
        } catch (Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    public function getAlbumById($idUser){
        try
        {
            $album = Album::where('user_id','=',$idUser)->get();
            $albumFilePath =  [];
            foreach($album as $data){

            array_push($albumFilePath,$data->filePath);
            }

            return response()->json($albumFilePath);
        }catch(Exception $e)
        {
            return response()->json($e->getMessage());
        }
    }
}
