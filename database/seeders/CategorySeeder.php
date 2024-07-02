<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'T-Krekli'],
            ['name' => 'Bikses'],
            ['name' => 'Džinsi'],
            ['name' => 'Jakas'],
            ['name' => 'Krekli'],
            ['name' => 'Apakšveļa'],
            ['name' => 'Džemperi'],
            ['name' => 'Mēteļi'],
            ['name' => 'Apavi'],
            ['name' => 'Sports'],
            ['name' => 'Aksesuāri'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
