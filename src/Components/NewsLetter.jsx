import { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("⚠️ Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("❌ Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Simulate async submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage("✅ You’ve successfully subscribed!");
      setEmail("");
    } catch (error) {
      console.error(error);
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto  py-12 text-center rounded-3xl bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white shadow-[0_0_25px_rgba(147,51,234,0.4)] border border-white/10">
      <h2 className="text-4xl font-bold mb-4 font-mono text-purple-400">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-gray-300 mb-8">
        Get exclusive gaming updates, developer news, and featured releases
        straight to your inbox.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          className="w-full sm:flex-1 p-3 rounded-md bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-3 rounded-md font-semibold transition-colors ${
            loading
              ? "bg-purple-500/60 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {message && (
        <p
          className={`mt-5 text-sm ${
            message.includes("✅")
              ? "text-green-400"
              : message.includes("❌")
              ? "text-red-400"
              : "text-yellow-400"
          }`}
        >
          {message}
        </p>
      )}
    </section>
  );
};

export default NewsLetter;
