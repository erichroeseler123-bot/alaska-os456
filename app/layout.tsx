import "./globals.css";

export const metadata = {
  title: "Welcome to Alaska Tours",
  description: "Explore Alaska cruise ports, tours, and operators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
