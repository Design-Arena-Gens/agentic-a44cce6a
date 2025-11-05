"use client";

import { useMemo, useState } from "react";

const audiences = [
  "Notion power users",
  "Indie hackers",
  "YouTube creators",
  "Freelance designers",
  "Newsletter writers",
  "Shopify store owners",
  "Early-career developers",
  "AI enthusiasts",
  "Product managers",
  "Podcast hosts",
  "Students + grads",
  "Solopreneur consultants",
];

const problems = [
  "save time on repetitive tasks",
  "grow audience without ads",
  "launch a product in a weekend",
  "turn ideas into content consistently",
  "close more clients at higher rates",
  "ship polished visuals faster",
  "validate an idea before coding",
  "organize knowledge for faster output",
  "turn analytics into clear actions",
  "reduce context switching",
];

const formats = [
  "Notion system",
  "prompt pack",
  "Figma UI kit",
  "icon pack",
  "SaaS-in-a-box template",
  "Google Sheets dashboard",
  "email course (5 days)",
  "short ebook (40 pages)",
  "Premiere/CapCut template",
  "Canva template bundle",
  "Lightroom preset pack",
];

const differentiators = [
  "with proven examples",
  "with plug-and-play templates",
  "with 1-click AI prompts",
  "with ready-to-use automations",
  "with step-by-step video walkthroughs",
  "with validated cold outreach scripts",
  "with 12 ready-made content briefs",
  "with pro-grade brand assets",
  "with real-world case studies",
  "with landing page copy blocks",
];

function rng(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

export default function IdeaGenerator() {
  const [seed, setSeed] = useState(Date.now());
  const [aud, setAud] = useState("");

  const idea = useMemo(() => {
    const audience = aud || rng(audiences);
    const title = `${rng(formats)} for ${audience}`;
    const subtitle = `Help ${audience.toLowerCase()} ${rng(problems)}`;
    const hook = `${rng(formats)} ${rng(differentiators)}`;
    const deliverables = [
      "Quickstart guide (PDF)",
      "Video walkthrough (30-45 mins)",
      "Templates + assets (ZIP)",
      "Update roadmap + versioned changelog",
    ];
    const price = Math.max(9, Math.round((title.length + subtitle.length) / 6));
    const angle = rng([
      "Build-in-public: share iterations and early wins",
      "Outcome-first landing: show before/after",
      "Create a free teaser (1 template) to collect emails",
      "Partner with 3 micro-creators for launch",
      "Offer limited-time founding buyer updates",
    ]);

    return { audience, title, subtitle, hook, deliverables, price, angle };
    // eslint-disable-next-line
  }, [seed, aud]);

  const copyToClipboard = async () => {
    const text = `Title: ${idea.title}\nSubtitle: ${idea.subtitle}\nHook: ${idea.hook}\nDeliverables: ${idea.deliverables.join(", ")}\nSuggested Price: $${idea.price}\nLaunch Angle: ${idea.angle}`;
    await navigator.clipboard.writeText(text);
    alert("Idea copied to clipboard ?");
  };

  return (
    <div>
      <label className="label">Audience (optional)</label>
      <input
        className="input"
        placeholder="e.g. Notion freelancers"
        value={aud}
        onChange={(e) => setAud(e.target.value)}
      />

      <div style={{ height: 12 }} />

      <div className="kv">
        <div>
          <div style={{ fontWeight: 700, fontSize: 16 }}>{idea.title}</div>
          <div className="pill">{idea.subtitle}</div>
        </div>
        <button className="button inline" onClick={() => setSeed(Date.now())}>Generate</button>
      </div>

      <div style={{ height: 12 }} />

      <div className="pill">{idea.hook}</div>

      <div style={{ height: 12 }} />

      <ul className="bullets">
        {idea.deliverables.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>

      <div style={{ height: 12 }} />

      <div className="row">
        <div className="pill">Suggested price: ${idea.price}</div>
        <div className="pill">Launch angle: {idea.angle}</div>
      </div>

      <div style={{ height: 12 }} />

      <div className="row">
        <button className="button" onClick={copyToClipboard}>Copy idea</button>
        <a className="button secondary" href="https://gumroad.com" target="_blank" rel="noreferrer">Open Gumroad</a>
      </div>
    </div>
  );
}
