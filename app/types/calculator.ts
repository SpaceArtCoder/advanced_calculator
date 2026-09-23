export interface CalculatorState {
    showHello: boolean;
    finalExpression: (string | number)[];
    power: boolean;
    temporaryBuffer: string;
    toggleShowHello: () => void;
    togglePower: () => void;
    setShowHello: (value: boolean) => void;
    setFinalExpression: (value: string | number) => void;
    clearFinalExpression: () => void;
    setTemporaryBuffer: (value: string) => void;
    clearTemporaryBuffer: () => void;
}