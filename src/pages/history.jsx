import React from "react";

const historyData = [
  { id: 1, title: "Resume Optimization Session", date: "Today · 14:32" },
  { id: 2, title: "ATS Keyword Analysis", date: "Yesterday · 18:05" },
  { id: 3, title: "Cover Letter Rewrite", date: "2 days ago · 09:10" }
];

const History = () => {
  return (
    <div className="relative text-white">

      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-indigo-600/20 blur-[160px] rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-purple-600/20 blur-[160px] rounded-full" />

      <div className="relative z-10">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight">
            Chat History
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Revisit your previous AI sessions and insights.
          </p>
        </div>

        {/* History Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {historyData.map((item) => (
            <div
              key={item.id}
              className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl hover:scale-[1.02] transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start">

                <div>
                  <h3 className="text-lg font-medium">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-400 mt-2">
                    {item.date}
                  </p>
                </div>

                <div className="h-3 w-3 rounded-full bg-indigo-500 group-hover:scale-125 transition" />

              </div>

              <div className="mt-6 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30" />
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default History;