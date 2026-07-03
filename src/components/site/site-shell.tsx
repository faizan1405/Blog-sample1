import type { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { WhatsAppButton } from "./whatsapp-button";
import { CustomCursor } from "./custom-cursor";
import { SmoothScroll } from "./smooth-scroll";
import { PageLoader } from "./page-loader";
import { ScrollProgress } from "./scroll-progress";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </SmoothScroll>
  );
}