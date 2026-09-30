import Card from "./Card.jsx";

function Content({
  students,
  nextId,
  form,
  editId,
  onChange,
  onSubmit,
  onDisplay,
  onDelete,
  onCancel,
}) {
  const isEditing = editId !== null;

  return (
    <main className="min-w-0 flex-1">
      <section
        id="student-form"
        className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
      >
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-blue-600">Formulaire</p>
            <h1 className="text-2xl font-bold text-slate-900">
              {isEditing ? "Modifier l’étudiant" : "Ajouter un étudiant"}
            </h1>
          </div>

          {isEditing && (
            <span className="w-fit rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
              Mode modification
            </span>
          )}
        </div>

        <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-3">
          <div>
            <label htmlFor="student-id" className="mb-2 block text-sm font-semibold text-slate-700">
              Identifiant
            </label>
            <input
              id="student-id"
              type="text"
              value={isEditing ? form.id : nextId}
              readOnly
              className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="nom" className="mb-2 block text-sm font-semibold text-slate-700">
              Nom complet
            </label>
            <input
              id="nom"
              type="text"
              name="nom"
              value={form.nom}
              onChange={onChange}
              placeholder="Ex. Sara Amrani"
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label htmlFor="note" className="mb-2 block text-sm font-semibold text-slate-700">
              Note sur 20
            </label>
            <input
              id="note"
              type="number"
              name="note"
              value={form.note}
              onChange={onChange}
              placeholder="Ex. 15"
              min="0"
              max="20"
              step="0.01"
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div className="flex flex-col gap-3 md:col-span-3 sm:flex-row sm:justify-end">
            {isEditing && (
              <>
                <button
                  type="button"
                  onClick={onCancel}
                  className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Annuler
                </button>
                <button
                  type="button"
                  onClick={onDelete}
                  className="rounded-xl bg-rose-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-100"
                >
                  Supprimer
                </button>
              </>
            )}

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
            >
              {isEditing ? "Enregistrer les modifications" : "Ajouter l’étudiant"}
            </button>
          </div>
        </form>
      </section>

      <section id="students" className="scroll-mt-28 pt-8">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-blue-600">Répertoire</p>
            <h2 className="text-2xl font-bold text-slate-900">
              Liste des étudiants
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            {students.length} résultat{students.length !== 1 ? "s" : ""}
          </p>
        </div>

        {students.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white px-6 py-14 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl font-bold text-blue-600">
              +
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-800">
              Aucun étudiant pour le moment
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Utilisez le formulaire ci-dessus pour ajouter le premier étudiant.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {students.map((student) => (
              <Card
                key={student.id}
                student={student}
                onDisplay={onDisplay}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Content;
