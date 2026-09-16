import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import EmployeeCard from "@/components/sections/EmployeeCard";
import QuickMenu from "@/components/sections/QuickMenu";
import AttendanceCalendar from "@/components/sections/AttendanceCalendar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="mx-auto w-full max-w-[1200px] px-4 pb-24 lg:px-6 lg:pb-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 py-4 text-[11px] lg:py-5 lg:text-xs">
          <span className="font-medium text-muted">Beranda</span>
          <span className="text-slate-300">/</span>
          <span className="font-semibold text-navy-800">Dashboard</span>
        </div>

        {/* Page title */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-navy-800 lg:text-2xl">
              Dashboard
            </h1>
            <p className="mt-0.5 text-xs text-muted lg:text-sm">
              Selamat datang kembali, berikut ringkasan kehadiran Anda
            </p>
          </div>
          <button className="hidden items-center gap-2 rounded-xl bg-navy-800 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-navy-700 lg:flex">
            <span>📅</span>
            Hari Ini
          </button>
        </div>

        {/* Layout: Sidebar + Main */}
        <div className="app-layout grid grid-cols-1 gap-5">
          <Sidebar />

          <main className="flex min-w-0 flex-col gap-5">
            <EmployeeCard />
            <QuickMenu />
            <AttendanceCalendar />
          </main>
        </div>
      </div>

      <Footer />
      <BottomNav />
    </div>
  );
}