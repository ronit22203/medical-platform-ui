import AppShell from "@/components/layout/AppShell";
import MetricsPanel from "@/components/pages/MetricsPanel";
import { mockMetrics } from "@/lib/mock/metrics";

export default function Metrics() {
  return (
    <AppShell activePath="/metrics">
      <MetricsPanel metrics={mockMetrics} />
    </AppShell>
  );
}
