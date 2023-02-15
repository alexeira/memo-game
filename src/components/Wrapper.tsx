export default function Wrapper({ children }: any) {
  return (
    <main className="min-h-screen grid place-items-center bg-slate-800">
      <div className="max-w-4xl w-full border p-3 border-gray-500 rounded-sm">{children}</div>
    </main>
  )
}
