function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);

  return studentsInCity.map((student) => {
    const gradeUpdate = newGrades.filter((grade) => grade.studentId === student.id);

    if (gradeUpdate.length > 0) {
      return {
        ...student,
        grade: gradeUpdate[0].grade,
      };
    }

    return {
      ...student,
      grade: 'N/A',
    };
  });
}

export default updateStudentGradeByCity;
