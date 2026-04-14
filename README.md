# PDA Simulator

A web-based **Pushdown Automaton (PDA) Simulator** that visually demonstrates how PDAs recognize context-free languages. Built for students, educators, and anyone learning automata theory.

🔗 **[Live Demo](https://id-preview--e60cd69c-f115-4727-8c64-e8c7d6bd201f.lovable.app)**

---

## Features

### 🔧 PDA Builder
- **Add/remove states** with start and accepting state toggles
- **Define transitions** using formal notation: δ(state, input, stackTop) → (state, stackPush)
- **Epsilon (ε) transitions** for nondeterministic behavior
- **Custom stack alphabet** and configurable initial stack symbol
- **Save/Load** custom PDA configurations to local storage

### 📊 Visual State Diagram
- **Interactive SVG graph** rendering states and labeled transitions
- **Self-loop** and **curved arc** rendering for multi-transitions between states
- **Real-time highlighting** of the current state and active transition during simulation
- **Start state arrow** and **double-circle** notation for accepting states
- **Grouped transition labels** when multiple transitions share the same edge

### 📼 Input Tape
- Visual tape display showing the input string character by character
- **Read head indicator** highlighting the current symbol being processed
- Tracks consumed vs. remaining input during simulation

### 📚 Stack Visualizer
- **Animated stack display** showing push and pop operations in real time
- Visual representation of the stack growing and shrinking
- Clearly shows the stack top symbol at each step

### 🧾 Transition Log
- Step-by-step log of every transition taken during simulation
- Formal δ-notation descriptions for each step
- **Auto-scrolls** to the current step
- Displays final **accept/reject** verdict with color-coded feedback

### ⚙️ Simulation Engine
- **Nondeterministic PDA support** — explores all computation branches via BFS
- **Multiple computation paths** with a path selector to inspect each branch
- **Three acceptance modes**:
  - **Final State** — accepts if PDA ends in an accepting state
  - **Empty Stack** — accepts if the stack is empty after consuming input
  - **Either** — accepts if either condition is met
- **Configurable simulation speed**: Slow, Normal, Fast, Turbo

### ▶️ Playback Controls
- **Run** — execute the full simulation
- **Step Forward / Backward** — manually walk through transitions
- **Auto Play / Pause** — animate the simulation at the selected speed
- **Reset** — clear simulation and start fresh

### 📦 Pre-loaded Examples
| Example | Language | Type |
|---------|----------|------|
| **aⁿbⁿ** | `{ aⁿbⁿ \| n ≥ 1 }` | Deterministic PDA |
| **wcwᴿ Palindrome** | `{ wcwᴿ \| w ∈ {a,b}* }` | Deterministic PDA |
| **Balanced Parentheses** | Matching `(` and `)` | Deterministic PDA |
| **wwᴿ (NPDA)** | `{ wwᴿ \| w ∈ {a,b}* }` | Nondeterministic PDA |

---

## Tech Stack

- **React 18** + **TypeScript 5**
- **Vite 5** for fast development and builds
- **Tailwind CSS v3** for styling
- **Framer Motion** for animations
- **shadcn/ui** component library
- **Lucide React** icons

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## How It Works

1. **Select or build** a PDA using the builder panel or pre-loaded examples
2. **Enter an input string** in the input field
3. **Run** the simulation to see all nondeterministic computation paths
4. **Step through** transitions to observe stack push/pop operations
5. **Switch paths** to compare accepting vs. rejecting branches

---

## Project Structure

```
src/
├── components/pda/
│   ├── PDABuilder.tsx      # State & transition editor
│   ├── PDAGraph.tsx         # SVG state diagram renderer
│   ├── StackVisualizer.tsx  # Animated stack display
│   ├── InputTape.tsx        # Input tape with read head
│   └── TransitionLog.tsx    # Step-by-step transition log
├── lib/
│   ├── pda-engine.ts        # BFS simulation engine
│   ├── pda-types.ts         # TypeScript type definitions
│   └── pda-examples.ts      # Pre-loaded PDA configurations
└── pages/
    └── Index.tsx             # Main simulator layout
```

---

## License

MIT
