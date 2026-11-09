import "./globals.css";

export const metadata = {
  title: "오늘의 운세",
  description: "오늘 나의 운세는 몇 점일까?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div className="page">
          <main className="card">{children}</main>
        </div>
      </body>
    </html>
  );
}
