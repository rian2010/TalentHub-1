<?php

namespace Database\Seeders;

use App\Models\Student\Aboutme;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AboutmeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Aboutme::factory(10)->create();
    }
}
