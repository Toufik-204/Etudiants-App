export default function Footer({nAdmis,nRedoublants,moyenneG}){
  return (
    
    <footer className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

    <div className="rounded-xl bg-green-50 p-4 text-center">
      <p className="text-sm font-medium text-slate-500">
        Nombre d'admis
      </p>
      <p className="mt-1 text-2xl font-black text-green-600">
        {nAdmis}
      </p>
    </div>

    <div className="rounded-xl bg-red-50 p-4 text-center">
      <p className="text-sm font-medium text-slate-500">
        Nombre de redoublants
      </p>
      <p className="mt-1 text-2xl font-black text-red-600">
        {nRedoublants}
      </p>
    </div>

    <div className="rounded-xl bg-blue-50 p-4 text-center">
      <p className="text-sm font-medium text-slate-500">
        Moyenne générale
      </p>
      <p className="mt-1 text-2xl font-black text-blue-600">
        <span>{moyenneG.toFixed(2)}/20</span>
      </p>
    </div>

  </div>
</footer>
  
  )
}