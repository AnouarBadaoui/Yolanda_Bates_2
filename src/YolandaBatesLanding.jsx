export default function YolandaBatesLanding() {
  return (
    <main className="min-h-screen bg-[#d26c4e] text-white font-serif">
      <section className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-20 gap-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">Reclaim Your Thinking</h1>
          <p className="mt-6 text-lg md:text-xl text-white max-w-xl">
            A soulful guide to clearing inherited noise and tuning into your own deeper knowing. Written by Yolanda Bates, a
            multidisciplinary thinker rooted in Creole and Afro-Caribbean lineage.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-[#d26c4e] px-6 py-3 rounded-2xl shadow hover:bg-neutral-100 transition">
              Buy the Book
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-2xl hover:bg-[#e27854] transition">
              Read an Excerpt
            </button>
          </div>
        </div>
        <div>
          <img
            src="/yolanda-bates-portrait.jpg"
            alt="Yolanda Bates author portrait"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
      </section>
      <section className="bg-white text-[#333] py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-medium mb-6">About Yolanda</h2>
        <p className="text-lg text-neutral-700 max-w-3xl">
          Born in Saint Lucia in 1978 and raised in San Francisco, Yolanda Bates is a self-made woman, somatic educator,
          and spiritual writer. Her work integrates ancestral memory, energetic clarity, and personal sovereignty. She leads
          quiet retreats in the redwoods of Northern California and writes for those ready to think—and live—differently.
        </p>
      </section>
      <section className="bg-[#f4e6dc] py-20 px-6 md:px-20 text-[#5b2b17]">
        <h2 className="text-3xl font-medium mb-6">Join Yolanda's Circle</h2>
        <p className="mb-6 max-w-2xl">
          Receive seasonal letters from Yolanda—insightful reflections, audio meditations, and early access to her retreats
          and writings.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 flex-1"
          />
          <button
            type="submit"
            className="bg-[#d26c4e] text-white px-6 py-3 rounded-lg shadow hover:bg-[#b3593b] transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
