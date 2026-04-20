import AppShell from "@/components/layout/AppShell";
import EvidencePage from "@/components/pages/EvidencePage";
import { mockCitations } from "@/lib/mock/evidence";

export default function Evidence() {
  return (
    <AppShell activePath="/evidence">
      <EvidencePage citations={mockCitations} />
    </AppShell>
  );
}
