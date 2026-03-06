function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function parseResumeContent(content = "") {
  const text = String(content || "");

  const extractSingle = (label) => {
    const match = text.match(new RegExp(`^${label}:\\s*(.*)$`, "m"));
    return (match?.[1] || "").trim();
  };

  const extractBlock = (label, nextLabels) => {
    const nextPattern = nextLabels.length
      ? `\\n(?:${nextLabels.join("|")}):`
      : "$";
    const regex = new RegExp(`${label}:\\n([\\s\\S]*?)${nextPattern}`, "m");
    const match = text.match(regex);
    return (match?.[1] || "").trim();
  };

  const fullName = extractSingle("FULL_NAME") || "Alex Candidate";
  const headline = extractSingle("HEADLINE") || "Product Designer";
  const email = extractSingle("EMAIL") || "alex.candidate@email.com";
  const phone = extractSingle("PHONE") || "+1 (555) 555-0100";
  const location = extractSingle("LOCATION") || "Remote · Anywhere";

  const summary = extractBlock("SUMMARY", ["EXPERIENCE"]);
  const experience = extractBlock("EXPERIENCE", ["EDUCATION"]);
  const education = extractBlock("EDUCATION", ["SKILLS"]);
  const skills = extractBlock("SKILLS", ["PROJECTS"]);
  const projects = extractBlock("PROJECTS", []);

  return {
    fullName,
    headline,
    email,
    phone,
    location,
    summary,
    experience,
    education,
    skills,
    projects,
  };
}

function toParagraphs(text = "") {
  return escapeHtml(text)
    .split(/\n+/)
    .filter(Boolean)
    .map((line) => `<p>${line}</p>`)
    .join("");
}

function toBulletList(text = "") {
  const items = String(text)
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (!items.length) return "";

  return `<ul>${items
    .map((line) => `<li>${escapeHtml(line.replace(/^[-•]\s*/, ""))}</li>`)
    .join("")}</ul>`;
}

