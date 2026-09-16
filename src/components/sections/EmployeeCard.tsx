import { Building2, Mail, MapPin, Phone } from "lucide-react";

export default function EmployeeCard() {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header strip */}
      <div className="h-1.5 bg-linear-to-r from-navy-700 via-emerald-500 to-gold-500" />

      <div className="flex flex-col gap-4 p-5 lg:flex-row lg:items-start lg:p-6">
        {/* Avatar */}
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-navy-700 to-navy-900 text-xl font-bold text-white shadow-md lg:h-18 lg:w-18">
            <span>FP</span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h1 className="truncate text-lg font-bold text-navy-800 lg:text-xl">
                Fadila Prasetyo Yudho
              </h1>
              <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                Aktif
              </span>
            </div>
            <p className="mt-0.5 text-xs text-muted lg:text-sm">
              NIP. 100000007
            </p>
            <p className="text-sm font-medium text-navy-600">
              Frontend Developer
            </p>
          </div>
        </div>

        {/* Office info — desktop */}
        <div className="hidden flex-1 justify-end lg:flex">
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 border-l border-slate-200 pl-6 text-xs">
            <div className="flex items-start gap-2">
              <Building2 size={14} className="mt-0.5 text-slate-400" />
              <div>
                <p className="text-[10px] font-medium uppercase text-slate-400">
                  Unit Kerja
                </p>
                <p className="text-navy-700">
                  Pusat Data & Teknologi Informasi
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 text-slate-400" />
              <div>
                <p className="text-[10px] font-medium uppercase text-slate-400">
                  Lokasi
                </p>
                <p className="text-navy-700">Jakarta Pusat</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Mail size={14} className="mt-0.5 text-slate-400" />
              <div>
                <p className="text-[10px] font-medium uppercase text-slate-400">
                  Email
                </p>
                <p className="text-navy-700">fadila@bim.go.id</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Phone size={14} className="mt-0.5 text-slate-400" />
              <div>
                <p className="text-[10px] font-medium uppercase text-slate-400">
                  Telepon
                </p>
                <p className="text-navy-700">+62 21 1234 5678</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip — mobile only */}
      <div className="grid grid-cols-3 border-t border-slate-100 lg:hidden">
        <div className="px-4 py-3 text-center">
          <p className="text-lg font-bold text-navy-800">22</p>
          <p className="text-[10px] text-muted">Hadir Bulan Ini</p>
        </div>
        <div className="border-x border-slate-100 px-4 py-3 text-center">
          <p className="text-lg font-bold text-emerald-600">96%</p>
          <p className="text-[10px] text-muted">Tingkat Kehadiran</p>
        </div>
        <div className="px-4 py-3 text-center">
          <p className="text-lg font-bold text-gold-600">3</p>
          <p className="text-[10px] text-muted">Cuti Terpakai</p>
        </div>
      </div>
    </section>
  );
}
