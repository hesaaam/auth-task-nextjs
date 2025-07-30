// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // ایمپورت کردن استایل‌های عمومی

// Define metadata for the entire application (good for SEO)
export const metadata: Metadata = {
  title: "پنل کاربری",
  description: "پروژه آزمایشی برای احراز هویت",
};

/**
 * This is the root layout for the entire application.
 * All other pages will be rendered as children within this layout.
 * It's responsible for defining the main <html> and <body> tags.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
