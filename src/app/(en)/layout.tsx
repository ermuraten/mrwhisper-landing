import "../globals.css";
import "../leather-theme.css";
import Shell from "@/components/Shell";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Shell lang="en">{children}</Shell>;
}
