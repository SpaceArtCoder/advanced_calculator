import {create} from 'zustand'

// Type for state and actions
interface CalculatorState {
    showHello: boolean;
    toggleShowHello: () => void;
    setShowHello: (value: boolean) => void;
}

// Store
export const useCalculatorStore = create<CalculatorState>((set) => ({
    // State variable
    // Greeting word isn't shown by default only after clicking the on/off button
    showHello: false, 

    // Action to flip boolean value
    toggleShowHello: () => set((state) => ({showHello: !state.showHello})),

    // Action to explicitly set true or false
    setShowHello: (value: boolean) => set({showHello: value}),

}));
