<?php

use App\Course;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::insert("INSERT INTO `courses` (`id`, `course_code`, `description`, `deleted_at`, `created_at`, `updated_at`) VALUES
              (1, 'BSIT', 'Bachelor of Science in Information Technology', NULL, '2020-10-07 13:15:39', '2020-10-10 12:38:45'),
              (2, 'BSCE', 'Bachelor of Science in Civil Engineering', NULL, '2020-10-07 13:15:39', '2020-10-07 13:15:39'),
              (3, 'BSEE', 'Bachelor of Science in Electrical Engineering', NULL, '2020-10-07 13:15:40', '2020-10-07 13:15:40'),
              (4, 'BSArch', 'Bachelor of Science in Architecture', NULL, '2020-10-07 13:15:40', '2020-10-07 13:15:40'),
              (5, 'BSINDTECH', 'Bachelor of Science in Industrial Technology Major in Food', NULL, '2020-10-08 11:07:28', '2020-10-10 12:30:20'),
              (6, 'BSINDTECH', 'Bachelor of Science in Industrial Technology Major in Garments', NULL, '2020-10-08 11:08:09', '2020-10-08 11:08:09'),
              (7, 'BSINDTECH', 'Bachelor of Science in Industrial Technology Major in Drating', NULL, '2020-10-10 12:29:16', '2020-10-10 12:29:16'),
              (8, 'BSIT', 'Bachelor of Science in Industrial Technology', NULL, '2020-10-10 12:29:55', '2020-10-10 12:38:19');");
  }
}
