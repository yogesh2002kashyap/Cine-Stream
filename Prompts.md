# 🧠 Prompt Engineering Journal — Cine-Stream

> This document captures the actual prompts I used while building Cine-Stream, demonstrating my prompt engineering thinking throughout the development journey. Each prompt reflects a real problem I encountered and how I communicated it to get useful guidance.

---

## 📌 How to Read This Document

Each entry contains:
- **The situation** — what I was trying to do
- **My prompt** — exactly what I typed
- **What made it effective** — the prompt engineering skill demonstrated

---

## 🟢 Level 1 — Core Application

---

### Prompt 1 — Asking for a Roadmap

**Situation:** I received the Level 1 assignment and wanted a structured plan before writing any code.

**My Prompt:**
> "This is level 1: generate me a guide or roadmap.md file which has How to get started etc"

**Skill demonstrated:** Task scoping with deliverable format. Instead of asking "how do I build this?", I specified the output format (`.md file`) and the goal (getting started guide), making the response immediately actionable.

---

### Prompt 2 — Asking for a Tailwind Crash Course

**Situation:** I decided to use Tailwind CSS but needed to learn it quickly before building.

**My Prompt:**
> "I think Tailwind CSS is the right choice for this project, but I need a quick, practical crash course before I start building."

**Skill demonstrated:** Context-aware learning request. I anchored the request to the project ("for this project") so the crash course would be relevant to what I was actually building, not generic.

---

### Prompt 3 — Understanding a Specific CSS Concept

**Situation:** I saw the CSS Grid pattern in the roadmap and didn't fully understand it.

**My Prompt:**
> "`grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));` // Explain this"

**Skill demonstrated:** Precision questioning. Instead of asking "explain CSS Grid", I isolated the exact line I didn't understand and asked about that specifically — getting a focused, useful answer.

---

### Prompt 4 — Code Review with Context

**Situation:** I wrote my first fetch implementation and wanted it reviewed.

**My Prompt:**
> "I done till step 5 look at popular movie fetching" + [code snippet]

**Skill demonstrated:** Progress framing. I told the reviewer exactly where I was in the process ("step 5") so the feedback would be calibrated to that stage, not the whole project.

---

### Prompt 5 — Asking About a Real-World Blocker

**Situation:** TMDB website wasn't loading and I couldn't get my API key.

**My Prompt:**
> "I skip step 2 because TMDB website not loading how can i supposed to get an api key"

