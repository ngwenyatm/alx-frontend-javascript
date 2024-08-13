export default function getStudentsByLocation(list, city) {
  const result = list.filter((city) => list.location === city);

  return result;
}
