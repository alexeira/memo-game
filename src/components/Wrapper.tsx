export default function Wrapper({ children }: any) {
  return (
    <main className="min-h-screen grid place-items-center bg-slate-800">
      <div className="max-w-2xl w-full border border-gray-500 rounded-sm">{children}</div>
    </main>
  )
}
