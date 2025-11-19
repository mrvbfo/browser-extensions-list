export default function ExtensionsCards({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
        <div className="container">{children}</div>
    </section>
  );
}
