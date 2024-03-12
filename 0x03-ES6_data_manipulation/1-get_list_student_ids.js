const getListStudentIds = (listStudents) => {
  let id = [];
  if (!(id instanceof Array)) {
    return id;
  }
  id = listStudents.map((student) => student.id);
  return id;
};

export default getListStudentIds;
