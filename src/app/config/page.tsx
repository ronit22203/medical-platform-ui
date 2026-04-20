"use client";

import AppShell from "@/components/layout/AppShell";
import ConfigPanel from "@/components/pages/ConfigPanel";
import { mockAgentConfig } from "@/lib/mock/metrics";

export default function Config() {
  return (
    <AppShell activePath="/config">
      <ConfigPanel config={mockAgentConfig} />
    </AppShell>
  );
}
