export function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-outline/10 bg-background">
      <div className="container mx-auto px-5 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-8">
          <div className="max-w-xs space-y-4">
            <a
              href="/"
              className="text-2xl font-display font-bold text-primary tracking-tighter"
            >
              GameVault
            </a>
            <p className="text-xs md:text-sm text-on-surface-variant font-medium leading-relaxed">
              Destinasi utama untuk koleksi game premium dan kurasi terbaik di
              industri.
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-[10px] md:text-xs font-medium text-on-surface-variant">
              © 2026 GameVault. Semua hak cipta dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
