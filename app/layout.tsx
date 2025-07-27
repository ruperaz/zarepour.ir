import './globals.css';
import { LanguageProvider } from '../contexts/LanguageContext';

export const metadata = {
  title: 'Mohammad Zarepour - Software Engineer | محمد زارعپور',
  description: 'Professional profile of Mohammad Zarepour, Software Engineer specializing in full-stack development and modern web technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
