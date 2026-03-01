import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setLoading(true);

    // Simulated API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#0f0f13] text-white overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-pink-600/20 blur-[150px] rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-purple-600/20 blur-[150px] rounded-full" />

      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl">

        <h2 className="text-2xl font-semibold text-center">
          Forgot Password?
        </h2>

        <p className="mt-2 text-sm text-gray-400 text-center">
          Enter your email and we'll send you a reset link.
        </p>

        {!success ? (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            <div>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
              {error && (
                <p className="mt-2 text-xs text-red-400">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 font-semibold hover:scale-105 transition duration-300 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>

          </form>
        ) : (
          <div className="mt-8 text-center space-y-4">
            <div className="text-green-400 font-medium">
              ✅ Reset link sent successfully!
            </div>
            <p className="text-sm text-gray-400">
              Please check your email for further instructions.
            </p>
          </div>
        )}

        <p className="mt-8 text-xs text-gray-400 text-center">
          Back to{" "}
          <Link
            to="/login"
            className="text-purple-400 hover:text-pink-400 transition"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default ForgotPassword;