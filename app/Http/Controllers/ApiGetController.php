<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class ApiGetController extends BaseController
{
    private $host;
    public function __construct()
    {
        $this->host=[
            // This is effectively equal to: "https://username:password!#$?*abc@foo.com:9200/"
            [
                'host' =>  env('ELASTICSEARCH_HOST'),
                'port' =>  env('ELASTICSEARCH_PORT'),
                'scheme' =>  env('ELASTICSEARCH_SCHEME'),
                'user' => env('ELASTICSEARCH_USER'),
                'pass' => env('ELASTICSEARCH_PASS')
            ]
        ];
    }

    public function multiple(Request $request,$keywords="",$page=0,$limit=10){

        $multi=[
            "common"=>[
                "prd_nm"=>[
                    "query"=>$keywords,
                    "cutoff_frequency" => 1.0
                ]
            ],
        ];

        if ((preg_match('/case /',$keywords)) || (preg_match('/ case /',$keywords))
            || (preg_match('/casing /',$keywords)) || (preg_match('/ casing /',$keywords))
            || (preg_match('/tempered glass /',$keywords)) || (preg_match('/ tempered glass /',$keywords))
            || (preg_match('/baterai /',$keywords)) || (preg_match('/ baterai /',$keywords))
            || (preg_match('/anti gores /',$keywords)) || (preg_match('/ anti gores /',$keywords))
            || (preg_match('/screen protector /',$keywords)) || (preg_match('/ screen protector /',$keywords))
            || (preg_match('/charger /',$keywords)) || (preg_match('/ charger /',$keywords))
            || (preg_match('/sparepart /',$keywords)) || (preg_match('/ sparepart /',$keywords))
            || (preg_match('/kabel data /',$keywords)) || (preg_match('/ kabel data /',$keywords))
            || (preg_match('/powerbank /',$keywords)) || (preg_match('/ powerbank /',$keywords))
            || (preg_match('/stand handphone /',$keywords)) || (preg_match('/ stand handphone /',$keywords))
            || (preg_match('/tongsis /',$keywords)) || (preg_match('/ tongsis /',$keywords))
            || (preg_match('/lensa handphone /',$keywords)) || (preg_match('/ lensa handphone /',$keywords))

        ){
            $hasil=[
                'must' =>$multi,
            ];
        }else{
            $hasil=[
                'must' =>$multi,
                'must_not'=>[
                    "common"=>[
                        "mctgr_nm"=>[
                            "query"=>"Aksesoris",
                            "cutoff_frequency"=> 1.0
                        ]
                    ]
                ]
            ];
        }

//        print_r($hasil);die();

        $params = [
            'index' => 'oracle-prod',
            'from' => $page,
            'size' =>$limit,
            'body' => [
                'sort' => [
                    'pop_score' => [
                        'order' => 'desc'
                    ]
                ],
                'min_score'=>1.0,
                'query' => [
                    'bool' => $hasil
                ]
            ]
        ];


        $client = \Elasticsearch\ClientBuilder::create()           // Instantiate a new ClientBuilder
        ->setHosts($this->host)      // Set the hosts
        ->build();              // Build the client object

        $response = $client->search($params);
        return $response;
    }

    public function Mctgr(Request $request,$keywords="",$page=0,$limit=10){

        $params = [
            'index' => 'oracle-prod',
            'from' => $page,
            'size' =>$limit,
            'body' => [
                'query' => [
                    'bool' => [
                        'must' => [
                            "common"=>[
                                "prd_nm"=>[
                                    "query"=> $keywords,
                                    "cutoff_frequency"=> 0.0001
                                ]
                            ]
                        ]
                    ]
                ],
                'aggs' =>[
                    "group_by_state"=> [
                        "terms"=> [
                            "field"=> "mctgr_nm.keyword"
                        ]
                    ]
                ]
            ]
        ];


        $client = \Elasticsearch\ClientBuilder::create()           // Instantiate a new ClientBuilder
        ->setHosts($this->host)      // Set the hosts
        ->build();              // Build the client object

        $response = $client->search($params);
        return $response;
    }

    public function searchByMctgr(Request $request,$prdnm="",$mctgr="",$page=0,$limit=10){

        $params = [
            'index' => 'oracle-prod',
            'from' => $page,
            'size' =>$limit,
            'body' => [
                'query' => [
                    'bool' => [
                        'must' => [
                            [
                                "common"=>[
                                    "prd_nm"=>[
                                        "query"=> $prdnm,
                                        "cutoff_frequency"=> 1.0
                                    ]
                                ]
                            ],
                            [
                                "common"=>[
                                    "mctgr_nm"=>[
                                        "query"=> $mctgr,
                                        "cutoff_frequency"=> 1.0
                                    ]
                                ]
                            ]
                        ]
                    ]
                ],
                'aggs' =>[
                    "max_price"=> [
                        "max"=> [
                            "field"=> "sel_prc"
                        ]
                    ],
                    "min_price"=> [
                        "min"=> [
                            "field"=> "sel_prc"
                        ]
                    ]
                ],
                'sort' => [
                    'pop_score' => [
                        'order' => 'desc'
                    ]
                ]
            ]
        ];


        $client = \Elasticsearch\ClientBuilder::create()           // Instantiate a new ClientBuilder
        ->setHosts($this->host)      // Set the hosts
        ->build();              // Build the client object

        $response = $client->search($params);
        return $response;
    }

    public function Sctgr(Request $request,$mctgr="",$prdnm="",$page=0,$limit=10){

        $params = [
            'index' => 'oracle-prod',
            'from' => $page,
            'size' =>$limit,
            'body' => [
                'query' => [
                    'bool' => [
                        'must' =>[
                            [
                                "common"=>[
                                    "mctgr_nm"=>[
                                        "query"=> $mctgr,
                                        "cutoff_frequency"=> 1.0
                                    ]
                                ]
                            ],
                            [
                                "common"=>[
                                    "prd_nm"=>[
                                        "query"=> $prdnm,
                                        "cutoff_frequency"=> 1.0
                                    ]
                                ]
                            ]
                        ]
                    ]
                ],
                'aggs' =>[
                    "group_by_state"=> [
                        "terms"=> [
                            "field"=> "sctgr_nm.keyword"
                        ]
                    ]
                ]
            ]
        ];


        $client = \Elasticsearch\ClientBuilder::create()           // Instantiate a new ClientBuilder
        ->setHosts($this->host)      // Set the hosts
        ->build();              // Build the client object

        $response = $client->search($params);
        return $response;
    }

    public function SearchBySctgr(Request $request,$prdnm="",$sctgr="",$page=0,$limit=10){

        $params = [
            'index' => 'oracle-prod',
            'from' => $page,
            'size' =>$limit,
            'body' => [
                'query' => [
                    'bool' => [
                        'must' =>[
                            [
                                "common"=>[
                                    "prd_nm"=>[
                                        "query"=> $prdnm,
                                        "cutoff_frequency"=> 1.0
                                    ]
                                ]
                            ],
                            [
                                "common"=>[
                                    "sctgr_nm"=>[
                                        "query"=> $sctgr,
                                        "cutoff_frequency"=> 1.0
                                    ]
                                ]
                            ]
                        ]
                    ]
                ],
                'aggs' =>[
                    "max_price"=> [
                        "max"=> [
                            "field"=> "sel_prc"
                        ]
                    ],
                    "min_price"=> [
                        "min"=> [
                            "field"=> "sel_prc"
                        ]
                    ]
                ],
                'sort' => [
                    'pop_score' => [
                        'order' => 'desc'
                    ]
                ]
            ]
        ];


        $client = \Elasticsearch\ClientBuilder::create()           // Instantiate a new ClientBuilder
        ->setHosts($this->host)      // Set the hosts
        ->build();              // Build the client object

        $response = $client->search($params);
        return $response;
    }
}
