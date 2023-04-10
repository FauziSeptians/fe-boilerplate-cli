@extends('parent.Main')


@section('Content')

    <div class="container center d-flex align-items-center" id="kotak_option" >
        <div class="konten">
                <div class="kotak_option" onclick="window.location='{{url('/thankspage/karyawan')}}'">
                    <div class="konten_karyawan">
                        <img src="employee.png" alt="">
                        <p>
                            KARYAWAN
                        </p>
                    </div>
                </div>
                <div class="admin">
                    <div class="konten_admin">
                        <img src="boss.png" alt="">
                        <p>
                            ADMIN
                        </p>
                    </div>
                        
                </div>
        </div>
        {{-- <button class="btn btn-primary" href="{{url('/thankspage')}}">
            Submit
        </button> --}}
    </div>
    
@endsection