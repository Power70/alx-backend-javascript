/**
 * This function filters students based on their location.
 * @param {Array} students - An array of student objects.
 * @param {string} city - The city to filter students by.
 * @returns {Array} - An array of students located in the specified city.
 */
export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
