/** This function iterate through an array of student and return only student ID */
export default function getListStudentIds(students){

    if (!Array.isArray(students)){
        return [];
    }
    return students.map(student => student.id);
  
}