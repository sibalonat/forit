<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf_token" content="{{ csrf_token() }}">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

    <!-- Scripts -->
    @routes
    @vite('resources/js/app.js')
    @inertiaHead
    {{-- <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script> --}}
    {{-- <script src="https://raw.githack.com/AR-js-org/AR.js/3.4.0/aframe/build/aframe-ar-nft.js"></script> --}}
    {{-- <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
    <script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script> --}}

    {{-- <script defer src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <script defer src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js" defer></script> --}}


</head>

<body class="font-sans antialiased">

    @inertia

</body>

</html>
