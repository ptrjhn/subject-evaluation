<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsGradesViewTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
            CREATE OR REPLACE VIEW vw_students_grades
            AS
            SELECT
                b.student_id,
                c.student_id as `id_number`,
                a.curriculum_id,
                a.curriculum_year,
                a.course_id,
                a.course_code,
                a.course_description,
                a.subject_id,
                a.subject_code,
                a.subject_description,
                a.units,
                a.prerequisite,
                a.lab as lab,
                a.lec as lec,
                a.year_level,
                a.semester,
                b.grade,
                a.created_at,
                a.updated_at,
                a.deleted_at
            FROM
                vw_courses_subjects a
            LEFT JOIN (SELECT student_id,course_id,subject_id,subject_description,units,curriculum_year,
                        grade FROM student_subjects WHERE grade NOT IN ('5.00','INC', '4.00','DRP')) b
                ON a.subject_description = b.subject_description
            LEFT JOIN students c
                ON b.student_id = c.id
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students_grades_view');
    }
}
