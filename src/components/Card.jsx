function Card({ student, onDisplay, bestNote }) {
  const initial = student.nom.trim().charAt(0).toUpperCase() || "?";
  const numericNote = Number(student.note);

  const noteColor =
    numericNote >= 10
      ? "bg-emerald-50 text-emerald-700"
      : "bg-rose-50 text-rose-700";

  const isBest = numericNote === Number(bestNote);

  return (
    <button
      type="button"
      onClick={() => onDisplay(student)}
      className="group relative w-full rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-100"
      aria-label={`Modifier ${student.nom}`}
    >
      {isBest && (
        <span className="absolute right-1 top-1 flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-600 ring-1 ring-amber-200">
          ★
        </span>
      )}

      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-lg font-black text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
          {initial}
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
          ID {student.id}
        </span>
      </div>

      <h3 className="truncate text-lg font-bold text-slate-900">
        {student.nom}
      </h3>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-sm text-slate-500">
          Note finale
        </span>

        <span
          className={`rounded-full px-3 py-1 text-sm font-bold ${noteColor}`}
        >
          {student.note}/20
        </span>
      </div>
    </button>
  );
}

export default Card;