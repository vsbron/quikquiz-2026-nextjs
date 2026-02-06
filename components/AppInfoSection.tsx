import SectionTitle from "@/components/ui/SectionTitle";

function AppInfoSection() {
  // Returned JSX
  return (
    <section className="text-section">
      <SectionTitle>App Info</SectionTitle>
      <p>
        <strong>QuikQuiz</strong> is a clean, lightweight quiz app built with{" "}
        <strong>Next.js (App Router)</strong>, <strong>TypeScript</strong>, and{" "}
        <strong>Tailwind CSS</strong>.
      </p>
      <p className="pb-6">
        It&apos;s designed as a portfolio-style project with a real-world
        structure: quizzes are loaded through API routes, results are calculated
        server-side, and the UI stays fast, responsive, and distraction-free.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold font-merriweather">
        What you can do
      </h2>
      <ul className="pb-6 list-disc">
        <li>Browse quiz categories and choose a difficulty level</li>
        <li>
          Play a 10-question multiple-choice quiz (including image-based
          questions)
        </li>
        <li>Get instant results with a visual breakdown</li>
        <li>Review the questions you got wrong</li>
        <li>
          Share your results via <strong>Telegram</strong>,
          <strong>WhatsApp</strong>, <strong>Reddit</strong>, and{" "}
          <strong>X (Twitter)</strong>
        </li>
        <li>Download your results as an image (screenshot export)</li>
        <li>
          Jump into a <strong>Random Quiz</strong> anytime
        </li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-bold font-merriweather">
        Technical details
      </h2>
      <ul className="pb-6 list-disc">
        <li>
          <b>Framework</b>: Next.js (App Router)
        </li>
        <li>
          <b>Language</b>: TypeScript
        </li>
        <li>
          <b>Styling</b>: Tailwind CSS
        </li>
        <li>
          <b>Icons</b>: HeroIcons
        </li>
        <li>
          <b>Charts</b>: Chart.js
        </li>
        <li>
          <b>Data Source</b>: Static quiz packs (no database)
        </li>
        <li>
          <b>API Layer</b>: Next.js Route Handlers
        </li>
        <li>
          <b>State</b>: Client-side state + sessionStorage
        </li>
        <li>
          <b>Responsiveness</b>: Optimized down to 360px
        </li>
        <li>
          <b>Deployment</b>: Vercel
        </li>
      </ul>

      <h3 className="text-lg sm:text-xl font-bold font-merriweather">Notes</h3>

      <p>
        QuikQuiz uses static quiz packs (no database) to keep the project
        lightweight, fast, and easy to deploy.
      </p>
    </section>
  );
}

export default AppInfoSection;
