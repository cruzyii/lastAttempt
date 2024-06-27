<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'description' => $this->faker->paragraph,
            'price' => $this->faker->randomFloat(2, 10, 100),
            'gender' => $this->faker->randomElement(['Male', 'Female', 'Unisex']),
            'category' => $this->faker->randomElement(['Clothing', 'Accessories', 'Footwear']),
            'image' => sprintf('https://picsum.photos/640/480?random=%d', $this->faker->numberBetween(1, 1000)),
            'stock' => $this->faker->numberBetween(0, 100),
            'color' => $this->faker->safeColorName,
            'size' => $this->faker->randomElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
            'availability' => $this->faker->boolean,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
