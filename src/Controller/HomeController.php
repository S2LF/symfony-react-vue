<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/home", name="app_home")
     */
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

    // Create a route with json response
    /**
     * @Route("/home/data/ajax", name="app_home_data")
    */
    public function index_data_json(): Response
    {
        $data = [
            ['id' => 1, 'name' => 'Syl20'],
            ['id' => 2, 'name' => 'Jérôme'],
            ['id' => 3, 'name' => 'Virgile']
        ];

        return $this->json($data, 200);
    }
}
