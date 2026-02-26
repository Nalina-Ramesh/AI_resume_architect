import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import ResumePreview from '../components/ResumePreview';
import { Link } from 'react-router-dom';

const steps = ['Personal Info', 'Experience', 'Education', 'Skills', 'Projects'];

const ResumeBuilder = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    headline: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
    projects: ''
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const handleOptimize = () => {
    // UI-only placeholder
    alert('AI optimization would run here in production.');
  };

  const handleDownload = () => {
    // UI-only placeholder
    alert('PDF export would trigger here in production.');
  };

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <Input
              label="Full name"
              placeholder="Alex Candidate"
              value={formData.fullName}
              onChange={handleChange('fullName')}
            />
            <Input
              label="Headline"
              placeholder="Senior Product Designer"
              value={formData.headline}
              onChange={handleChange('headline')}
            />
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange('email')}
            />
            <Input
              label="Phone"
              placeholder="+1 (555) 555-0100"
              value={formData.phone}
              onChange={handleChange('phone')}
            />
            <Input
              label="Location"
              placeholder="Remote · Anywhere"
              value={formData.location}
              onChange={handleChange('location')}
            />
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Summary
              </label>
              <textarea
                rows={4}
                className="input-base resize-none"
                placeholder="Briefly introduce yourself, your experience level, and what you’re looking for."
                value={formData.summary}
                onChange={handleChange('summary')}
              />
            </div>
          </>
        );
      case 1:
        return (
          <>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Experience
            </label>
            <textarea
              rows={8}
              className="input-base resize-none"
              placeholder="- Led redesign of billing dashboard used by 15k+ teams&#10;- Improved sign-up conversion by 12% through A/B tested onboarding"
              value={formData.experience}
              onChange={handleChange('experience')}
            />
            <p className="text-xs text-slate-500">
              Tip: Focus on impact and measurable outcomes. Use strong verbs and metrics where
              possible.
            </p>
          </>
        );
      case 2:
        return (
          <>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Education
            </label>
            <textarea
              rows={4}
              className="input-base resize-none"
              placeholder="B.Sc. in Human-Computer Interaction, University of Design · 2017"
              value={formData.education}
              onChange={handleChange('education')}
            />
          </>
        );
      case 3:
        return (
          <>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Skills
            </label>
            <textarea
              rows={4}
              className="input-base resize-none"
              placeholder="Product Design, UX Research, Prototyping, Figma, Design Systems, User Testing"
              value={formData.skills}
              onChange={handleChange('skills')}
            />
          </>
        );
      case 4:
        return (
          <>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Projects
            </label>
            <textarea
              rows={6}
              className="input-base resize-none"
              placeholder="- CareerForge Pro – Designed an ATS-proof resume builder for modern candidates&#10;- Inbox Zero – Simplified email triage tool that helped users save 4h/week"
              value={formData.projects}
              onChange={handleChange('projects')}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.1fr)]">
      {/* Left: form */}
      <div className="space-y-4">
        <div>
          <Link
            to="/app/home"
            className="mb-2 inline-flex items-center text-xs text-slate-500 hover:text-slate-800"
          >
            <span className="mr-1">&#8592;</span> Back to home
          </Link>
        </div>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Resume builder</h2>
              <p className="mt-1 text-xs text-slate-500">
                Fill in each section. We&apos;ll keep your layout clean and ATS-friendly.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              {steps.map((step, index) => (
                <button
                  key={step}
                  onClick={() => setActiveStep(index)}
                  className={`h-7 rounded-full px-3 text-[11px] font-medium transition-all ${
                    index === activeStep
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 space-y-4">{renderStep()}</div>

          <div className="mt-5 flex items-center justify-between">
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                className="px-4 py-2 text-xs"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Back
              </Button>
              <Button
                type="button"
                className="px-4 py-2 text-xs"
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
              >
                Next
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                className="px-4 py-2 text-xs"
                onClick={handleOptimize}
              >
                Optimize with AI
              </Button>
              <Button
                type="button"
                className="px-4 py-2 text-xs"
                onClick={handleDownload}
              >
                Download PDF
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Right: live preview */}
      <ResumePreview data={formData} />
    </div>
  );
};

export default ResumeBuilder;