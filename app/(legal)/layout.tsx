import { Metadata } from "next";
import defaultMetadata from "@/config/metadata";

export const metadata: Metadata = {
  title: {
    template: `%s | ${defaultMetadata.title}`,
    default: defaultMetadata.title,
  },
};

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {children}
    </main>
  );
}
