import "./globals.css";

export const metadata = {
  title: "デジタルお墓",
  description: "FastAPI + Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}