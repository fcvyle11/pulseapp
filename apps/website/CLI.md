# TARGET ARCHITECTURE & SPEC: THE ONE-MAN SOCIAL ENGINE
Project Name: "What's Around Me" Local Network
Owner/CTO: [Your Name]
Objective: Build, launch, and market a hyper-local social network using a 4-Agent Autonomous Team controlled by a custom CLI with hybrid local-model routing.

=========================================
1. SYSTEM OVERVIEW: WHAT THIS MACHINE DOES
=========================================
This system transforms a single programmer into a full tech company. 
- It builds a hyper-local mobile/web app that maps real-time events within a walking radius.
- It automates code generation, debugging, and quality control via sandboxed Git branches.
- It slices complex tasks into strict sub-topics to keep agents focused and accurate.
- It routes low-level boilerplate and tests to zero-cost local models on your laptop.
- It automates social media marketing (Instagram/TikTok) to drive user growth entirely on autopilot.

=========================================
2. THE 4-AGENT ARMY ROLES & RESPONSIBILITIES
=========================================

AGENT 1: THE SPEC WRITER (Product Manager)
- Task: Turns your rough, conversational ideas into exact technical requirements.
- Routing: Powered by Cloud Models (Claude 3.5 Sonnet / GPT-4o) for high-level reasoning.
- Execution: Scans your repository via the CLI parser. Generates a 'FEATURE_SPEC.md' file outlining database schema changes, API endpoints, UI layouts, and potential edge cases.
- Value: Eliminates planning paralysis. Gives the coder a foolproof blueprint.

AGENT 2: THE CODER (Software Engineer)
- Task: Executes the blueprint written by the Spec Writer inside a sandboxed environment.
- Routing: Hybrid. Uses Cloud Models for complex integration logic, and Local Models (via Ollama) for repetitive styling, TypeScript types, and simple boilerplate.
- Execution: Processes tasks strictly layered by sub-topics (Backend -> Frontend -> Integration). Modifies project files, writes clean TypeScript/JavaScript, and sets up backend queries (like PostGIS geolocation data).
- Value: Eliminates tedious typing. Writes hundreds of lines of boilerplate and logic in seconds.

AGENT 3: THE TESTER (QA Engineer)
- Task: Breaks the Coder's work before a human ever reviews it.
- Routing: Local Model (Ollama Qwen2.5-Coder) to save on API token consumption.
- Execution: Interacts with the local terminal environment. Automatically generates unit tests, runs compilation scripts, and simulates edge cases (e.g., "What happens if GPS signals drop?"). 
- Feedback Loop: If a bug is found, it logs an error report and hands it back to the Coder. It repeats this loop automatically until the terminal reads 100% green.
- Value: Eliminates manual testing and debugging headaches.

AGENT 4: THE MARKETING ALCHEMIST (Social Media Manager & Scheduler)
- Task: Growth hacking and external marketing on autopilot.
- Routing: Cloud Model for human-sounding copy and trending pattern matching.
- Execution: Monitors the app's production database for trending local posts or map events. Uses an LLM to package these into viral-style social media posts (images, captions, hashtags).
- Automation: Directly interfaces with Meta/Instagram Graph APIs via scheduled cron-jobs to publish daily content, showing external users exactly what is happening in the app right now.
- Value: Solves the "empty room" problem by pulling external traffic directly to your network.

=========================================
3. THE TECH STACK FOUNDATION
=========================================
To keep the agents highly efficient, the stack minimizes manual infrastructure configuration:
- Frontend: Expo / React Native (Allows a single codebase to run instantly on iOS and Android with built-in GPS/Map access).
- Backend: Supabase (Postgres database with PostGIS enabled natively for immediate distance-based queries, plus instant Auth).
- Interface: Custom Node.js or Python CLI script executed directly in your native terminal on your Acer laptop.
- Local AI Engine: Ollama running local coder models (e.g., Qwen2.5-Coder-7B) exposed at `http://localhost:11434`.

=========================================
4. ACCESS & CONTROL: YOUR PROPRIETARY CLI INTERFACE
=========================================

STEP 1: THE HOME BASE
- You interact with your entire agent army using a lightweight, custom-built CLI tool (e.g., initialized via terminal as `mesh`).
- Core logic relies on simple local scripts communicating with Cloud APIs or Ollama depending on task size.

STEP 2: THE SANDBOX SAFETY NET (No Hidden Code Changes)
- Agents never write code directly into your active working directory.
- When an objective is initiated, the CLI automatically spins up an isolated temporary Git branch (e.g., `agent/live-events`).
- The Coder and Tester operate exclusively inside this hidden sandbox branch.

STEP 3: THE SUB-TOPIC PIPELINE (Avoiding Context Drift)
- The CLI enforces a strict execution pipeline:
  1. Backend Sub-Task: The Coder writes database migrations and endpoints. Tester verifies.
  2. Frontend Sub-Task: The CLI shifts focus exclusively to UI layouts and components. Tester verifies.
  3. Integration Sub-Task: The Coder hooks the UI components to the new API endpoints. Final validation occurs.

STEP 4: THE VISUAL CODE REVIEW
- Once the Tester agent successfully hits a 100% green build status inside the sandbox, the CLI halts and alerts you.
- The CLI runs a native `git diff --color` command directly in your terminal screen.
- It displays a clean, visual representation of the proposed changes: deleted lines in bright red, new agent lines in bright green.
- The system prompts: `Merge feature to main? (y/n)`. No code ever enters your main project file until you physically type `y`.

=========================================
5. DAILY OPERATIONAL WORKFLOW: HOW YOU USE IT
=========================================
When you sit down at your desk on your Acer, you operate purely as the Executive Director:

Step 1: The Input
You type a conversational request directly into your terminal interface:
`mesh brainstorm "I want to add a feature where users can tag a post as a 'Live Event' which expires automatically after 3 hours."`

Step 2: The Spec Approval
The Spec Writer prints out a technical markdown plan. You review it for 60 seconds, make any tweaks, and type: 
`mesh build --spec FEATURE_SPEC.md`

Step 3: The Autonomous Cycle
The CLI sandboxes the project. The Coder builds the backend tables and frontend buttons layer by layer, utilizing local models for small files and styles. The Tester runs the compilation checks and fixes bugs. They loop automatically until stable.

Step 4: The Push
The CLI prints out the visual green/red code comparison. You glance at the implementation, type `y` to accept, and your new feature is automatically merged and deployed.

Step 5: The Marketing Flow
Agent 4 independently detects the new live feature on your production server, scrapes a hot trending post, and triggers a background API call to schedule an Instagram post titled: "Don't miss out on what's happening down your street tonight. Live events map now active."