function classicTemplate(resume) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; margin: 38px; color: #334155; }
    h1 { margin: 0; color: #0f172a; font-size: 30px; }
    h2 { margin: 4px 0 0; color: #4f46e5; font-size: 20px; }
    .meta { margin-top: 8px; color: #64748b; font-size: 14px; }
    hr { border: none; border-top: 1px solid #cbd5e1; margin: 18px 0 20px; }
    .section-title { margin: 18px 0 8px; font-size: 13px; letter-spacing: .22em; color: #64748b; font-weight: 700; }
    p { margin: 0 0 8px; line-height: 1.6; }
    ul { margin: 6px 0 0 18px; padding: 0; }
    li { margin: 0 0 6px; line-height: 1.6; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  </style>
</head>
<body>
  <h1>${escapeHtml(resume.fullName)}</h1>
  <h2>${escapeHtml(resume.headline)}</h2>
  <div class="meta">${escapeHtml(resume.email)} · ${escapeHtml(resume.phone)} · ${escapeHtml(resume.location)}</div>
  <hr />

  <div class="section-title">SUMMARY</div>
  ${toParagraphs(resume.summary)}

  <div class="section-title">EXPERIENCE</div>
  ${toBulletList(resume.experience) || toParagraphs(resume.experience)}

  <div class="grid">
    <div>
      <div class="section-title">EDUCATION</div>
      ${toParagraphs(resume.education)}
    </div>
    <div>
      <div class="section-title">SKILLS</div>
      ${toParagraphs(resume.skills)}
    </div>
  </div>

  <div class="section-title">PROJECTS</div>
  ${toBulletList(resume.projects) || toParagraphs(resume.projects)}
</body>
</html>`;
}

function modernTemplate(resume) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; margin: 0; color: #111827; background: #f3f4f6; }
    .page { padding: 28px; }
    .card { background: #fff; border-radius: 16px; overflow: hidden; border: 1px solid #e5e7eb; }
    .head { padding: 24px 26px; background: linear-gradient(135deg, #4f46e5, #7c3aed); color: #fff; }
    .head h1 { margin: 0; font-size: 30px; }
    .head h2 { margin: 6px 0 0; font-size: 18px; font-weight: 500; color: #e0e7ff; }
    .head .meta { margin-top: 10px; font-size: 13px; color: #e0e7ff; }
    .body { padding: 22px 26px 24px; }
    .section-title { margin: 14px 0 8px; font-size: 12px; letter-spacing: .2em; color: #4f46e5; font-weight: 700; }
    p { margin: 0 0 8px; line-height: 1.6; }
    ul { margin: 6px 0 0 18px; padding: 0; }
    li { margin: 0 0 6px; line-height: 1.55; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
  </style>
</head>
<body>
  <div class="page">
    <div class="card">
      <div class="head">
        <h1>${escapeHtml(resume.fullName)}</h1>
        <h2>${escapeHtml(resume.headline)}</h2>
        <div class="meta">${escapeHtml(resume.email)} · ${escapeHtml(resume.phone)} · ${escapeHtml(resume.location)}</div>
      </div>
      <div class="body">
        <div class="section-title">SUMMARY</div>
        ${toParagraphs(resume.summary)}

        <div class="section-title">EXPERIENCE</div>
        ${toBulletList(resume.experience) || toParagraphs(resume.experience)}

        <div class="grid">
          <div>
            <div class="section-title">EDUCATION</div>
            ${toParagraphs(resume.education)}
          </div>
          <div>
            <div class="section-title">SKILLS</div>
            ${toParagraphs(resume.skills)}
          </div>
        </div>

        <div class="section-title">PROJECTS</div>
        ${toBulletList(resume.projects) || toParagraphs(resume.projects)}
      </div>
    </div>
  </div>
</body>
</html>`;
}

function minimalTemplate(resume) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Georgia, 'Times New Roman', serif; margin: 46px; color: #111827; }
    h1 { margin: 0; font-size: 34px; font-weight: 400; }
    h2 { margin: 6px 0 0; font-size: 18px; font-weight: 400; color: #374151; }
    .meta { margin-top: 10px; color: #6b7280; font-size: 13px; }
    .section-title { margin: 20px 0 8px; font-size: 12px; letter-spacing: .22em; color: #4b5563; border-bottom: 1px solid #e5e7eb; padding-bottom: 4px; }
    p { margin: 0 0 9px; line-height: 1.75; }
    ul { margin: 6px 0 0 18px; padding: 0; }
    li { margin: 0 0 6px; line-height: 1.7; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  </style>
</head>
<body>
  <h1>${escapeHtml(resume.fullName)}</h1>
  <h2>${escapeHtml(resume.headline)}</h2>
  <div class="meta">${escapeHtml(resume.email)} · ${escapeHtml(resume.phone)} · ${escapeHtml(resume.location)}</div>

  <div class="section-title">SUMMARY</div>
  ${toParagraphs(resume.summary)}

  <div class="section-title">EXPERIENCE</div>
  ${toBulletList(resume.experience) || toParagraphs(resume.experience)}

  <div class="grid">
    <div>
      <div class="section-title">EDUCATION</div>
      ${toParagraphs(resume.education)}
    </div>
    <div>
      <div class="section-title">SKILLS</div>
      ${toParagraphs(resume.skills)}
    </div>
  </div>

  <div class="section-title">PROJECTS</div>
  ${toBulletList(resume.projects) || toParagraphs(resume.projects)}
</body>
</html>`;
}

function resumeTemplate(content, template = "classic") {
  const parsed = parseResumeContent(content);
  if (template === "modern") return modernTemplate(parsed);
  if (template === "minimal") return minimalTemplate(parsed);
  return classicTemplate(parsed);
}

module.exports = resumeTemplate;

