import React, { useState } from "react";
import API from "../api/api";
import Card from "../components/Card";
import Button from "../components/Button";
import ATSProgressCircle from "../components/ATSProgressCircle";
import { Link } from "react-router-dom";

const ATSPage = () => {

const [resumeText,setResumeText] = useState("");
const [jobDescription,setJobDescription] = useState("");

const [score,setScore] = useState(0);
const [matchedKeywords,setMatchedKeywords] = useState([]);
const [missingKeywords,setMissingKeywords] = useState([]);

const [loading,setLoading] = useState(false);

const analyzeATS = async () => {

if(!resumeText || !jobDescription){
alert("Please enter resume and job description");
return;
}

try{

setLoading(true);

const res = await API.post("/ats",{
resumeText,
jobDescription
});

setScore(res.data.score);
setMatchedKeywords(res.data.matchedKeywords);
setMissingKeywords(res.data.missingKeywords);

setLoading(false);

}catch(err){

console.log(err);
alert("Error analyzing resume");

}

};

const scoreColor =
score >= 85
? "text-emerald-400"
: score >= 70
? "text-yellow-400"
: "text-red-400";

return (

<div className="relative text-white space-y-8">

{/* Background glow */}
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
ATS Resume Checker
</h1>

<p className="mt-1 text-sm text-gray-400">
Paste your resume and job description to calculate ATS compatibility.
</p>

</div>

{/* Input section */}

<Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">

<div className="grid gap-6 md:grid-cols-2">

<div>

<label className="text-sm text-gray-300">
Paste Resume
</label>

<textarea
rows={10}
value={resumeText}
onChange={(e)=>setResumeText(e.target.value)}
className="mt-2 w-full rounded-xl bg-transparent border border-white/20 px-4 py-3 text-sm"
placeholder="Paste your resume text here"
/>

</div>

<div>

<label className="text-sm text-gray-300">
Paste Job Description
</label>

<textarea
rows={10}
value={jobDescription}
onChange={(e)=>setJobDescription(e.target.value)}
className="mt-2 w-full rounded-xl bg-transparent border border-white/20 px-4 py-3 text-sm"
placeholder="Paste the job description"
/>

</div>

</div>

<div className="mt-6">

<Button
onClick={analyzeATS}
className="px-6 py-2 text-sm bg-gradient-to-r from-indigo-500 to-purple-600 border-0 hover:scale-105 transition"
>
{loading ? "Analyzing..." : "Analyze ATS Score"}
</Button>

</div>

</Card>

{/* Results */}

<Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">

<div className="flex flex-col md:flex-row gap-8">

<div className="flex flex-col items-center">

<ATSProgressCircle score={score} />

<p className={`mt-4 text-3xl font-bold ${scoreColor}`}>
{score} / 100
</p>

</div>

<div className="flex-1 grid gap-6 md:grid-cols-2">

{/* Matched */}

<div>

<h3 className="text-xs uppercase tracking-wider text-emerald-400">
Matched Keywords
</h3>

<div className="mt-3 flex flex-wrap gap-2">

{matchedKeywords.length === 0 && (
<p className="text-gray-400 text-sm">
No matches yet
</p>
)}

{matchedKeywords.map((word)=>(
<span
key={word}
className="text-xs bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-400"
>
{word}
</span>
))}

</div>

</div>

{/* Missing */}

<div>

<h3 className="text-xs uppercase tracking-wider text-amber-400">
Missing Keywords
</h3>

<div className="mt-3 flex flex-wrap gap-2">

{missingKeywords.length === 0 && (
<p className="text-gray-400 text-sm">
No missing keywords
</p>
)}

{missingKeywords.map((word)=>(
<span
key={word}
className="text-xs bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-amber-400"
>
{word}
</span>
))}

</div>

</div>

</div>

</div>

</Card>

</div>

);

};

export default ATSPage;