"use client";

import { useState } from "react";
import {
  CalendarCheck,
  Fingerprint,
  Home as HomeIcon,
  User,
} from "lucide-react";

const navItems = [
  { label: "Beranda", icon: HomeIcon },
  { label: "Riwayat", icon: CalendarCheck },
  { label: "Profil", icon: User },
  { label: "ABC", icon: User },

];

export default function BottomNav() {
  const [active, setActive] = useState("Beranda");

  return (
    <>
      {/* Bottom navigation */}
      <nav className="app-bottom-nav fixed bottom-0 left-0 right-0 z-50 items-center justify-around border-t border-slate-200 bg-white px-2 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(15,23,41,0.08)] lg:hidden">
        {/* Left items */}
        {navItems.slice(0, 2).map((item) => {
          const Icon = item.icon;
          const isActive = active === item.label;

          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`flex flex-1 flex-col items-center gap-1 py-2.5 transition-colors ${
                isActive ? "text-emerald-600" : "text-slate-400"
              }`}
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}

        {/* Center floating button — Absensi */}
        <button
          onClick={() => setActive("Absensi")}
          className="relative -mt-6 flex flex-col items-center"
        >
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition-all ${
              active === "Absensi"
                ? "scale-105 bg-emerald-500 shadow-emerald-500/30"
                : "bg-navy-800 shadow-navy-800/30"
            }`}
          >
            <Fingerprint size={26} className="text-white" />
          </div>
          <span
            className={`mt-1 text-[10px] font-bold ${
              active === "Absensi" ? "text-emerald-600" : "text-navy-700"
            }`}
          >
            Absen
          </span>
        </button>

        {/* Right items */}
        {navItems.slice(2).map((item) => {
          const Icon = item.icon;
          const isActive = active === item.label;

          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`flex flex-1 flex-col items-center gap-1 py-2.5 transition-colors ${
                isActive ? "text-emerald-600" : "text-slate-400"
              }`}
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
