import { Bell, ChevronDown, Menu, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40">
      {/* Top info bar — desktop only */}
      <div className="hidden bg-navy-800 px-6 text-white lg:block">
        <div className="mx-auto flex h-9 max-w-300 items-center justify-between text-xs">
          <div className="flex items-center gap-4 text-navy-200">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Sistem Aktif
            </span>
            <span className="text-navy-400">|</span>
            <span>Badan Industri Mineral — Portal Pegawai</span>
          </div>
          <div className="flex items-center gap-3 text-navy-300">
            <span>Senin, 14 September 2026</span>
            <span className="text-navy-500">•</span>
            <a href="mailto:secretariat@bim.go.id" className="hover:text-white">
              secretariat@bim.go.id
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="glass border-b border-slate-200/60">
        <div className="mx-auto flex h-16 max-w-300 items-center justify-between px-4 lg:h-18 lg:px-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-800 text-white shadow-md lg:h-11 lg:w-11">
              <span className="text-lg font-bold">B</span>
            </div>
            <div className="flex flex-col leading-tight">
              <strong className="text-sm font-bold text-navy-800 lg:text-base">
                Portal Absensi
              </strong>
              <small className="text-[10px] text-muted lg:text-[11px]">
                Badan Industri Mineral
              </small>
            </div>
          </div>

          {/* Desktop search */}
          <div className="hidden flex-1 justify-center px-8 lg:flex">
            <div className="flex h-10 w-full max-w-md items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 transition-colors focus-within:border-navy-300 focus-within:bg-white">
              <Search size={16} className="text-slate-400" />
              <input
                placeholder="Cari menu atau pegawai..."
                className="w-full border-0 bg-transparent text-sm text-foreground outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Notification */}
            <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-navy-600 transition-colors hover:bg-slate-50">
              <Bell size={18} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-danger" />
            </button>

            {/* User — desktop */}
            <button className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 transition-colors hover:bg-slate-50 lg:flex">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                FP
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-xs font-semibold text-navy-800">
                  Fadila P. Yudho
                </span>
                <span className="text-[10px] text-muted">
                  100000007
                </span>
              </div>
              <ChevronDown size={14} className="text-slate-400" />
            </button>

            {/* Mobile menu */}
            <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-800 text-white lg:hidden">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
