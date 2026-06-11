import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-tertiary text-on-tertiary pt-24 pb-10">
      <div className="px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-[var(--font-headline)] text-2xl font-extrabold tracking-tighter text-white">
                POMA TAFI
              </span>
            </div>
            <p className="text-on-tertiary-container/60 max-w-sm mb-10 leading-relaxed">
              Referentes en servicios turisticos y logistica estrategica en el
              NOA. Conectamos personas con la esencia pura de la montana.
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-tertiary transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-[var(--font-headline)] text-[14px] font-bold mb-8 uppercase tracking-[0.3em] text-white">
              Navegacion
            </h4>
            <ul className="space-y-5 text-on-tertiary-container/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="hover:text-white transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/excursiones"
                  className="hover:text-white transition-colors"
                >
                  Excursiones
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-[var(--font-headline)] text-[14px] font-bold mb-8 uppercase tracking-[0.3em] text-white">
              Contacto
            </h4>
            <address className="not-italic space-y-4 text-sm text-on-tertiary-container/60">
              <p className="flex items-start gap-3">
                <span className="material-symbols-outlined text-lg text-primary-fixed-dim mt-0.5">
                  location_on
                </span>
                <span>
                  Tafi del Valle, Tucuman,
                  <br />
                  Argentina
                </span>
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-lg text-primary-fixed-dim">
                  call
                </span>
                <span>Naty: 381 203-2123</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-lg text-primary-fixed-dim">
                  call
                </span>
                <span>Sergio: 381 332-8788</span>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] opacity-40 uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} POMA Tafi del Valle. Excelencia en
            Altura.
          </p>
          <div className="flex items-center gap-8">
            <span className="text-[11px] font-bold uppercase tracking-widest opacity-40">
              Privacidad
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest opacity-40">
              Terminos
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
