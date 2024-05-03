export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Second NavItem</h1>
      {children}
    </>
  );
}
