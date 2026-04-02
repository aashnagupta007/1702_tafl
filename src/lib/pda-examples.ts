import { PDAConfig, EPSILON } from './pda-types';

export const EXAMPLE_PDAS: PDAConfig[] = [
  {
    id: 'anbn',
    name: 'a^n b^n (Equal a\'s and b\'s)',
    states: [
      { id: 'q0', label: 'q0', x: 100, y: 200, isStart: true, isAccepting: false },
      { id: 'q1', label: 'q1', x: 300, y: 200, isStart: false, isAccepting: false },
      { id: 'q2', label: 'q2', x: 500, y: 200, isStart: false, isAccepting: false },
    ],
    transitions: [
      { id: 't1', fromState: 'q0', toState: 'q1', inputSymbol: 'a', stackTop: 'Z', stackPush: 'XZ' },
      { id: 't2', fromState: 'q1', toState: 'q1', inputSymbol: 'a', stackTop: 'X', stackPush: 'XX' },
      { id: 't3', fromState: 'q1', toState: 'q2', inputSymbol: 'b', stackTop: 'X', stackPush: EPSILON },
      { id: 't4', fromState: 'q2', toState: 'q2', inputSymbol: 'b', stackTop: 'X', stackPush: EPSILON },
      { id: 't5', fromState: 'q2', toState: 'q2', inputSymbol: EPSILON, stackTop: 'Z', stackPush: EPSILON },
    ],
    inputAlphabet: ['a', 'b'],
    stackAlphabet: ['X', 'Z'],
    startState: 'q0',
    initialStackSymbol: 'Z',
    acceptanceMode: 'empty-stack',
  },
  {
    id: 'palindrome',
    name: 'Palindromes wcw^R (w ∈ {a,b,c}*)',
    states: [
      { id: 'q0', label: 'q0', x: 100, y: 200, isStart: true, isAccepting: false },
      { id: 'q1', label: 'q1', x: 300, y: 200, isStart: false, isAccepting: false },
      { id: 'q2', label: 'q2', x: 500, y: 200, isStart: false, isAccepting: false },
    ],
    transitions: [
      // Push phase (q0 self-loops): push input symbols onto stack
      { id: 't1', fromState: 'q0', toState: 'q0', inputSymbol: 'a', stackTop: EPSILON, stackPush: 'A' },
      { id: 't2', fromState: 'q0', toState: 'q0', inputSymbol: 'b', stackTop: EPSILON, stackPush: 'B' },
      { id: 't3', fromState: 'q0', toState: 'q0', inputSymbol: 'c', stackTop: EPSILON, stackPush: 'C' },
      // Center marker 'c' (q0→q1): read c without changing stack
      { id: 't4', fromState: 'q0', toState: 'q1', inputSymbol: 'c', stackTop: 'A', stackPush: 'A' },
      { id: 't5', fromState: 'q0', toState: 'q1', inputSymbol: 'c', stackTop: 'B', stackPush: 'B' },
      { id: 't6', fromState: 'q0', toState: 'q1', inputSymbol: 'c', stackTop: 'C', stackPush: 'C' },
      { id: 't7', fromState: 'q0', toState: 'q1', inputSymbol: 'c', stackTop: 'Z', stackPush: 'Z' },
      // Pop/match phase (q1 self-loops): match input with stack top
      { id: 't8', fromState: 'q1', toState: 'q1', inputSymbol: 'a', stackTop: 'A', stackPush: EPSILON },
      { id: 't9', fromState: 'q1', toState: 'q1', inputSymbol: 'b', stackTop: 'B', stackPush: EPSILON },
      { id: 't10', fromState: 'q1', toState: 'q1', inputSymbol: 'c', stackTop: 'C', stackPush: EPSILON },
      // Accept by empty stack (q1→q2): pop Z
      { id: 't11', fromState: 'q1', toState: 'q2', inputSymbol: EPSILON, stackTop: 'Z', stackPush: EPSILON },
    ],
    inputAlphabet: ['a', 'b', 'c'],
    stackAlphabet: ['A', 'B', 'C', 'Z'],
    startState: 'q0',
    initialStackSymbol: 'Z',
    acceptanceMode: 'empty-stack',
  },
  {
    id: 'balanced-parens',
    name: 'Balanced Parentheses',
    states: [
      { id: 'q0', label: 'q0', x: 100, y: 200, isStart: true, isAccepting: false },
      { id: 'q1', label: 'q1', x: 300, y: 200, isStart: false, isAccepting: false },
      { id: 'q2', label: 'q2', x: 500, y: 200, isStart: false, isAccepting: false },
    ],
    transitions: [
      { id: 't1', fromState: 'q0', toState: 'q1', inputSymbol: '(', stackTop: 'Z', stackPush: 'XZ' },
      { id: 't2', fromState: 'q1', toState: 'q1', inputSymbol: '(', stackTop: 'X', stackPush: 'XX' },
      { id: 't3', fromState: 'q1', toState: 'q1', inputSymbol: ')', stackTop: 'X', stackPush: EPSILON },
      { id: 't4', fromState: 'q1', toState: 'q2', inputSymbol: EPSILON, stackTop: 'Z', stackPush: EPSILON },
    ],
    inputAlphabet: ['(', ')'],
    stackAlphabet: ['X', 'Z'],
    startState: 'q0',
    initialStackSymbol: 'Z',
    acceptanceMode: 'empty-stack',
  },
];
