"use client";

import { FormEvent, useState } from "react";
import { mockPlan } from "@/lib/mock-plan";

type ChatItem =
  | {
      id: string;
      type: "message";
      role: "system" | "user" | "agent";
      author: string;
      text: string;
    }
  | {
      id: string;
      type: "artifact";
      label: string;
      title: string;
      description: string;
      action?: string;
      children: string[];
    };

const initialItems: ChatItem[] = [
  {
    id: "welcome",
    type: "message",
    role: "system",
    author: "Pulse OS",
    text: "Ready. Describe the next feature and I’ll turn it into a spec, affected folders, sandbox route, and build plan before anything touches main.",
  },
];

const agents = [
  { name: "Spec Writer", status: "Ready" },
  { name: "Coder", status: "Locked" },
  { name: "Tester", status: "Locked" },
  { name: "Marketing", status: "Idle" },
];

export function InterfaceChat() {
  const [message, setMessage] = useState("");
  const [items, setItems] = useState<ChatItem[]>(initialItems);

  const hasStarted = items.length > 1;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanMessage = message.trim();
    if (!cleanMessage) return;

    const generatedItems: ChatItem[] = [
      {
        id: crypto.randomUUID(),
        type: "message",
        role: "user",
        author: "You",
        text: cleanMessage,
      },
      {
        id: crypto.randomUUID(),
        type: "message",
        role: "agent",
        author: "Spec Writer",
        text: "Reading the request. I’m turning it into a controlled build plan instead of letting an agent fling code into your repo like a raccoon in a server room.",
      },
      {
        id: crypto.randomUUID(),
        type: "artifact",
        label: "Generated Spec",
        title: mockPlan.title,
        description: mockPlan.summary,
        action: "Approve Plan",
        children: [
          "Define the product behaviour clearly before coding starts.",
          "Identify database, API, UI, and testing changes.",
          "Open a sandbox branch before file edits.",
          "Hold Coder and Tester until approval.",
        ],
      },
      {
        id: crypto.randomUUID(),
        type: "artifact",
        label: "Folder Impact",
        title: "Repository areas to inspect",
        description:
          "Pulse OS would scan these areas before creating the sandbox build.",
        action: "Open Sandbox",
        children: [
          "app/",
          "components/",
          "components/interface/",
          "lib/",
          "types/",
          "supabase/migrations/",
        ],
      },
      {
        id: crypto.randomUUID(),
        type: "message",
        role: "agent",
        author: "Coder",
        text: "Waiting for plan approval. I will not modify files yet, which is apparently what separates a build system from a decorative chainsaw.",
      },
    ];

    setItems((current) => [...current, ...generatedItems]);
    setMessage("");
  }

  function useExample() {
    setMessage("Add live events that expire automatically after 3 hours");
  }

  return (
    <section className="interface-chat">
      <header className="chat-topbar">
        <div>
          <p className="eyebrow">Interface</p>
          <h1>{hasStarted ? "Pulse OS" : "Tell Pulse OS what to build."}</h1>
        </div>

        <div className="chat-meta">
          <span>Workspace: Pulse</span>
          <span>Branch: main</span>
          <span>Sandbox: Ready</span>
          <span>Route: Hybrid</span>
        </div>
      </header>

      <div className="agent-strip">
        {agents.map((agent) => (
          <div className="agent-chip" key={agent.name}>
            <strong>{agent.name}</strong>
            <span>{agent.status}</span>
          </div>
        ))}
      </div>

      <div className="chat-thread">
        {!hasStarted && (
          <button className="suggestion-card" type="button" onClick={useExample}>
            <span>Try this</span>
            Add live events that expire automatically after 3 hours
          </button>
        )}

        {items.map((item) => {
          if (item.type === "artifact") {
            return (
              <article className="chat-artifact" key={item.id}>
                <div className="artifact-heading">
                  <div>
                    <p>{item.label}</p>
                    <h2>{item.title}</h2>
                  </div>

                  {item.action && <button type="button">{item.action}</button>}
                </div>

                <p className="artifact-description">{item.description}</p>

                <div className="artifact-list">
                  {item.children.map((child) => (
                    <span key={child}>{child}</span>
                  ))}
                </div>
              </article>
            );
          }

          return (
            <article className={`chat-message ${item.role}`} key={item.id}>
              <strong>{item.author}</strong>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>

      <form className="chat-composer" onSubmit={handleSubmit}>
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Describe the next feature..."
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}