/*import React, { useState } from 'react';
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

export default CoverLetter;*/
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
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();

    if (!role && !company && !jobDescription) return;

    setLoading(true);

    // Simulated AI generation
    setTimeout(() => {
      setGenerated(
`Dear Hiring Manager,

I’m excited to apply for the ${role || 'role'} position at ${company || 'your company'}.

After reviewing the job description, I’m confident that my experience delivering thoughtful, user-centered solutions and collaborating cross-functionally would allow me to contribute meaningfully to your team.

In previous roles, I’ve led projects from discovery through launch, partnered closely with stakeholders, and delivered measurable impact through experimentation and strategic thinking.

I would welcome the opportunity to bring that same level of ownership, craft, and curiosity to ${company || 'your organization'}.

Thank you for your time and consideration.

Best regards,
Alex Candidate`
      );
      setLoading(false);
    }, 1200);
  };

  const handleCopy = async () => {
    if (!generated) return;

    await navigator.clipboard?.writeText(generated);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="relative text-white space-y-8">

      {/* Background Glow */}
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
          AI Cover Letter Generator
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          Generate tailored, ATS-friendly cover letters in seconds.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 lg:grid-cols-[1.05fr_1.2fr]">

        {/* LEFT: Form */}
        <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

          <form onSubmit={handleGenerate} className="space-y-5">

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
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Job description
              </label>
              <textarea
                rows={8}
                className="w-full rounded-xl bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 resize-none"
                placeholder="Paste the job description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
              <p className="mt-2 text-xs text-gray-500">
                Include responsibilities, required skills, and nice-to-haves for best results.
              </p>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full py-3 text-sm bg-gradient-to-r from-indigo-500 to-purple-600 border-0 hover:scale-105 transition duration-300 disabled:opacity-60"
            >
              {loading ? 'Generating...' : 'Generate cover letter'}
            </Button>

          </form>
        </Card>

        {/* RIGHT: Preview */}
        <Card className="flex flex-col h-[520px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">

          <div className="flex items-center justify-between">
            <h3 className="text-xs uppercase tracking-[0.25em] text-indigo-400">
              Preview
            </h3>

            <Button
              type="button"
              variant="outline"
              className="px-4 py-1.5 text-xs border-white/20 text-gray-300 hover:bg-white/10"
              onClick={handleCopy}
              disabled={!generated}
            >
              {copied ? 'Copied ✓' : 'Copy'}
            </Button>
          </div>

          <div className="mt-5 flex-1 overflow-y-auto rounded-xl bg-black/30 border border-white/10 p-5 text-sm leading-relaxed text-gray-200 scrollbar-thin">

            {generated ? (
              <pre className="whitespace-pre-wrap font-sans">
                {generated}
              </pre>
            ) : (
              <div className="flex h-full items-center justify-center text-gray-500 text-sm text-center px-6">
                Your generated cover letter will appear here.
                <br />
                Connect your backend to replace this simulated AI output.
              </div>
            )}

          </div>

        </Card>

      </div>
    </div>
  );
};

export default CoverLetter;