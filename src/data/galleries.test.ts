import { describe, expect, it } from "vitest";
import { galleries, gallerySlugs, getGallery } from "./galleries";
import { languages, type Lang } from "../i18n/ui";

const locales = Object.keys(languages) as Lang[];

describe("getGallery", () => {
  it("returns the gallery object for a valid slug", () => {
    expect(getGallery("wedding")?.slug).toBe("wedding");
  });

  it("returns undefined for an unknown or missing slug", () => {
    expect(getGallery("does-not-exist")).toBeUndefined();
    expect(getGallery(undefined)).toBeUndefined();
  });
});

describe("galleries data", () => {
  it("is in 1:1 correspondence with gallerySlugs", () => {
    expect(galleries.map((g) => g.slug).sort()).toEqual([...gallerySlugs].sort());
  });

  it("has a non-empty title and full seo for every locale", () => {
    for (const gallery of galleries) {
      for (const locale of locales) {
        expect(gallery.title[locale]?.trim()).toBeTruthy();
        expect(gallery.seo[locale]?.title?.trim()).toBeTruthy();
        expect(gallery.seo[locale]?.description?.trim()).toBeTruthy();
        expect(gallery.seo[locale]?.keywords?.trim()).toBeTruthy();
      }
    }
  });
});
