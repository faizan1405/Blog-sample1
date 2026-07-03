import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/site-shell";
import { HomePage } from "@/components/pages/home-page";

export const Route = createFileRoute("/")({
  component: () => (
    <SiteShell>
      <HomePage />
    </SiteShell>
  ),
});
