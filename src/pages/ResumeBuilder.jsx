
import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import ResumePreview from '../components/ResumePreview';
import { Link } from 'react-router-dom';
import API from "../api/api";
const steps = ['Personal Info', 'Experience', 'Education', 'Skills', 'Projects'];

const ResumeBuilder = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [savedResumeId, setSavedResumeId] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("classic");
  const [saving, setSaving] = useState(false);
  const [downloading, setDownloading] = useState(false);
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
    alert('AI optimization would run here in production.');
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      const res = await API.post("/resume", {
        ...formData,
      });

      const resumeId = res?.data?.resume?._id;
      if (resumeId) {
        setSavedResumeId(resumeId);
      }

      alert("Resume saved successfully");
      return resumeId;
    } catch (err) {
      alert(err?.response?.data?.message || "Error saving resume");
      return null;
    } finally {
      setSaving(false);
    }
  };

  const handleDownload = async () => {
    try {
      setDownloading(true);

      let resumeId = savedResumeId;
      if (!resumeId) {
        resumeId = await handleSave();
      }

      if (!resumeId) {
        return;
      }

      const res = await API.get(`/resume/generate-pdf/${resumeId}`, {
        responseType: "blob",
        params: {
          template: selectedTemplate,
        },
      });

      const blob = new Blob([res.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "optimized-resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert(err?.response?.data?.message || "Error downloading PDF");
    } finally {
      setDownloading(false);
    }
  };

  const progress = ((activeStep + 1) / steps.length) * 100;

  const renderStep = () => {
    const textareaStyle =
      "w-full rounded-xl bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 resize-none";

    switch (activeStep) {
      case 0:
        return (
          <>
            <Input label="Full name" value={formData.fullName} onChange={handleChange('fullName')} />
            <Input label="Headline" value={formData.headline} onChange={handleChange('headline')} />
            <Input label="Email" type="email" value={formData.email} onChange={handleChange('email')} />
            <Input label="Phone" value={formData.phone} onChange={handleChange('phone')} />
            <Input label="Location" value={formData.location} onChange={handleChange('location')} />
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Summary</label>
              <textarea
                rows={4}
                className={textareaStyle}
                value={formData.summary}
                onChange={handleChange('summary')}
              />
            </div>
          </>
        );
      case 1:
        return (
          <>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Experience
            </label>
            <textarea
              rows={8}
              className={textareaStyle}
              value={formData.experience}
              onChange={handleChange('experience')}
            />
          </>
        );
      case 2:
        return (
          <>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Education
            </label>
            <textarea
              rows={4}
              className={textareaStyle}
              value={formData.education}
              onChange={handleChange('education')}
            />
          </>
        );
      case 3:
        return (
          <>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Skills
            </label>
            <textarea
              rows={4}
              className={textareaStyle}
              value={formData.skills}
              onChange={handleChange('skills')}
            />
          </>
        );
      case 4:
        return (
          <>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Projects
            </label>
            <textarea
              rows={6}
              className={textareaStyle}
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
    <div className="relative text-white space-y-8">

      {/* Glow Background */}
      <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-indigo-600/20 blur-[160px] rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-purple-600/20 blur-[160px] rounded-full" />

      {/* Header */}
      <div>
        <Link
          to="/app/home"
          className="inline-flex items-center text-xs text-gray-400 hover:text-white transition"
        >
          ← Back to home
        </Link>

        <h1 className="mt-4 text-2xl font-semibold">
          Resume Builder
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          Craft a clean, ATS-optimized resume step by step.
        </p>
      </div>

      {/* Layout Grid */}
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1.1fr]">

        {/* LEFT SIDE */}
        <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>{steps[activeStep]}</span>
              <span>{activeStep + 1} / {steps.length}</span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full">
              <div
                className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="space-y-5">
            {renderStep()}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="px-5 py-2 text-xs border-white/20 text-gray-300 hover:bg-white/10"
                onClick={handleBack}
                disabled={activeStep === 0 || saving || downloading}
              >
                Back
              </Button>

              <Button
                type="button"
                className="px-5 py-2 text-xs bg-gradient-to-r from-indigo-500 to-purple-600 border-0 hover:scale-105 transition"
                onClick={handleNext}
                disabled={activeStep === steps.length - 1 || saving || downloading}
              >
                Next
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3">

              <select
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="rounded-xl border border-white/20 bg-[#111118] px-3 py-2 text-xs text-white"
              >
                <option value="classic">Classic Template</option>
                <option value="modern">Modern Template</option>
                <option value="minimal">Minimal Template</option>
              </select>

              <Button
                type="button"
                variant="outline"
                className="px-5 py-2 text-xs border-white/20 text-gray-300 hover:bg-white/10"
                onClick={handleOptimize}
              >
                Optimize with AI
              </Button>

              <Button
                type="button"
                variant="outline"
                className="px-5 py-2 text-xs border-white/20 text-gray-300 hover:bg-white/10"
                onClick={handleSave}
                disabled={saving || downloading}
              >
                {saving ? "Saving..." : "Save Resume"}
              </Button>

              <Button
                type="button"
                className="px-5 py-2 text-xs bg-gradient-to-r from-indigo-500 to-purple-600 border-0 hover:scale-105 transition"
                onClick={handleDownload}
                disabled={saving || downloading}
              >
                {downloading ? "Downloading..." : "Download PDF"}
              </Button>

            </div>
          </div>
        </Card>

        {/* RIGHT SIDE PREVIEW */}
        <ResumePreview
          data={formData}
          selectedTemplate={selectedTemplate}
          activeStep={activeStep}
        />

      </div>
    </div>
  );
};

export default ResumeBuilder;
