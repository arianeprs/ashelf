import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ashelf',
  description: 'Keep your book recommendations at hand',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="bg-neutral-100 dark:bg-slate-900 flex">
          <div className="m-auto w-full md:w-[500px] bg-white dark:bg-slate-800 px-4 py-2">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
