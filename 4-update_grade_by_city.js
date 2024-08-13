export default function updateStudentGradeByCity(studentData, city, newGrades) {
  if (!Array.isArray(studentData) || !Array.isArray(newGrades)) {
    throw new Error('Invalid input: studentData and newGrades must be arrays');
  }

  if (newGrades.length === 0) {
    return studentData.filter(student => student.location === city);
  }

  const gradeMap = new Map(newGrades.map(grade => [grade.studentId, grade]));

  return studentData
    .filter(student => student.location === city)
    .map(student => ({
      ...student,
      grade: (gradeMap.get(student.id) || { grade: 'N/A' }).grade,
    }));
}
