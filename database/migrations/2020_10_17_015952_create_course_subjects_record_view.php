<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCourseSubjectsRecordView extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
             CREATE OR REPLACE VIEW vw_courses_subjects
            AS
            SELECT
                course_subjects.id,
                curriculum_id,
                curriculums.curriculum_year,
                courses.course_code,
                courses.description as course_description,
                course_subjects.course_id,
                course_subjects.subject_id,
                subjects.code as subject_code,
                subjects.description as subject_description,
                subjects.unit as units,
                course_subjects.prerequisite,
                subjects.lab as lab,
                subjects.lec as lec,
                course_subjects.year_level,
                course_subjects.semester,
                course_subjects.created_at,
                course_subjects.updated_at,
                course_subjects.deleted_at
            FROM
                course_subjects
            LEFT JOIN courses
                ON course_subjects.course_id = courses.id
            LEFT JOIN subjects
                ON course_subjects.subject_id = subjects.id
            LEFT JOIN curriculums
                ON course_subjects.curriculum_id = curriculums.id
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('course_subjects_record_view');
    }
}
