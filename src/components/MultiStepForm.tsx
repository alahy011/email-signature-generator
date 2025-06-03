import { useState } from "react";
import StepPersonal from "./steps/StepPersonal";
import StepEducation from "./steps/StepEduction";
import StepSocials from "./steps/StepSocials";
import StepPreview from "./steps/StepPreview";

export default function MultiStepForm() {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    university: "",
    studentId: "",
    github: "",
    linkedin: "",
    photoUrl: "",
  });

  const steps = [
    { title: "Personal Info", component: StepPersonal },
    { title: "Education", component: StepEducation },
    { title: "Socials", component: StepSocials },
    { title: "Preview & Export", component: StepPreview },
  ];

  const CurrentStep = steps[step].component;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 space-y-4 max-w-3xl mx-auto">
      <div className="text-center">
        <h2 className="text-xl font-bold">{steps[step].title}</h2>
        <p className="text-sm text-gray-500">Step {step + 1} of {steps.length}</p>
      </div>

      <CurrentStep formData={formData} setFormData={setFormData} />

      <div className="flex justify-between pt-4">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className="bg-gray-200 px-4 py-2 rounded text-sm hover:bg-gray-300"
          disabled={step === 0}
        >
          ⬅ Back
        </button>
        <button
          onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
          className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
          disabled={step === steps.length - 1}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
