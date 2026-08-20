import {create} from 'zustand'

// Type for state and actions
interface CalculatorState {
    showHello: boolean;
    firstNum: null | number;
    secondNum: null | number;
    power: boolean;
    toggleShowHello: () => void;
    togglePower: () => void;
    setShowHello: (value: boolean) => void;
    setFirstNum: (value: number) => void;
    setSecondNum: (value: number) => void;
}

// Store
export const useCalculatorStore = create<CalculatorState>((set) => ({
    // State variables
    // Greeting word isn't shown by default only after clicking the on/off button
    showHello: false, 

    // First operand 
    firstNum: null,

    // Second operand
    secondNum: null,

    // Power is off by default
    power: false,


    // Actions
    // Action to flip boolean value
    toggleShowHello: () => set((state) => ({showHello: !state.showHello})),

    // Action to explicitly set true or false
    setShowHello: (value: boolean) => set({showHello: value}),

    // Action for explicitly set the first operand value
    setFirstNum: (value: number) => set({firstNum: value}),

    // Action for explicitly set the second operand value
    setSecondNum: (value: number) => set({secondNum: value}),

    // Action to flip boolean value
    togglePower: () => set((state) => ({power: !state.power})),

}));
