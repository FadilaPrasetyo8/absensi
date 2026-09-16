import {
  BriefcaseBusiness,
  CalendarCheck,
  FileCheck2,
  FileText,
  Plane,
  User,
} from "lucide-react";

const menuItems = [
  {
    label: "Biodata",
    icon: User,
    color: "bg-blue-50 text-blue-600",
  },
  {
    label: "Presensi",
    icon: CalendarCheck,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "Catatan Harian",
    icon: FileText,
    color: "bg-amber-50 text-amber-600",
  },
  {
    label: "Surat Tugas",
    icon: BriefcaseBusiness,
    color: "bg-purple-50 text-purple-600",
  },
  {
    label: "Cuti",
    icon: Plane,
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    label: "Klaim",
    icon: FileCheck2,
    color: "bg-rose-50 text-rose-600",
  },
  {
    label: "Formulir",
    icon: FileText,
    color: "bg-indigo-50 text-indigo-600",
  },
];

export default function QuickMenu() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:p-5">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-bold text-navy-800">Akses Cepat</h2>
        <button className="text-[11px] font-medium text-emerald-600 hover:underline">
          Lihat Semua
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2 lg:grid-cols-7 lg:gap-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className="flex flex-col items-center gap-2 rounded-xl p-2 transition-all hover:bg-slate-50 lg:p-3"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl lg:h-12 lg:w-12 ${item.color}`}
              >
                <Icon size={20} strokeWidth={2} />
              </div>
              <span className="text-center text-[10px] font-medium leading-tight text-navy-600 lg:text-[11px]">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
