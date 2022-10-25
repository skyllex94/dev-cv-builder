import "../index.css";

import SummarySection from "./ContPanelSections/SummarySection";
import WorkSection from "./ContPanelSections/WorkSection";
import SkillsSection from "./ContPanelSections/SkillsSection";
import EducationSection from "./ContPanelSections/EducationSection";
import LanguagesSection from "./ContPanelSections/LanguagesSection";
import ProjectsSection from "./ContPanelSections/ProjectsSection";
import GenInfoSection from "./ContPanelSections/GenInfoSection";
import CertificationSection from "./ContPanelSections/CertificationSection";

function ContPanelSections() {
  return (
    <div className="d-grid gap-2 ms-2 cont-panel-items-styling">
      <GenInfoSection />

      <SummarySection />

      <WorkSection />

      <SkillsSection />

      <EducationSection />

      <LanguagesSection />

      <ProjectsSection />

      <CertificationSection />
    </div>
  );
}

export default ContPanelSections;
