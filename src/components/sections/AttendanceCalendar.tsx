import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
} from "lucide-react";

const attendanceDays = [
  { day: 31, type: "outside" },
  { day: 1, type: "present" },
  { day: 2, type: "late" },
  { day: 3, type: "late" },
  { day: 4, type: "late" },
  { day: 5, type: "weekend" },
  { day: 6, type: "weekend" },
  { day: 7, type: "late" },
  { day: 8, type: "late" },
  { day: 9, type: "late" },
  { day: 10, type: "normal" },
  { day: 11, type: "late" },
  { day: 12, type: "weekend" },
  { day: 13, type: "weekend" },
  { day: 14, type: "normal" },
  { day: 15, type: "normal" },
  { day: 16, type: "normal" },
  { day: 17, type: "normal" },
  { day: 18, type: "normal" },
  { day: 19, type: "weekend" },
  { day: 20, type: "weekend" },
  { day: 21, type: "normal" },
  { day: 22, type: "normal" },
  { day: 23, type: "normal" },
  { day: 24, type: "normal" },
  { day: 25, type: "normal" },
  { day: 26, type: "weekend" },
  { day: 27, type: "weekend" },
  { day: 28, type: "normal" },
  { day: 29, type: "normal" },
  { day: 30, type: "normal" },
  { day: 1, type: "outside" },
  { day: 2, type: "outside" },
  { day: 3, type: "outside" },
  { day: 4, type: "outside" },
];

const summaryItems = [
  { value: 1, label: "Hadir", color: "text-emerald-600", bg: "bg-emerald-50" },
  { value: 7, label: "TK", color: "text-rose-600", bg: "bg-rose-50" },
  { value: 0, label: "Dinas", color: "text-blue-600", bg: "bg-blue-50" },
  { value: 0, label: "Cuti", color: "text-amber-600", bg: "bg-amber-50" },
  { value: 0, label: "Libur", color: "text-purple-600", bg: "bg-purple-50" },
];

function CalendarDay({ day, type }: { day: number; type: string }) {
  if (type === "outside") {
    return (
      <div className="flex min-h-10 items-center justify-center text-[11px] text-slate-300 lg:min-h-12">
        {day}
      </div>
    );
  }

  if (type === "weekend") {
    return (
      <div className="flex min-h-10 flex-col items-center justify-center gap-0.5 text-[11px] text-slate-300 lg:min-h-12">
        <span>{day}</span>
        <span className="text-[8px] uppercase tracking-wide">Libur</span>
      </div>
    );
  }

  if (type === "present") {
    return (
      <div className="flex min-h-10 flex-col items-center justify-center gap-0.5 lg:min-h-12">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-semibold text-white lg:h-8 lg:w-8">
          {day}
        </span>
        <span className="text-[8px] font-medium text-emerald-600">Hadir</span>
      </div>
    );
  }

  if (type === "late") {
    return (
      <div className="flex min-h-10 flex-col items-center justify-center gap-0.5 lg:min-h-12">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-100 text-[11px] font-semibold text-rose-600 lg:h-8 lg:w-8">
          {day}
        </span>
        <span className="text-[8px] font-medium text-rose-600">TK</span>
      </div>
    );
  }

  return (
    <div className="flex min-h-10 items-center justify-center text-[11px] font-medium text-navy-700 lg:min-h-12">
      {day}
    </div>
  );
}

export default function AttendanceCalendar() {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Calendar header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div>
          <h2 className="text-base font-bold text-navy-800 lg:text-lg">
            September 2026
          </h2>
          <p className="text-[11px] text-muted">Rekap kehadiran bulan ini</p>
        </div>
        <div className="flex items-center gap-1">
          <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-navy-600 transition-colors hover:bg-slate-50">
            <ChevronLeft size={18} />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-navy-600 transition-colors hover:bg-slate-50">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-5 gap-1.5 border-b border-slate-100 p-4">
        {summaryItems.map((item) => (
          <div
            key={item.label}
            className={`flex flex-col items-center justify-center rounded-xl py-3 ${item.bg}`}
          >
            <strong className={`text-lg font-bold lg:text-xl ${item.color}`}>
              {item.value}
            </strong>
            <span className="mt-0.5 text-[9px] font-medium text-muted lg:text-[10px]">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Device info */}
      <div className="flex items-start gap-2.5 border-b border-slate-100 bg-slate-50/50 px-5 py-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100">
          <Smartphone size={15} className="text-emerald-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-navy-700">
              Perangkat Terdaftar
            </span>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">
              Aktif
            </span>
          </div>
          <p className="mt-0.5 text-[10px] leading-relaxed text-muted">
            Apple iPhone 13 • iOS 18.7.8 • ID 36BC...F550 • Terdaftar sejak 09
            Juni 2026
          </p>
        </div>
        <button className="hidden shrink-0 rounded-lg border border-rose-200 px-3 py-1.5 text-[10px] font-medium text-rose-600 transition-colors hover:bg-rose-50 lg:block">
          Reset
        </button>
      </div>

      {/* Calendar grid */}
      <div className="p-4 lg:p-5">
        <div className="grid grid-cols-7 border-b border-slate-100 pb-2">
          {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"].map((d) => (
            <span
              key={d}
              className="text-center text-[10px] font-bold uppercase tracking-wide text-slate-400"
            >
              {d}
            </span>
          ))}
        </div>

        <div className="mt-1 grid grid-cols-7">
          {attendanceDays.map((item, index) => (
            <CalendarDay
              key={`${item.day}-${index}`}
              day={item.day}
              type={item.type}
            />
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 border-t border-slate-100 px-5 py-3 text-[10px]">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <span className="text-muted">Hadir</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-100 ring-1 ring-rose-300" />
          <span className="text-muted">Tidak Hadir</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="text-muted">Libur / Weekend</span>
        </div>
      </div>
    </section>
  );
}
