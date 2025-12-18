<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $products = Product::all();

        if ($users->isEmpty() || $products->isEmpty()) {
            $this->command->info('Cannot seed orders. Please seed users and products first.');
            return;
        }

        foreach ($users as $user) {
            // Create 1 to 3 orders for each user
            for ($i = 0; $i < rand(1, 3); $i++) {
                $order = Order::create([
                    'user_id' => $user->id,
                    'order_date' => now()->subDays(rand(0, 30)),
                    'shipping_address' => $user->address,
                    'recipient_phone' => $user->phone_number,
                    'payment_method' => ['cod', 'card'][rand(0, 1)],
                    'status' => ['pending', 'processing', 'completed', 'cancelled'][rand(0, 3)],
                    'notes' => 'Giao hàng nhanh giúp mình nhé.',
                ]);

                // Attach 1 to 4 random products to the order
                $orderProducts = $products->random(rand(1, 4));
                foreach ($orderProducts as $product) {
                    $order->products()->attach($product->id, ['quantity' => rand(1, 3)]);
                }
            }
        }
    }
}