import React, { useState, useEffect, useCallback, useMemo } from "react";
interface IStudent {
  id: number;
  name: string;
}
function Student() {
  const [students, setStudents] = useState<IStudent[]>([]);
  const [newStudentName, setNewStudentName] = useState("");

  // Tạo một ID mới cho sinh viên
  const generateId = useCallback(() => {
    return students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1;
  }, [students]);

  // Hàm thêm sinh viên
  const addStudent = useCallback(() => {
    if (newStudentName.trim()) {
      setStudents((prev) => [
        ...prev,
        { id: generateId(), name: newStudentName.trim() },
      ]);
      setNewStudentName("");
    }
  }, [newStudentName, generateId]);

  // Hàm xóa sinh viên
  const removeStudent = useCallback((id: number) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  }, []);

  // Tính toán số lượng sinh viên
  const studentCount = useMemo(() => students.length, [students]);

  // useEffect để log ra danh sách sinh viên mỗi khi cập nhật
  useEffect(() => {
    console.log("Danh sách sinh viên hiện tại:", students);
  }, [students]);

  return (
    <div>
      <h2>Quản lý danh sách sinh viên</h2>
      <div>
        <input
          type="text"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
          placeholder="Nhập tên sinh viên"
        />
        <button onClick={addStudent}>Thêm sinh viên</button>
      </div>
      <h3>Danh sách sinh viên ({studentCount}):</h3>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name}{" "}
            <button onClick={() => removeStudent(student.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Student;