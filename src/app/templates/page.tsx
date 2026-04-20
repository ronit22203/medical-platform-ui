import AppShell from "@/components/layout/AppShell";
import TemplatesPage from "@/components/pages/TemplatesPage";
import { mockQueryTemplates } from "@/lib/mock/metrics";

export default function Templates() {
  return (
    <AppShell activePath="/templates">
      <TemplatesPage templates={mockQueryTemplates} />
    </AppShell>
  );
}