**Skill demonstrated:** Honest blocker communication. I clearly described the problem and the impact (can't proceed) rather than pretending the issue didn't exist. This got me a practical workaround (VPN suggestion).

---

### Prompt 6 — Specific UI Question During Signup

**Situation:** I was filling the TMDB form and hit an unfamiliar field.

**My Prompt:**
> "application URL"

**Skill demonstrated:** Minimal viable prompt. Sometimes the most effective prompt is the shortest one. Three words with clear context from the ongoing conversation got me the exact answer I needed.

---

### Prompt 7 — Choosing Between Two Options

**Situation:** TMDB offered two API authentication methods and I didn't know which to pick.

**My Prompt:**
> "What should i choose API read access token or API key"

**Skill demonstrated:** Binary decision framing. Presenting both options clearly led to a direct recommendation with reasoning, rather than a vague "it depends" answer.

---

### Prompt 8 — Architecture Decision Question

**Situation:** I wasn't sure whether to render MovieCard inside App.jsx or MovieGrid.jsx.

**My Prompt:**
> "Is movie card render inside App.jsx or MovieGrid.jsx"

**Skill demonstrated:** Architectural question clarity. Short, direct, and unambiguous — I named the exact components and asked about their relationship.

---

### Prompt 9 — Sharing Code for Review

**Situation:** I built the MovieCard component and wanted feedback.

**My Prompt:**
> "See movieCard" + [code snippet]

**Skill demonstrated:** Show don't tell. Rather than describing what I built, I shared the actual code — making the review concrete and catching bugs I couldn't see myself.

---

### Prompt 10 — Asking for Clarification on a Concept

**Situation:** I didn't understand the brace structure explanation.

**My Prompt:**
> "I don't understand the braces issue"

**Skill demonstrated:** Honest confusion signaling. I didn't pretend to understand or ask a vague follow-up. Directly admitting confusion led to a clearer visual explanation.

---

### Prompt 11 — Asking for a Specific Fix

**Situation:** I understood the problem but needed to know exactly where to make the change.

**My Prompt:**
> "just tell me where to add or remove braces"

**Skill demonstrated:** Scope narrowing. After understanding the concept, I refined my request to just the actionable part — avoiding re-explanation and getting straight to the fix.

---

### Prompt 12 — Verification Prompt

**Situation:** I made changes and wanted to confirm they were correct.

**My Prompt:**
> "is this correct" + [code snippet]

**Skill demonstrated:** Checkpoint prompting. Regularly checking in at key stages rather than building everything at once and debugging later.

---

## 🟡 Level 2 — Performance Mastery

---

### Prompt 13 — Asking for Level 2 Roadmap

**Situation:** Starting Level 2 and wanting the same structured approach as Level 1.

**My Prompt:**
> "make level 2 roadmap file as level 1"

**Skill demonstrated:** Reference-based prompting. Instead of describing the format again, I referenced the existing Level 1 roadmap as a template — saving time and ensuring consistency.

---

### Prompt 14 — Explaining Infinite Scroll Logic Before Coding

**Situation:** Before building infinite scroll, I thought through the logic.

**My Prompt:**
> "1. A page count state is required
> 2. setMovie(prev => (...prev, data.result)
> 3. Use Intersection Observer API, And use entry.intersectionRatio to find out current page is intersect any of"

**Skill demonstrated:** Think-aloud prompting. I shared my reasoning before asking for code, allowing the mentor to correct my thinking early rather than after I'd built the wrong thing.

---

### Prompt 15 — Catching an Error in the Roadmap

**Situation:** I spotted a problem with the two-useEffect pattern suggested in the roadmap.

**My Prompt:**
> "There is an error in feature 1 step 2 calling setState synchronously within an effect can trigger cascading renders"

**Skill demonstrated:** Critical evaluation of guidance. I didn't blindly follow the roadmap — I identified a React anti-pattern and called it out, demonstrating genuine understanding.

---

### Prompt 16 — Architecture Placement Question

**Situation:** I wasn't sure where the Intersection Observer code should live.

**My Prompt:**
> "Should i write Intersection observer inside App.jsx"

**Skill demonstrated:** Location-specific architecture question. Asking "where does this go?" before writing it — avoiding having to refactor later.

---

### Prompt 17 — Verifying Understanding Before Coding

**Situation:** Before implementing the Intersection Observer, I explained my understanding of the dependencies.

**My Prompt:**
> "1. Page count changes trigger first effect.
> 2. hasMore checks on Total_page count if last page reach no more page increase, isLoading prevents multiple fetching without it observer effect re-run.
> 3. disconnect observer after one re-run"

**Skill demonstrated:** Comprehension verification. Explaining back the concept in my own words before coding — a learning technique that catches misunderstandings early.

---

### Prompt 18 — BrowserRouter Placement Question

**Situation:** Setting up React Router and unsure about nesting with StrictMode.

**My Prompt:**
> "Feature 2 step 2 do i place BrowserRouter inside StrictMode"

**Skill demonstrated:** Specific nesting question. I named both components and asked about their relationship — getting a direct answer with a code example.

---

### Prompt 19 — How to Use a Custom Hook

**Situation:** I created `useFavorites` and needed to understand how to integrate it.

**My Prompt:**
> "How to use custom hook useFavorites"

**Skill demonstrated:** Integration-focused question. Rather than asking "what is a custom hook", I asked specifically how to use the one I already built — keeping the focus practical.

---

### Prompt 20 — Full Code Review Before Moving On

**Situation:** Completed all favorites features and wanted a comprehensive review.

**My Prompt:**
> "Feature 2 not working see code" + [all relevant files]

**Skill demonstrated:** Multi-file context sharing. Sharing all related files at once rather than one at a time — giving the full picture needed to spot cross-component bugs.

---

## 🔴 Level 3 — Advanced Features

---

### Prompt 21 — Reusing Knowledge from a Past Project

**Situation:** I had already worked with Gemini API before and wanted to leverage that.

**My Prompt:**
> "This is my geminiService.js from my AI cover letter generator project can this be used here" + [file]

**Skill demonstrated:** Knowledge transfer prompting. Sharing existing working code as a reference rather than starting from scratch — demonstrating initiative and prior experience.

---

### Prompt 22 — Asking About Export Syntax Specifically

**Situation:** I knew the logic but wasn't sure about the correct ES module export syntax for Vite.

**My Prompt:**
> "How the export statement can be written"

**Skill demonstrated:** Targeted syntax question. Asking about one specific thing (exports) rather than asking for the whole file to be written.

---

### Prompt 23 — UI Feedback Request

**Situation:** The app was working and I wanted an honest opinion on the design.

**My Prompt:**
> "tell me you like this UI or i need something different and also one fix the movie card has almost no gap on side ways"

**Skill demonstrated:** Combined feedback + bug report. Asking for both subjective feedback and a specific fix in one prompt — efficient and multi-dimensional.

---

### Prompt 24 — Asking for Explanation of a Concept Used

**Situation:** After implementing `isLoadingRef`, I wanted to understand deeply why it worked.

**My Prompt:**
> "Explain isLoadingRef again"

**Skill demonstrated:** Post-implementation learning. Asking for an explanation *after* using something — reinforcing understanding rather than just copy-pasting working code.

---

### Prompt 25 — Specific Fix Request for Input Visibility

**Situation:** Text typed in the input wasn't showing up.

**My Prompt:**
> "Fix css issue my input text not shown as i type and also change the whole div colour" + [code snippet]

**Skill demonstrated:** Compound fix request. Combining two related styling issues into one prompt — efficient and showing awareness of related problems.

---

### Prompt 26 — Final Deliverables

**Situation:** Project complete, needed documentation.

**My Prompt:**
> "Now, some final tasks: generate a README.md file, production-grade, impressive, full of icons and also give space for screenshots. Also generate a Prompt.md file which contains all of the actual prompts that I have used throughout the development journey, which my mentors used to evaluate the prompt engineering skill that I am learning, not copy-pasting"

**Skill demonstrated:** Detailed multi-deliverable request with quality specifications. Specifying "production-grade", "full of icons", "space for screenshots", and the purpose of the Prompts file — leaving nothing ambiguous.

---

## 📊 Prompt Engineering Skills Summary

| Skill | Examples |
|---|---|
| **Scope narrowing** | "just tell me where to add or remove braces" |
| **Context anchoring** | "for this project", "till step 5" |
| **Think-aloud prompting** | Explaining logic before asking for code |
| **Reference-based prompting** | "as level 1", sharing past project code |
| **Critical evaluation** | Catching the cascading renders bug in the roadmap |
| **Checkpoint prompting** | "is this correct" at each stage |
| **Multi-file context** | Sharing all files when debugging cross-component bugs |
| **Binary decision framing** | "API read access token or API key" |
| **Honest blocker communication** | "TMDB website not loading" |
| **Post-implementation learning** | Asking for explanations after using concepts |

---

> 💡 **Key Takeaway:** Effective prompts are specific, honest about blockers, share relevant context (code, files, stage of progress), and ask one clear question at a time. The best prompts come from genuinely trying to understand, not from trying to get code written for you.