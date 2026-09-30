function Sidebar({ studentCount }) {
  return (
    <aside className="w-full shrink-0 lg:w-64">
      <nav className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-24">
        <p className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
          Navigation
        </p>

        <div className="flex gap-2 overflow-x-auto lg:flex-col">
          <a
            href="#students"
            className="flex min-w-max items-center justify-between gap-4 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            <span>Étudiants</span>
            <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">
              {studentCount}
            </span>
          </a>

          <a
            href="#student-form"
            className="min-w-max rounded-xl px-4 py-3 font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Ajouter un étudiant
          </a>
        </div>

        <div className="mt-5 hidden rounded-xl bg-slate-50 p-4 lg:block">
          <p className="text-sm font-semibold text-slate-700">Astuce</p>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            Cliquez sur une carte pour modifier ou supprimer l’étudiant.
          </p>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
