<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentSubjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_subjects', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('student_id');
            $table->unsignedBigInteger('course_id');
            $table->unsignedBigInteger('subject_id');
            $table->string('subject_code', 20);
            $table->string('subject_description');
            $table->string('units', 10);
            $table->string('lab', 10)->nullable();
            $table->string('lec', 10)->nullable();
            $table->string('semester', 20);
            $table->string('school_year', 20);
            $table->string('curriculum_year', 20);
            $table->string('section', 20)->nullable();
            $table->string('year_level', 20);
            $table->string('grade', 5)->nullable();
            $table->foreign('student_id')->references('id')->on('students');
            $table->foreign('course_id')->references('id')->on('courses');
            $table->foreign('subject_id')->references('id')->on('subjects')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('student_subjects');
    }
}
