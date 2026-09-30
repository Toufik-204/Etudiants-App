function Header({ studentCount }) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-black text-white shadow-md shadow-blue-200">
            GE
          </div>
          <div>
            <p className="text-lg font-bold text-slate-900 sm:text-xl">
              Gestion des étudiants
            </p>
            <p className="text-xs text-slate-500 sm:text-sm">
              Tableau de bord scolaire
            </p>
          </div>
        </div>

        <div className="rounded-full bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
          {studentCount} étudiant{studentCount !== 1 ? "s" : ""}
        </div>
      </div>
    </header>
  );
}

export default Header;
