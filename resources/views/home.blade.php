@extends('layouts.app')

@push('html-class') has-spinner-active has-aside-left has-aside-mobile-transition has-navbar-fixed-top has-aside-expanded @endpush

@push('head-scripts')
<script src="{{ mix('js/app.js') }}" defer></script>
<!-- <script src="/js/bootstrap.js"></script> -->
@endpush
