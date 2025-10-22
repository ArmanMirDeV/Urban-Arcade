import { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Enter a valid email address.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Simulate server request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage(" You’ve successfully subscribed!");
      setEmail("");
    } catch (error) {
      console.error(error);
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 text-white py-16 px-6 text-center rounded-2xl shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-3">Subscribe to Our Newsletter</h2>
      <p className="text-gray-300 mb-6">
        Get the latest updates, exclusive content, and news directly to your
        inbox.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-3 rounded-md bg-white text-gray-900 flex-1 focus:outline-none"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className={`${
            loading ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700"
          } transition-colors px-6 py-3 rounded-md font-semibold`}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {message && <p className="mt-4 text-sm text-yellow-300">{message}</p>}
    </section>
  );
};

export default NewsLetter;
