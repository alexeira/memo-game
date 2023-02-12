export default function Wrapper({ children }: any) {
  return (
    <main className="min-h-screen grid place-items-center bg-slate-800">
      <div className="max-w-3xl border border-white">{children}</div>
    </main>
  )
}
