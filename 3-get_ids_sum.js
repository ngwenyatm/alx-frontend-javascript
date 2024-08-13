export default function getStudentIdsSum (students){
    return students.reduce((sum, currItem) => sum + students.id, 0);
}