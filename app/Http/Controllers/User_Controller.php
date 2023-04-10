<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User_konveksi;

class User_Controller extends Controller
{
    public function get($nilai){
        return view('Thankspage',[
            'nilai_value' => $nilai
        ]);
    }

    public static function getdata(Request $request){
       $data = User_konveksi::all()->pluck("Nama")->all();
    //    $data = $data["Nama"];
       $value =  $request->nama;

       if(is_null($value) == true){
        return view('Erorpage');
       }else{
            if(in_array(strtolower($value),$data)){
                return view('Thankspage',[
                    'nilai_value' => $value
                ]);
            }else{
                return view('Erorpage');
            }
        }
       }
    }
    //
