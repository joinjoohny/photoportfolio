import { describe, expect, it } from "vitest";
import {
  getAlternateUrls,
  getLangFromUrl,
  useTranslations,
} from "./ui";

const url = (path: string) => new URL(path, "https://www.polyanskaya.photography");

describe("getLangFromUrl", () => {
  it("defaults to en for the root (unprefixed) path", () => {
    expect(getLangFromUrl(url("/"))).toBe("en");
    expect(getLangFromUrl(url("/gallery/wedding"))).toBe("en");
  });

  it("reads the locale prefix for de and ru", () => {
    expect(getLangFromUrl(url("/de/gallery/wedding"))).toBe("de");
    expect(getLangFromUrl(url("/ru"))).toBe("ru");
  });

  it("falls back to en for an unknown prefix", () => {
    expect(getLangFromUrl(url("/fr/gallery"))).toBe("en");
  });
});

describe("useTranslations", () => {
  it("returns the localized string for the current locale", () => {
    const t = useTranslations({ url: url("/de/") });
    expect(t("nav.about")).toBe("über mich");
  });

  it("returns the key itself when missing everywhere", () => {
    const t = useTranslations({ url: url("/") });
    expect(t("nonexistent.key")).toBe("nonexistent.key");
  });
});

describe("getAlternateUrls", () => {
  it("builds absolute per-locale URLs for the root, en unprefixed", () => {
    const alts = getAlternateUrls(url("/"));
    expect(alts.en).toBe("https://www.polyanskaya.photography/");
    expect(alts.de).toBe("https://www.polyanskaya.photography/de/");
    expect(alts.ru).toBe("https://www.polyanskaya.photography/ru/");
    expect(alts["x-default"]).toBe(alts.en);
  });

  it("strips the locale prefix so alternates share the same base path", () => {
    const alts = getAlternateUrls(url("/de/gallery/wedding"));
    expect(alts.en).toBe(
      "https://www.polyanskaya.photography/gallery/wedding",
    );
    expect(alts.de).toBe(
      "https://www.polyanskaya.photography/de/gallery/wedding",
    );
    expect(alts.ru).toBe(
      "https://www.polyanskaya.photography/ru/gallery/wedding",
    );
  });
});
