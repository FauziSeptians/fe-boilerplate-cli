@extends('parent.Main')

@section('Content')

    <div class="container center d-flex align-items-center" id="kotak_center" >
        <div class="kotak mb-5 mt-5">
            <form method="POST" action="{{url('/thankspage')}}">
                @csrf
                <div class="judul" >
                    <H1 >ABSENSI</H1>
                </div>
                <div class="form-group mb-5 mt-5">
                    <input type="text" class="form-control" placeholder="Nama Karyawan" name="nama">
                </div>
                    <div class="button_kotak">   
                        <button type="submit" class="btn btn-primary">
                            Submit
                        </button>              
                    </div>
            </form>
        </div>
    </div>

 
@endsection