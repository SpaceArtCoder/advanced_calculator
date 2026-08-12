import {create} from 'zustand'

// Define the type for state and actions
interface CalculatorState {
    showHello: boolean;
    toggleShowHello: () => void;
    setShowHello: (value: boolean) => void;
}
