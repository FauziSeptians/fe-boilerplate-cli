@extends('parent.Main')

@section('Content')

    <div class="container center d-flex align-items-center" id="kotak_thanks" >
        <div class="kotak mb-5 mt-5">
            <form>
                <div class="judul" >
                    <H1>EROR !!!</H1>
                </div>
                <div class="gambar">
                    <img src="close.png" alt="">
                </div>
                <h5>
                    Harap memasukan kembali sesuai dengan nama lengkap
                </h5>
                <div class="button_kotak" href="{{url('/optionpage')}}">                 
                    <a href="/login" class="btn btn-primary">Back</a>
                </div>
            </form>
        </div>
    </div>
    
@endsection