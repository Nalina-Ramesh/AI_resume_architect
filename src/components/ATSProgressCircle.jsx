import React from 'react';

const ATSProgressCircle = ({ score = 72 }) => {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const normalizedScore = Math.min(Math.max(score, 0), 100);
  const offset = circumference - (normalizedScore / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center">
      <svg width="200" height="200" className="-rotate-90">
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth="12"
          r={radius}
          cx="100"
          cy="100"
        />
        <circle
          stroke="url(#atsGradient)"
          fill="transparent"
          strokeWidth="12"
          r={radius}
          cx="100"
          cy="100"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
        <defs>
          <linearGradient id="atsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <p className="text-3xl font-semibold text-slate-900">{normalizedScore}</p>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
          ATS Score
        </p>
      </div>
    </div>
  );
};

export default ATSProgressCircle;