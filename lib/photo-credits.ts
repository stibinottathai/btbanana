export type PhotoCredit = {
  fileName: string;
  caption: string;
  author: string;
  authorUrl: string;
  sourceUrl: string;
  license: string;
  licenseUrl: string;
};

/**
 * Attribution for photos sourced from Wikimedia Commons under CC BY-SA.
 * Images were resized for the web; original files are unmodified otherwise.
 * CC0 photos (no attribution required) are not listed here.
 */
export const photoCredits: PhotoCredit[] = [
  {
    fileName: "banana-on-tree.jpg",
    caption: "Banana on a banana tree",
    author: "Adarshjchandran",
    authorUrl: "https://commons.wikimedia.org/wiki/User:Adarshjchandran",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Banana_on_a_banana_tree.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    fileName: "nendran-banana.jpg",
    caption: "Nendran banana (ഏത്തപ്പഴം, നേന്ത്രപ്പഴം)",
    author: "കാക്കര (Shijan Kaakkara)",
    authorUrl: "https://commons.wikimedia.org/wiki/User:കാക്കര",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Banana,_%E0%B4%8F%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%AA%E0%B5%8D%E0%B4%AA%E0%B4%B4%E0%B4%82,_%E0%B4%A8%E0%B5%87%E0%B4%A8%E0%B5%8D%E0%B4%A4%E0%B5%8D%E0%B4%B0%E0%B4%AA%E0%B5%8D%E0%B4%AA%E0%B4%B4%E0%B4%82.JPG",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
  },
  {
    fileName: "banana-plant-terrace.jpg",
    caption: "Banana plant, terrace cultivated (Kerala)",
    author: "Rishidas1973",
    authorUrl: "https://commons.wikimedia.org/wiki/User:Rishidas1973",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Banana_plant_,terrace_cultivated.JPG",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    fileName: "banana-fruit-inflorescence.jpg",
    caption: "Banana fruit and inflorescence",
    author: "Praveenp",
    authorUrl: "https://commons.wikimedia.org/wiki/User:Praveenp",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Banana_fruit_and_inflorescence.jpg",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
  },
];
