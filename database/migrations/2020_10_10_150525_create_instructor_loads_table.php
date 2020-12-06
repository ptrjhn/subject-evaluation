<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInstructorLoadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instructor_loads', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('instructor_id');
            $table->foreign('instructor_id')->references('id')->on('instructors')->cascadeOnDelete();
            $table->unsignedBigInteger('sy_id');
            $table->unsignedBigInteger('semester_id');
            $table->string('course_code');
            $table->string('course_description');
            $table->string('section');
            $table->foreign('sy_id')->references('id')->on('academic_years');
            $table->foreign('semester_id')->references('id')->on('semesters');
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
        Schema::dropIfExists('instructor_loads');
    }
}
