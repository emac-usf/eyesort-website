// app/about/page.tsx

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">About EyeSort</h1>
      <p className="text-slate-300 mb-4">
        EyeSort is developed in the Eye Movements &amp; Cognition Lab (EMaC) at
        the University of South Florida. The toolbox is designed to make
        behavior-based event coding for eye-tracking/EEG studies transparent,
        reproducible, and scalable.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Team</h2>
      <ul className="list-disc list-inside text-slate-300 space-y-1">
        <li>Brandon Snyder – Developer</li>
        <li>Dr. Sara Milligan – Collaborator</li>
        <li>Dr. Elizabeth Schotter – Lab PI</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact</h2>
      <p className="text-slate-300">
        For questions, bug reports, or collaboration inquiries, please contact
        the EMaC Lab or the developer at{" "}
        <span className="font-mono">your-email@usf.edu</span> (replace with
        your preferred contact).
      </p>
    </main>
  );
}

