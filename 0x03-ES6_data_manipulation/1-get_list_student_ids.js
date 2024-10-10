/** This function iterate through an array of student and return only student ID */
export default function getListStudentIds(getListStudents){
    const students = getListStudents();

    if (!Array.isArray(students)){
        return [];
    }
    return students.map(student => student.id);
  
}