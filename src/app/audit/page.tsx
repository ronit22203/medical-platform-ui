import AppShell from "@/components/layout/AppShell";
import AuditTimeline from "@/components/pages/AuditTimeline";
import { mockExecutionLog } from "@/lib/mock/audit";

export default function Audit() {
  return (
    <AppShell activePath="/audit">
      <AuditTimeline log={mockExecutionLog} />
    </AppShell>
  );
}
