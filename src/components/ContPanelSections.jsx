import SummarySection from "./ContPanelSections/SummarySection";
import WorkSection from "./ContPanelSections/WorkSection";
import SkillsSection from "./ContPanelSections/SkillsSection";
import EducationSection from "./ContPanelSections/EducationSection";
import LanguagesSection from "./ContPanelSections/LanguagesSection";
import ProjectsSection from "./ContPanelSections/ProjectsSection";
import GenInfoSection from "./ContPanelSections/GenInfoSection";

import "../index.css";

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
    </div>
  );
}

export default ContPanelSections;
