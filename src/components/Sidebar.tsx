"use client";

import { useState } from "react";
import {
  CalendarCheck,
  ChevronRight,
  FileText,
  Home as HomeIcon,
  LayoutGrid,
  Plane,
  Settings,
  User,
  Users,
} from "lucide-react";

const mainMenu = [
  { label: "Beranda", icon: HomeIcon },
  { label: "Profil Saya", icon: User },
  { label: "Presensi", icon: CalendarCheck, badge: "Baru" },
  { label: "Riwayat", icon: FileText },
];

const layananMenu = [
  { label: "Surat Tugas", icon: LayoutGrid },
  { label: "Cuti & Izin", icon: Plane },
  { label: "Klaim Kehadiran", icon: CalendarCheck },
  { label: "Manajemen Pegawai", icon: Users },
  { label: "Pengaturan", icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState("Beranda");

  const renderItem = (item: (typeof mainMenu)[number]) => {
    const Icon = item.icon;
    const isActive = active === item.label;

    return (
      <button
        key={item.label}
        onClick={() => setActive(item.label)}
        className={`nav-item-active flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-all ${
          isActive
            ? "bg-emerald-50 font-semibold text-emerald-700"
            : "text-navy-500 hover:bg-slate-50 hover:text-navy-800"
        }`}
      >
        <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
        <span className="flex-1">{item.label}</span>
        {"badge" in item && item.badge && (
          <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[9px] font-bold text-white">
            {item.badge}
          </span>
        )}
        {isActive && <ChevronRight size={14} />}
      </button>
    );
  };

  return (
    <aside className="app-sidebar sticky top-20 flex flex-col gap-1 pb-4">
      {/* Main menu */}
      <div className="mb-2 px-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Menu Utama
        </p>
      </div>

      <nav className="flex flex-col gap-1">
        {mainMenu.map(renderItem)}
      </nav>

      {/* Layanan menu */}
      <div className="mb-2 mt-5 px-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Layanan
        </p>
      </div>

      <nav className="flex flex-col gap-1">
        {layananMenu.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.label;

          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`nav-item-active flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-all ${
                isActive
                  ? "bg-emerald-50 font-semibold text-emerald-700"
                  : "text-navy-500 hover:bg-slate-50 hover:text-navy-800"
              }`}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              <span className="flex-1">{item.label}</span>
              {isActive && <ChevronRight size={14} />}
            </button>
          );
        })}
      </nav>

      {/* Help card */}
      <div className="mt-6 overflow-hidden rounded-2xl bg-linear-to-br from-navy-800 to-navy-900 p-4 text-white">
        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20">
          <span className="text-sm">💡</span>
        </div>
        <p className="text-xs font-semibold leading-snug">
          Butuh bantuan?
        </p>
        <p className="mt-1 text-[10px] text-navy-200">
          Hubungi tim IT atau lihat panduan penggunaan portal
        </p>
        <button className="mt-3 w-full rounded-lg bg-white/10 py-2 text-[10px] font-semibold text-white backdrop-blur hover:bg-white/20">
          Lihat Panduan
        </button>
      </div>
    </aside>
  );
}
