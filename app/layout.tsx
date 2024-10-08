import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Monica's Portfolio",
  description:
    "Hi, I'm Monica, a Software Engineer in the Greater Seattle Area, blending creativity with technology to craft intuitive and beautiful user experiences.",
  metadataBase: new URL("https://monicasandoval.io/"),
  openGraph: {
    title: "Monica's Portfolio",
    description:
      "Hi, I'm Monica, a Software Engineer in the Greater Seattle Area, blending creativity with technology to craft intuitive and beautiful user experiences.",
    url: "https://monicasandoval.io/",
    siteName: "Monica's Portfolio",
    type: "website",
    images: [
      {
        url: "/mon.jpeg",
        secureUrl: "/mon.jpeg",
        width: 1200,
        height: 630,
        alt: "Preview image for Monica Sandoval",
      },
    ],
  },
  twitter: {
    title: "Monica's Portfolio",
    description:
      "Hi, I'm Monica, a Software Engineer in the Greater Seattle Area, blending creativity with technology to craft intuitive and beautiful user experiences.",
    images: [
      {
        url: "/mon.jpeg",
        secureUrl: "/mon.jpeg",
        width: 1200,
        height: 630,
        alt: "Preview image for Monica Sandoval",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
