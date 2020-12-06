<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInstructorSubjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instructor_subjects', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('instructor_id');
            $table->unsignedBigInteger('sy_id');
            $table->unsignedBigInteger('semester_id');
            $table->string('subject_code', 30);
            $table->string('subject_description');
            $table->string('units');
            $table->foreign('semester_id')->references('id')->on('semesters');
            $table->foreign('sy_id')->references('id')->on('academic_years');
            $table->foreign('instructor_id')->references('id')->on('instructors')->cascadeOnDelete()->cascadeOnUpdate();
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
        Schema::dropIfExists('instructor_subjects');
    }
}
