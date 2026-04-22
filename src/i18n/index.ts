import { en } from "./en";
import { es } from "./es";

export const translations = { en, es };

export function useTranslations(locale: "en" | "es") {
  return translations[locale] ?? translations.en;
}

export function getAlternateLocale(locale: "en" | "es"): "en" | "es" {
  return locale === "en" ? "es" : "en";
}
