import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

const CoverLetter = () => {
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [generated, setGenerated] = useState('');

  const handleGenerate = (e) => {
    e.preventDefault();
    // UI-only placeholder – replace with real AI call
    setGenerated(
      `Dear Hiring Manager,\n\nI’m excited to apply for the ${role || 'role'} at ${
        company || 'your company'
      }. Based on the job description, I believe my experience shipping thoughtful, user-centered products and collaborating with cross-functional teams would make me a strong addition to your team.\n\nIn my previous roles, I owned end-to-end projects from discovery to launch, partnered closely with stakeholders, and consistently delivered measurable impact. I’d love to bring the same energy, craft, and curiosity to ${company || 'your organization'}.\n\nThank you for your time and consideration.\n\nBest,\nAlex Candidate`
    );
  };

  const handleCopy = () => {
    if (generated) {
      navigator.clipboard?.writeText(generated);
      alert('Copied to clipboard (placeholder).');
    }
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)]">
      <Card>
        <Link
          to="/app/home"
          className="mb-2 inline-flex items-center text-xs text-slate-500 hover:text-slate-800"
        >
          <span className="mr-1">&#8592;</span> Back to home
        </Link>
        <h2 className="text-sm font-semibold text-slate-900">
          Cover letter generator
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          Provide a role and job description. We&apos;ll generate a structured, ATS-friendly cover
          letter you can fine-tune.
        </p>

        <form onSubmit={handleGenerate} className="mt-5 space-y-4 text-sm">
          <Input
            label="Role title"
            placeholder="Senior Product Designer"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <Input
            label="Company"
            placeholder="Notion"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Job description
            </label>
            <textarea
              rows={8}
              className="input-base resize-none"
              placeholder="Paste the job description here..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
            <p className="mt-1 text-xs text-slate-500">
              Tip: Include responsibilities, required skills, and nice-to-haves for the best
              results.
            </p>
          </div>
          <Button type="submit" className="w-full py-2.5 text-xs">
            Generate cover letter
          </Button>
        </form>
      </Card>

      <Card className="flex h-[480px] flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Preview
          </h3>
          <Button
            type="button"
            variant="outline"
            className="px-4 py-1.5 text-xs"
            onClick={handleCopy}
            disabled={!generated}
          >
            Copy
          </Button>
        </div>
        <div className="mt-3 flex-1 overflow-y-auto rounded-lg bg-slate-50 p-4 text-xs leading-relaxed text-slate-800 scrollbar-thin">
          {generated ? (
            <pre className="whitespace-pre-wrap font-sans text-xs">{generated}</pre>
          ) : (
            <p className="text-slate-500">
              Your generated cover letter will appear here. Once you connect your backend, this
              preview will reflect real AI output.
            </p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default CoverLetter;