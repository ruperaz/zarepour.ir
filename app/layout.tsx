import './globals.css';

export const metadata = {
  title: 'Mohammad Zarepour - Software Engineer',
  description: 'Professional profile of Mohammad Zarepour, Software Engineer specializing in full-stack development and modern web technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
