/**
 * This function iterates through an array of student objects
 * and returns an array of student IDs.
 */
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}
