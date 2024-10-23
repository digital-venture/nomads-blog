import { Metadata } from "next";
import Navigation from "../components/layout/navigation";
import Footer from "../components/layout/footer";
import "./styles.scss"

export const metadata: Metadata = {
  title: {
    default: "Main title of site",
    template: "%s - Main title of site", // use "absolute" on pages where you dont want to use the template
  },
  description: "Template blog site description",
  twitter: {
    card: "summary_large_image",
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
