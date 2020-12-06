<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEnrolledStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('enrolled_students', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('student_id');
            $table->unsignedBigInteger('sy_id');
            $table->unsignedBigInteger('semester_id');
            $table->string('section');
            $table->string('course');
            $table->foreign('student_id')->references('id')->on('students');
            $table->foreign('semester_id')->references('id')->on('semesters');
            $table->foreign('sy_id')->references('id')->on('academic_years');
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
        Schema::dropIfExists('enrolled_students');
    }
}
