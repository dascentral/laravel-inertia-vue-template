<?php

namespace App\Http\Controllers;

use App\ViewModels\HomeViewModel;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function __invoke(Request $request)
    {
        $viewModel = new HomeViewModel();

        return inertia('Home', $viewModel);
    }
}
