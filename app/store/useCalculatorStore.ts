import {create} from 'zustand'
import type { CalculatorState } from '../types/calculator';

// Store
export const useCalculatorStore = create<CalculatorState>((set) => ({
    // State variables
    // Greeting word isn't shown by default only after clicking the on/off button
    showHello: true, 

    finalExpression: [],

    // Power is off by default
    power: false,

    temporaryBuffer: '',

    // Actions
    // Action to flip boolean value
    toggleShowHello: () => set((state) => ({showHello: !state.showHello})),

    // Action to explicitly set true or false
    setShowHello: (value: boolean) => set({showHello: value}),

    // Action for explicitly set the final expresson value
    // setFinalExpression: (value: string) => set((state) => ({finalExpression: state.finalExpression += value})),

    setFinalExpression: (value: string | number) => set((state) => ({finalExpression: [...state.finalExpression, value]})),

    // Action for clearing the final expression value
    clearFinalExpression: () => set({finalExpression: []}),

    // Action for explicitly set the first operand value
    // setFirstNum: (value: number) => set({firstNum: value}),

    // Action for explicitly set the second operand value
    // setSecondNum: (value: number) => set({secondNum: value}),

    // Action to flip boolean value
    togglePower: () => set((state) => ({power: !state.power})),

    // Action to explicity set the temporary buffer value
    setTemporaryBuffer: (value: string) => set((state) => ({temporaryBuffer: state.temporaryBuffer += value})),

    // Action for xlearing the temporary buffer value
    clearTemporaryBuffer: () => set({temporaryBuffer: ''}),
}));
