import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { inter, sfPro } from "@/assets/fonts";
import { Providers } from "stores/redux/Providers";

export const metadata = {
  title: "OTS-Online Tutor System",
  description:
    "OTS is a online tutor system where teacher and student can interact with each other",
  twitter: {
    card: "summary_large_image",
    title: "OTS-Online Tutor System",
    description:
      "OTS is a online tutor system where teacher and student can interact with each other",
    creator: "@Muneeb926595",
  },
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <Providers>
          <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
          <Suspense fallback="...">
            {/* @ts-expect-error Server Component */}
            <Nav />
          </Suspense>
          <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
            {children}
          </main>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
