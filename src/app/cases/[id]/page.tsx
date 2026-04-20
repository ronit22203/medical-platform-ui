"use client";

import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import RightPanel from "@/components/layout/RightPanel";
import CaseHeader from "@/components/case/CaseHeader";
import CaseArtifacts from "@/components/case/CaseArtifacts";
import QuickActions from "@/components/case/QuickActions";
import AIQueryPanel from "@/components/case/AIQueryPanel";
import TrialDrillDown from "@/components/match/TrialDrillDown";
import { mockPatient } from "@/lib/mock/patient";
import { mockTrials } from "@/lib/mock/trials";
import { mockCitations } from "@/lib/mock/evidence";
import { mockExecutionLog } from "@/lib/mock/audit";
import type { Trial } from "@/lib/types/trial";

export default function CaseDetailPage() {
  const [selectedTrial, setSelectedTrial] = useState<Trial | null>(null);

  const rightPanel = (
    <RightPanel
      trials={mockTrials}
      citations={mockCitations}
      executionLog={mockExecutionLog}
      onSelectTrial={setSelectedTrial}
    />
  );

  return (
    <>
      <AppShell activePath="/cases" rightPanel={rightPanel}>
        <CaseHeader patient={mockPatient} />
        <CaseArtifacts />
        <QuickActions />
        <AIQueryPanel />
      </AppShell>

      {selectedTrial && (
        <TrialDrillDown
          trial={selectedTrial}
          patient={mockPatient}
          onClose={() => setSelectedTrial(null)}
        />
      )}
    </>
  );
}
