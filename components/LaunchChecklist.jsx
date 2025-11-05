"use client";

import { useEffect, useState } from "react";

const groups = [
  {
    title: "Validation",
    items: [
      "Define audience + outcome",
      "Post teaser and collect 10 emails",
      "Run 3 customer interviews",
      "Share a free sample and get feedback",
    ],
  },
  {
    title: "Build",
    items: [
      "Create v1 deliverables",
      "Record short walkthrough video",
      "Write change log + update policy",
      "Prepare screenshots + demo GIF",
    ],
  },
  {
    title: "Listing",
    items: [
      "Clear title: outcome + audience",
      "3 bullet benefits, not features",
      "Add tiers with comparisons",
      "Add FAQ + refund policy",
    ],
  },
  {
    title: "Launch",
    items: [
      "Post build thread + demo video",
      "Partner with 3 micro-creators",
      "Offer launch discount for 72 hours",
      "Email list: story + outcomes",
    ],
  },
  {
    title: "Growth",
    items: [
      "Collect testimonials + results",
      "Ship v1.1 update in 1-2 weeks",
      "Publish 2 how-to mini-guides",
      "Add an affiliate program",
    ],
  },
];

export default function LaunchChecklist() {
  const [done, setDone] = useState({});

  useEffect(() => {
    const raw = localStorage.getItem("checklist");
    if (raw) setDone(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem("checklist", JSON.stringify(done));
  }, [done]);

  const toggle = (key) => setDone((d) => ({ ...d, [key]: !d[key] }));

  return (
    <div>
      {groups.map((g) => (
        <div key={g.title} className="card" style={{ background: "#0b1423", borderColor: "#1f2937", marginBottom: 12 }}>
          <h3 style={{ marginTop: 0 }}>{g.title}</h3>
          <ul className="bullets">
            {g.items.map((it) => {
              const key = `${g.title}:${it}`;
              return (
                <li key={key} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <input type="checkbox" checked={!!done[key]} onChange={() => toggle(key)} />
                  <span style={{ textDecoration: done[key] ? "line-through" : "none" }}>{it}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
