import { useState } from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer"

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
  const bestNote = students.reduce((acc,s)=>{
    return Number(s.note) > acc ? Number(s.note) : acc;
  },0)
  const nAdmis = students.reduce((acc,s)=>{
    return Number(s.note) >= 10 ? acc+1 : acc
  },0)

  const nRedoublants = students.reduce((acc,s)=>{
    return Number(s.note) < 10 ? acc+1 : acc
  },0)

  const moyenneG = students.length > 0 ?  students.reduce((acc,s)=>{
    return acc + Number(s.note)
  },0)/students.length : 0;

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
          bestNote={bestNote}
        />
        
      </div>
      <Footer nAdmis={nAdmis} nRedoublants={nRedoublants} moyenneG={moyenneG} />
    </div>
  );
}

export default App;
