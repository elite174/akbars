import { EMPTY_OBJECT } from "./constants";

export const combineMods = (base = '', mods = EMPTY_OBJECT) => {
    const m = [];
    for (let key in mods) {
        m.push(`${base}_${key}_${mods[key]}`);
    }
    return `${base} ${m.join(' ')}`.trim();
}