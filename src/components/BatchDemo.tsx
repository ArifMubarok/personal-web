"use client";

import { useId, useState } from "react";

export default function BatchDemo() {
  const [batch, setBatch] = useState(50);
  const id = useId();
  const runs = Math.ceil(400 / batch);

  return (
    <div className="mt-8 max-w-sm">
      <label htmlFor={id} className="block" style={{ fontSize: "var(--step-small)", color: "var(--muted)" }}>
        Drag to change the e-Invoice batch size
      </label>
      <input
        id={id}
        type="range"
        min={1}
        max={50}
        value={batch}
        onChange={(e) => setBatch(Number(e.target.value))}
        className="mt-3 w-full accent-ink"
      />
      <p className="mt-3" aria-live="polite" style={{ fontSize: "var(--step-body)" }}>
        <strong className="font-semibold">{batch}</strong> invoice{batch === 1 ? "" : "s"} per submission. A
        400-invoice run takes <strong className="font-semibold">{runs}</strong> API submission{runs === 1 ? "" : "s"}{" "}
        instead of 400.
      </p>
    </div>
  );
}
