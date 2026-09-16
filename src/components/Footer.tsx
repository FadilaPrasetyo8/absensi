import { Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="hidden border-t border-slate-200 bg-navy-800 text-white lg:block">
      <div className="mx-auto max-w-300 px-6 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                <span className="text-sm font-bold">B</span>
              </div>
              <div className="leading-tight">
                <strong className="text-sm font-semibold">
                  Badan Industri Mineral
                </strong>
                <p className="text-[10px] text-navy-300">
                  Lembaga non-struktural di bawah Presiden RI
                </p>
              </div>
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-navy-300">
              Berkomitmen mewujudkan tata kelola mineral yang transparan,
              berkelanjutan, dan berdaulat.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-navy-200">
              Tautan Cepat
            </h4>
            <ul className="flex flex-col gap-2 text-[11px] text-navy-300">
              <li>
                <a href="#" className="hover:text-white">
                  Tentang BIM
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Data & Publikasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Berita & Artikel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-navy-200">
              Kontak
            </h4>
            <ul className="flex flex-col gap-2 text-[11px] text-navy-300">
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <a
                  href="mailto:secretariat@bim.go.id"
                  className="hover:text-white"
                >
                  secretariat@bim.go.id
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={14} />
                <a href="#" className="hover:text-white">
                  www.bim.go.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] text-navy-400">
          <p>© 2026 Badan Industri Mineral. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Sistem Aktif
            </span>
            <span>v2.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
