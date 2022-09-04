<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- window.Laravel = {csrfToken: '{{ csrf_token() }}'} --}}
    {{-- <meta name="csrf-token" content="{{ csrf_token() }}"> --}}
    <meta name="csrf_token" content="{{ csrf_token() }}">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

    <!-- Scripts -->
    @routes
    @vite('resources/js/app.js')
    @inertiaHead
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    {{-- http://forit.test/augmentation/create --}}

    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js">
    // <script src='./src/sdk/ar-frame/aframe-ar-nft.js'></script>
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
