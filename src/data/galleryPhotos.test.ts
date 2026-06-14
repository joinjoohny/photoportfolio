import { describe, expect, it, vi } from "vitest";
import {
  getAboutPhoto,
  getGalleryPhotos,
  getHeroPhotos,
  resolveImage,
  slidesFromDoc,
} from "./galleryPhotos";
import individualDoc from "./galleries/individual.json";
import heroDoc from "./hero.json";

describe("resolveImage", () => {
  it("resolves a known image by its exact path", () => {
    expect(resolveImage("/src/assets/portfolio/p001.jpg")).toBeTruthy();
  });

  it("resolves case-insensitively (uppercase path/extension)", () => {
    const exact = resolveImage("/src/assets/portfolio/p001.jpg");
    const upper = resolveImage("/SRC/assets/portfolio/P001.JPG");
    expect(upper).toBeTruthy();
    expect(upper).toBe(exact);
  });

  it("returns null for a missing reference", () => {
    expect(resolveImage("/src/assets/portfolio/does-not-exist.jpg")).toBeNull();
  });
});

describe("slidesFromDoc", () => {
  const real = "/src/assets/portfolio/p001.jpg";
  const real2 = "/src/assets/portfolio/p002.jpg";

  it("returns [] for an undefined or empty doc", () => {
    expect(slidesFromDoc(undefined, "x")).toEqual([]);
    expect(slidesFromDoc({ photos: [] }, "x")).toEqual([]);
  });

  it("assigns 1-based, zero-padded codes in order", () => {
    const slides = slidesFromDoc(
      { photos: [{ image: real }, { image: real2 }] },
      "x",
    );
    expect(slides.map((s) => s.code)).toEqual(["001", "002"]);
  });

  it("defaults alt to an empty string when absent", () => {
    const slides = slidesFromDoc({ photos: [{ image: real }] }, "x");
    expect(slides[0].alt).toBe("");
  });

  it("skips missing references (with a warning) and keeps codes sequential", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const slides = slidesFromDoc(
      {
        photos: [
          { image: real },
          { image: "/src/assets/portfolio/missing.jpg" },
          { image: real2 },
        ],
      },
      "x",
    );
    expect(slides).toHaveLength(2);
    expect(slides.map((s) => s.code)).toEqual(["001", "002"]);
    expect(warn).toHaveBeenCalledOnce();
    warn.mockRestore();
  });
});

describe("public photo getters", () => {
  it("returns the individual gallery in order with sequential codes", () => {
    const slides = getGalleryPhotos("individual");
    expect(slides).toHaveLength(individualDoc.photos.length);
    expect(slides.map((s) => s.alt)).toEqual(
      individualDoc.photos.map((p) => p.alt),
    );
    expect(slides.map((s) => s.code)).toEqual(
      individualDoc.photos.map((_, i) => String(i + 1).padStart(3, "0")),
    );
  });

  it("returns [] for an unknown gallery slug", () => {
    expect(getGalleryPhotos("does-not-exist")).toEqual([]);
  });

  it("returns the hero triptych matching hero.json", () => {
    expect(getHeroPhotos()).toHaveLength(heroDoc.photos.length);
  });

  it("returns a non-null about photo with an alt", () => {
    const about = getAboutPhoto();
    expect(about).not.toBeNull();
    expect(about?.alt).toBeTruthy();
  });
});
