import { useState } from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Content from "./components/Content.jsx";

function App() {
  const [students, setStudents] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [form, setForm] = useState({
    id: "",
    nom: "",
    note: "",
  });
  const [editId, setEditId] = useState(null);

  const resetForm = () => {
    setForm({ id: "", nom: "", note: "" });
    setEditId(null);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editId !== null) {
      setStudents((prev) =>
        prev.map((student) =>
          student.id === editId ? { ...student, ...form } : student
        )
      );
    } else {
      const newStudent = {
        ...form,
        id: nextId,
      };

      setStudents((prev) => [...prev, newStudent]);
      setNextId((prev) => prev + 1);
    }

    resetForm();
  };

  const handleDisplay = (student) => {
    setForm({ ...student });
    setEditId(student.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = () => {
    if (editId === null) return;

    setStudents((prev) =>
      prev.filter((student) => student.id !== editId)
    );
    resetForm();
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Header studentCount={students.length} />

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:flex-row lg:px-8">
        <Sidebar studentCount={students.length} />
        <Content
          students={students}
          nextId={nextId}
          form={form}
          editId={editId}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onDisplay={handleDisplay}
          onDelete={handleDelete}
          onCancel={resetForm}
        />
      </div>
    </div>
  );
}

export default App;
