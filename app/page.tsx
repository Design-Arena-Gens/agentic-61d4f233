"use client";

import { useMemo, useState } from "react";

const greetings = [
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "Namaste",
  "Konnichiwa",
  "Salaam",
  "Hej",
  "Aloha"
];

const affirmations = [
  "You're exactly where you need to be.",
  "Momentum starts with a single hello.",
  "The future is brighter than you think.",
  "Small sparks become the brightest ideas.",
  "Today is yours to shape.",
  "You are the catalyst for what's next."
];

function randomFrom<T>(collection: T[], previous?: T): T {
  if (collection.length === 1) {
    return collection[0];
  }

  let selection = collection[Math.floor(Math.random() * collection.length)];
  while (selection === previous) {
    selection = collection[Math.floor(Math.random() * collection.length)];
  }
  return selection;
}

export default function HomePage() {
  const [greeting, setGreeting] = useState(() => randomFrom(greetings));
  const [affirmation, setAffirmation] = useState(() => randomFrom(affirmations));
  const [count, setCount] = useState(0);

  const tone = useMemo(() => {
    if (count === 0) return "Let's start.";
    if (count < 3) return "The energy is rising.";
    if (count < 6) return "You're on a roll.";
    return "Unstoppable momentum.";
  }, [count]);

  const handleRefresh = () => {
    setGreeting((current) => randomFrom(greetings, current));
    setAffirmation((current) => randomFrom(affirmations, current));
    setCount((value) => value + 1);
  };

  return (
    <main>
      <section className="card" aria-live="polite">
        <div className="section-title">
          <span className="sparkle" aria-hidden="true" />
          <span>Agentic Hello</span>
        </div>
        <h1>{greeting}, trailblazer.</h1>
        <p>{affirmation}</p>
        <button type="button" onClick={handleRefresh}>
          Refresh the vibe
        </button>
        <div className="badge-grid" role="list">
          <div className="badge" role="listitem">
            <span>Interactions</span>
            <strong>{count}</strong>
          </div>
          <div className="badge" role="listitem">
            <span>Current Mode</span>
            <strong>{tone}</strong>
          </div>
        </div>
        <div className="timeline" aria-label="Mood timeline">
          <article className="timeline-item">
            <time>00:00</time>
            <p>We met with a spark of curiosity.</p>
          </article>
          <article className="timeline-item">
            <time>00:02</time>
            <p>Ideas started orbiting around shared possibilities.</p>
          </article>
          <article className="timeline-item">
            <time>00:05</time>
            <p>Confidence aligned with ambition. You kept the momentum.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
