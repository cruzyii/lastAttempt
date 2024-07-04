<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Color;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $colors = [
            ['name' => 'Balts'],
            ['name' => 'Brūns'],
            ['name' => 'Dzeltens'],
            ['name' => 'Melns'],
            ['name' => 'Oranžs'],
            ['name' => 'Rozā'],
            ['name' => 'Sarkans'],
            ['name' => 'Violets'],
            ['name' => 'Zaļš'],
            ['name' => 'Zils'],
        ];
        foreach ($colors as $color) {
            Color::create($color);
        }
    }
}
