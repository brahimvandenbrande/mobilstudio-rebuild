import '../globals.css'

export default function PublicLayout({ children }) {
  return (
    <div className="public-layout bg-[#fffef5]">
      <div className="mx-auto max-w-[1140px] min-h-screen flex flex-col">
        <header className="absolute top-0 left-0 right-0 z-50">
          <div className="mx-auto max-w-[1140px] flex items-center justify-between py-6 md:py-8">
            <div className="flex items-center">
              <h1 className="text-xl font-medium tracking-tight">
                mobil studio
              </h1>
            </div>
            <div className="text-4xl text-[#885fff]">
              *
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <div className="mx-auto max-w-[1140px] px-6 md:px-12">
          <footer className="py-6 md:py-12">
            <p> 2024 My Website</p>
          </footer>
        </div>
      </div>
    </div>
  );
}