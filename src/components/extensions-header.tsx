export default function ExtensionsHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header>
      <div className="container flex items-center justify-between mb-8 max-sm:flex-col max-sm:gap-6">
        {children}
      </div>
    </header>
  );
}
