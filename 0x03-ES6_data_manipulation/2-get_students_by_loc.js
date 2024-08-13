export default function getStudentsByLocation(list, city) {
  const result = list.filter((list) => list.location === city);

  return result;
}
