export interface StoreState {
    enthusiasm: EnthusiasmState,
    header: HeaderState
}
export interface EnthusiasmState {
    languageName: string;
    enthusiasmLevel: number;
}
export interface HeaderState {
    appName?: string;
    navLinks?: NavLink[]
}

export interface NavLink {
    id: string;
    title: string;
    path: string;
    children?: NavLink[]
}