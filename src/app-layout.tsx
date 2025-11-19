export function Header({ children }: { children: React.ReactNode }) {
  return <header className="mt-10">{children}</header>;
}

export function Main({ children }: { children: React.ReactNode }) {
  return <main className="my-16 max-md:my-10">{children}</main>;
}
