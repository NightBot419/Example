<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // CÀ PHÊ PHA PHIN
        Product::create([
            'name' => 'Cà phê Đen',
            'image_url' => null,
            'description' => null,
            'price' => 30000,
            'category' => 'Cà Phê Pha Phin'
        ]);
        Product::create([
            'name' => 'Cà phê Nâu',
            'image_url' => null,
            'description' => null,
            'price' => 35000,
            'category' => 'Cà Phê Pha Phin'
        ]);

        // CÀ PHÊ ĐÁ
        Product::create([
            'name' => 'Cà phê Đen đá',
            'image_url' => null,
            'description' => null,
            'price' => 30000,
            'category' => 'Cà Phê Đá'
        ]);
        Product::create([
            'name' => 'Cà phê Nâu đá',
            'image_url' => null,
            'description' => null,
            'price' => 35000,
            'category' => 'Cà Phê Đá'
        ]);
        Product::create([
            'name' => 'Bạc xỉu đá',
            'image_url' => null,
            'description' => null,
            'price' => 40000,
            'category' => 'Cà Phê Đá'
        ]);
        Product::create([
            'name' => 'Cà phê Kem cheese đá',
            'image_url' => null,
            'description' => null,
            'price' => 45000,
            'category' => 'Cà Phê Đá'
        ]);
        Product::create([
            'name' => 'Cà phê Cốt dừa',
            'image_url' => null,
            'description' => null,
            'price' => 40000,
            'category' => 'Cà Phê Đá'
        ]);
        Product::create([
            'name' => 'Cà phê Muối',
            'image_url' => null,
            'description' => null,
            'price' => 20000,
            'category' => 'Cà Phê Đá'
        ]);

        // CÀ PHÊ NÓNG
        Product::create([
            'name' => 'Cà phê Đen nóng',
            'image_url' => null,
            'description' => null,
            'price' => 30000,
            'category' => 'Cà Phê Nóng'
        ]);
        Product::create([
            'name' => 'Cà phê Nâu nóng',
            'image_url' => null,
            'description' => null,
            'price' => 35000,
            'category' => 'Cà Phê Nóng'
        ]);
        Product::create([
            'name' => 'Bạc xỉu nóng',
            'image_url' => null,
            'description' => null,
            'price' => 40000,
            'category' => 'Cà Phê Nóng'
        ]);
        Product::create([
            'name' => 'Cà phê Kem cheese nóng',
            'image_url' => null,
            'description' => null,
            'price' => 45000,
            'category' => 'Cà Phê Nóng'
        ]);

        // KAKAO
        Product::create([
            'name' => 'Kakao Cốt dừa',
            'image_url' => null,
            'description' => null,
            'price' => 40000,
            'category' => 'Kakao'
        ]);
        Product::create([
            'name' => 'Kakao đá',
            'image_url' => null,
            'description' => null,
            'price' => 30000,
            'category' => 'Kakao'
        ]);
        Product::create([
            'name' => 'Kakao nóng',
            'image_url' => null,
            'description' => null,
            'price' => 30000,
            'category' => 'Kakao'
        ]);
        Product::create([
            'name' => 'Kakao Quế đá',
            'image_url' => null,
            'description' => null,
            'price' => 25000,
            'category' => 'Kakao'
        ]);
        Product::create([
            'name' => 'Kakao Quế nóng',
            'image_url' => null,
            'description' => null,
            'price' => 25000,
            'category' => 'Kakao'
        ]);

        // TRÀ SỮA TRÂN CHÂU
        Product::create([
            'name' => 'Sữa tươi Trân châu đường đen (M)',
            'image_url' => null,
            'description' => null,
            'price' => 36000,
            'category' => 'Trà Sữa Trân Châu'
        ]);
        Product::create([
            'name' => 'Sữa tươi Trân châu đường đen (L)',
            'image_url' => null,
            'description' => null,
            'price' => 45000,
            'category' => 'Trà Sữa Trân Châu'
        ]);
        Product::create([
            'name' => 'Sữa tươi Trân châu trắng 3Q',
            'image_url' => null,
            'description' => null,
            'price' => 45000,
            'category' => 'Trà Sữa Trân Châu'
        ]);
        Product::create([
            'name' => 'Trà sữa Trân châu đường đen',
            'image_url' => null,
            'description' => null,
            'price' => 27000,
            'category' => 'Trà Sữa Trân Châu'
        ]);
        Product::create([
            'name' => 'Matcha sữa Trân châu đường đen',
            'image_url' => null,
            'description' => null,
            'price' => 29000,
            'category' => 'Trà Sữa Trân Châu'
        ]);
        Product::create([
            'name' => 'Trà sữa Đào Trân châu đường đen',
            'image_url' => null,
            'description' => null,
            'price' => 23000,
            'category' => 'Trà Sữa Trân Châu'
        ]);
        Product::create([
            'name' => 'Trà sữa Bacon Trân châu đường đen', // Assuming "Bacon" is a typo and should be something else
            'image_url' => null,
            'description' => null,
            'price' => 23000,
            'category' => 'Trà Sữa Trân Châu'
        ]);

        // NƯỚC ÉP HOA QUẢ
        Product::create([
            'name' => 'Nước ép Dứa',
            'image_url' => null,
            'description' => null,
            'price' => 25000,
            'category' => 'Nước Ép Hoa Quả'
        ]);
        Product::create([
            'name' => 'Nước ép Ổi',
            'image_url' => null,
            'description' => null,
            'price' => 25000,
            'category' => 'Nước Ép Hoa Quả'
        ]);
        Product::create([
            'name' => 'Nước ép Dưa hấu',
            'image_url' => null,
            'description' => null,
            'price' => 25000,
            'category' => 'Nước Ép Hoa Quả'
        ]);
        Product::create([
            'name' => 'Nước ép Táo',
            'image_url' => null,
            'description' => null,
            'price' => 30000,
            'category' => 'Nước Ép Hoa Quả'
        ]);
        Product::create([
            'name' => 'Nước ép Lê',
            'image_url' => null,
            'description' => null,
            'price' => 20000,
            'category' => 'Nước Ép Hoa Quả'
        ]);
        Product::create([
            'name' => 'Nước Cam tươi',
            'image_url' => null,
            'description' => null,
            'price' => 45000,
            'category' => 'Nước Ép Hoa Quả'
        ]);

        // SINH TỐ
        Product::create([
            'name' => 'Sinh tố Bơ',
            'image_url' => null,
            'description' => null,
            'price' => 45000,
            'category' => 'Sinh Tố'
        ]);
        Product::create([
            'name' => 'Sinh tố Bơ Mãng cầu',
            'image_url' => null,
            'description' => null,
            'price' => 45000,
            'category' => 'Sinh Tố'
        ]);
        Product::create([
            'name' => 'Sinh tố Mãng cầu',
            'image_url' => null,
            'description' => null,
            'price' => 45000,
            'category' => 'Sinh Tố'
        ]);

        // TRÀ HOA QUẢ
        Product::create([
            'name' => 'Trà Đào Cam sả',
            'image_url' => null,
            'description' => null,
            'price' => 30000,
            'category' => 'Trà Hoa Quả'
        ]);
        Product::create([
            'name' => 'Trà Ổi hồng TEAPOTT',
            'image_url' => null,
            'description' => null,
            'price' => 30000,
            'category' => 'Trà Hoa Quả'
        ]);
        Product::create([
            'name' => 'Trà Ổi hồng TEAPOTT Kam cheese',
            'image_url' => null,
            'description' => null,
            'price' => 45000,
            'category' => 'Trà Hoa Quả'
        ]);
        Product::create([
            'name' => 'Trà Chanh Đào hạt lựu',
            'image_url' => null,
            'description' => null,
            'price' => 30000,
            'category' => 'Trà Hoa Quả'
        ]);
        Product::create([
            'name' => 'Trà Chanh Xoài',
            'image_url' => null,
            'description' => null,
            'price' => 20000,
            'category' => 'Trà Hoa Quả'
        ]);
        Product::create([
            'name' => 'Trà Chanh truyền thống',
            'image_url' => null,
            'description' => null,
            'price' => 20000,
            'category' => 'Trà Hoa Quả'
        ]);
        Product::create([
            'name' => 'Trà kim quất',
            'image_url' => null,
            'description' => null,
            'price' => 20000,
            'category' => 'Trà Hoa Quả'
        ]);
        Product::create([
            'name' => 'Trà kim quất Nha đam',
            'image_url' => null,
            'description' => null,
            'price' => 20000,
            'category' => 'Trà Hoa Quả'
        ]);
        Product::create([
            'name' => 'Trà li đào Hạt chia',
            'image_url' => null,
            'description' => null,
            'price' => 25000,
            'category' => 'Trà Hoa Quả'
        ]);

        // ĐỒ ĂN VẶT
        Product::create([
            'name' => 'Sandwich Pho mai Dăm bông',
            'image_url' => null,
            'description' => null,
            'price' => 18000,
            'category' => 'Đồ Ăn Vặt'
        ]);
        Product::create([
            'name' => 'Hạt hướng dương nguyên vị',
            'image_url' => null,
            'description' => null,
            'price' => 10000,
            'category' => 'Đồ Ăn Vặt'
        ]);
        Product::create([
            'name' => 'Hạt hướng dương vị Dứa',
            'image_url' => null,
            'description' => null,
            'price' => 10000,
            'category' => 'Đồ Ăn Vặt'
        ]);
        Product::create([
            'name' => 'Bánh mì ngọt', // Added as it was extracted from OCR "Bánh mì ngọt: 15k"
            'image_url' => null,
            'description' => null,
            'price' => 15000,
            'category' => 'Đồ Ăn Vặt'
        ]);

        // KEM LY MERINO
        Product::create([
            'name' => 'Kem ly Merino Sôcôla',
            'image_url' => null,
            'description' => null,
            'price' => 12000,
            'category' => 'Kem Ly Merino'
        ]);
        Product::create([
            'name' => 'Kem ly Merino Dứa',
            'image_url' => null,
            'description' => null,
            'price' => 12000,
            'category' => 'Kem Ly Merino'
        ]);
        Product::create([
            'name' => 'Kem ly Merino Vải',
            'image_url' => null,
            'description' => null,
            'price' => 12000,
            'category' => 'Kem Ly Merino'
        ]);

        // TOPPING TRÀ
        Product::create([
            'name' => 'Trân châu đường đen',
            'image_url' => null,
            'description' => null,
            'price' => 8000,
            'category' => 'Topping Trà'
        ]);
        Product::create([
            'name' => 'Trân châu trắng 3Q',
            'image_url' => null,
            'description' => null,
            'price' => 10000,
            'category' => 'Topping Trà'
        ]);
        Product::create([
            'name' => 'Hồng trà Kem cheese',
            'image_url' => null,
            'description' => null,
            'price' => 27000,
            'category' => 'Topping Trà'
        ]);
        Product::create([
            'name' => 'Hồng trà lau latte Trân châu trắng 3Q',
            'image_url' => null,
            'description' => null,
            'price' => 30000,
            'category' => 'Topping Trà'
        ]);
    }
}
