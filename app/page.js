"use client";

import IdeaGenerator from "../components/IdeaGenerator";
import PricingCalculator from "../components/PricingCalculator";
import LaunchChecklist from "../components/LaunchChecklist";

export default function Page() {
  return (
    <div className="grid">
      <section className="card">
        <h2>Idea Generator</h2>
        <IdeaGenerator />
      </section>

      <section className="card">
        <h2>Pricing Calculator</h2>
        <PricingCalculator />
      </section>

      <section className="card">
        <h2>Launch Checklist</h2>
        <LaunchChecklist />
      </section>

      <section className="card muted">
        <h2>Tips for Selling on Gumroad</h2>
        <ul className="bullets">
          <li><strong>Niche down</strong>: Serve a specific audience and problem.</li>
          <li><strong>Show outcomes</strong>: Demo the result your buyer gets.</li>
          <li><strong>Bundle wisely</strong>: Starter + Pro tiers with clear differentiators.</li>
          <li><strong>Launch fast</strong>: Ship an MVP, then iterate with free updates.</li>
          <li><strong>Distribution</strong>: Share behind-the-scenes, collect emails early.</li>
        </ul>
      </section>
    </div>
  );
}
