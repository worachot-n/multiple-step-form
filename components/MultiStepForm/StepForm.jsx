import EducationBackgroundForm from "./StepForms/EducationBackgroundForm";
import FormConfirmation from "./StepForms/FormConfirmation";
import PersonalInfoForm from "./StepForms/PersonalInfoForm";
import PreferredLanguageForm from "./StepForms/PreferredLanguageForm";
import ProgrammingExperienceForm from "./StepForms/ProgrammingExperienceForm";
import TechnicalSkillsForm from "./StepForms/TechnicalSkillsForm";

const StepForm = () => {
  const currentStep = 1;
  function renderFormByStep(step) {
    if (step === 1) {
      return <PersonalInfoForm />;
    } else if (step === 2) {
      return <EducationBackgroundForm />;
    } else if (step === 3) {
      return <ProgrammingExperienceForm />;
    } else if (step === 4) {
      return <PreferredLanguageForm />;
    } else if (step === 5) {
      return <TechnicalSkillsForm />;
    } else if (step === 6) {
      return <FormConfirmation />;
    }
  }

  return <>{renderFormByStep(currentStep)}</>;
};

export default StepForm;
