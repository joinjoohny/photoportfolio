import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { gallerySlugs } from "./galleries";
import { ui, languages, type Lang } from "../i18n/ui";

// Vitest runs from the repo root, so cwd-relative paths resolve correctly.
const root = process.cwd();
const dataDir = path.join(root, "src/data");
const galleriesDir = path.join(dataDir, "galleries");
const assetsDir = path.join(root, "src/assets/portfolio");

const readJson = (p: string) => JSON.parse(readFileSync(p, "utf8"));

// Recursively collect every asset file as a lowercased project path
// (e.g. "/src/assets/portfolio/p001.jpg") to mirror the case-insensitive
// resolver in galleryPhotos.ts.
function collectAssetPaths(dir: string): Set<string> {
  const out = new Set<string>();
  const walk = (current: string) => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const abs = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(abs);
      } else {
        const projectPath = "/" + path.relative(root, abs).split(path.sep).join("/");
        out.add(projectPath.toLowerCase());
      }
    }
  };
  walk(dir);
  return out;
}

const assetPaths = collectAssetPaths(assetsDir);

type PhotoEntry = { image: string; alt?: string };

// Every multi-photo document keyed by a human-readable label for assertions.
const photoDocs: Record<string, PhotoEntry[]> = {
  "hero.json": readJson(path.join(dataDir, "hero.json")).photos,
  "portfolio.json": readJson(path.join(dataDir, "portfolio.json")).photos,
};
for (const slug of gallerySlugs) {
  photoDocs[`galleries/${slug}.json`] = readJson(
    path.join(galleriesDir, `${slug}.json`),
  ).photos;
}

const aboutDoc = readJson(path.join(dataDir, "about.json")) as PhotoEntry;

describe("referenced images exist on disk", () => {
  for (const [label, photos] of Object.entries(photoDocs)) {
    it(`${label}: every image resolves to a file`, () => {
      for (const photo of photos) {
        expect(
          assetPaths.has(photo.image.toLowerCase()),
          `${label} references missing image: ${photo.image}`,
        ).toBe(true);
      }
    });
  }

  it("about.json: image resolves to a file", () => {
    expect(assetPaths.has(aboutDoc.image.toLowerCase())).toBe(true);
  });
});

describe("every photo has alt text", () => {
  for (const [label, photos] of Object.entries(photoDocs)) {
    it(`${label}: no empty alt`, () => {
      for (const photo of photos) {
        expect(photo.alt?.trim(), `empty alt in ${label}: ${photo.image}`).toBeTruthy();
      }
    });
  }

  it("about.json: has alt", () => {
    expect(aboutDoc.alt?.trim()).toBeTruthy();
  });
});

describe("gallery slug / file / CMS config consistency", () => {
  const configYml = readFileSync(
    path.join(root, "public/admin/config.yml"),
    "utf8",
  );
  const jsonFilesOnDisk = readdirSync(galleriesDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""));

  it.each(gallerySlugs)("'%s' has a JSON file and a CMS config entry", (slug) => {
    expect(jsonFilesOnDisk, `missing src/data/galleries/${slug}.json`).toContain(
      slug,
    );
    expect(
      configYml.includes(`file: "src/data/galleries/${slug}.json"`),
      `missing config.yml entry for ${slug}`,
    ).toBe(true);
  });

  it("has no orphan gallery JSON file without a known slug", () => {
    expect(jsonFilesOnDisk.sort()).toEqual([...gallerySlugs].sort());
  });
});

describe("UI dictionary completeness", () => {
  const locales = Object.keys(languages) as Lang[];
  const keysOf = (lang: Lang) => Object.keys(ui[lang]).sort();
  const reference = keysOf("en");

  it.each(locales)("'%s' has exactly the same keys as en", (lang) => {
    expect(keysOf(lang)).toEqual(reference);
  });
});
