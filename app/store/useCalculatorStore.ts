import {create} from 'zustand'
import type { CalculatorState } from '../types/calculator';

export const useCalculatorStore = create<CalculatorState>((set) => ({
    // Greeting word isn't shown by default only after clicking the on/off button
    showHello: true, 
    // Stores operators and operands
    finalExpression: [],
    // Power is off by default
    power: false,
    // Temporarily stores the previous operand before an operator is pressed
    temporaryBuffer: '',

    // Action to flip a boolean value
    toggleShowHello: () => set((state) => ({showHello: !state.showHello})),
    // Action to explicitly set the boolean flag
    setShowHello: (value: boolean) => set({showHello: value}),
    // Action for explicitly setting the final expresson value
    setFinalExpression: (value: string | number | (string | number)[]) => set((state) => ({finalExpression: Array.isArray(value)
        ? [...state.finalExpression, ...value]
        : [...state.finalExpression, value]})),
    // Action for clearing the final expression value
    clearFinalExpression: () => set({finalExpression: []}),
    // Action to flip boolean value
    togglePower: () => set((state) => ({power: !state.power})),
    // Action to explicity set the temporary buffer value
    setTemporaryBuffer: (value: string) => set((state) => ({temporaryBuffer: state.temporaryBuffer += value})),
    // Action for clearing the temporary buffer value
    clearTemporaryBuffer: () => set({temporaryBuffer: ''}),
}));
