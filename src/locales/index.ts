import { ar } from "./ar";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { de } from "./de";
import { it } from "./it";
import { pt } from "./pt";
import { ru } from "./ru";
import { zh } from "./zh";
import { ja } from "./ja";
import { ko } from "./ko";
import { tr } from "./tr";
import { hi } from "./hi";
import { id } from "./id";
import { vi } from "./vi";
import { Dictionary } from "./types";

export const dictionaries: Record<string, Dictionary> = {
    ar, en, es, fr, de, it, pt, ru, zh, ja, ko, tr, hi, id, vi
};

export type LanguageCode = keyof typeof dictionaries;

export const languageNames: Record<LanguageCode, string> = Object.keys(dictionaries).reduce((acc, key) => {
    acc[key as LanguageCode] = dictionaries[key].common.languageName;
    return acc;
}, {} as Record<LanguageCode, string>);

export function getDirection(lang: LanguageCode): "rtl" | "ltr" {
    return lang === "ar" ? "rtl" : "ltr";
}
