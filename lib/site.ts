export const SITE = {
  name: "EyeSort",
  url: "https://www.eyesort.org",
  description:
    "Region-aware fixation-event labeling for synchronized EEG and eye-tracking reading data in EEGLAB.",
} as const;

export const RELEASE = {
  version: "1.0",
  tag: "v1.0",
  published: "2026-07-09",
  verified: "2026-10-07",
  pluginAsset: "eyesort1.0.zip",
  sampleAsset: "EyeSort_Compatible_Files.zip",
  manualAsset: "EyeSort_Manual.pdf",
} as const;

const releaseAsset = (filename: string) =>
  `https://github.com/emac-usf/EyeSort/releases/latest/download/${filename}`;

export const PROJECT_LINKS = {
  githubOrg: "https://github.com/emac-usf",
  githubRepo: "https://github.com/emac-usf/EyeSort",
  githubWebsiteRepo: "https://github.com/emac-usf/eyesort-website",
  githubIssues: "https://github.com/emac-usf/EyeSort/issues",
  githubDiscussions: "https://github.com/emac-usf/EyeSort/discussions",
  githubReleases: "https://github.com/emac-usf/EyeSort/releases",
  latestRelease: "https://github.com/emac-usf/EyeSort/releases/latest",
  pluginZip: releaseAsset(RELEASE.pluginAsset),
  sampleDataset: releaseAsset(RELEASE.sampleAsset),
  userManual: releaseAsset(RELEASE.manualAsset),
  osfProject: "https://osf.io/zx4un",
  manuscriptPreprint:
    "https://www.researchgate.net/publication/397322985_EyeSort_an_EEGLAB-integrated_toolbox_for_behavioral_categorization_of_eye_fixation_events_in_EEG-EM_co-registered_data",
  contactEmail: "smilliga@usf.edu",
  labWebsite: "https://emac-usf.com",
} as const;

export const AUTHORS = [
  {
    name: "Brandon Snyder",
    email: "snyderb96@gmail.com",
    affiliation:
      "Bellini College of Artificial Intelligence, Cybersecurity and Computing, University of South Florida",
    contribution: "Methodology, software, validation lead, and visualization lead",
  },
  {
    name: "Sara Milligan, Ph.D.",
    email: "smilliga@usf.edu",
    affiliation: "Department of Psychology, University of South Florida",
    contribution:
      "Conceptualization, data curation, methodology, supervision, and validation",
  },
  {
    name: "Elizabeth R. Schotter, Ph.D.",
    email: "eschotter@usf.edu",
    affiliation: "Department of Psychology, University of South Florida",
    contribution:
      "Conceptualization, funding acquisition, project administration, resources, and supervision",
  },
] as const;

export const CITATION = {
  title:
    "EyeSort: an EEGLAB-integrated toolbox for behaviorally-informed event marking in EEG-EM co-registered reading data",
  authors: "Snyder, B., Milligan, S., & Schotter, E. R.",
  status:
    "Manuscript available as a preprint; cite the software release until a version of record is available.",
  software:
    "Snyder, B., Milligan, S., & Schotter, E. R. (2026). EyeSort (Version 1.0) [Computer software]. https://github.com/emac-usf/EyeSort",
  bibtex: `@software{eyesort2026,
  author = {Snyder, Brandon and Milligan, Sara and Schotter, Elizabeth R.},
  title = {EyeSort},
  version = {1.0},
  year = {2026},
  url = {https://github.com/emac-usf/EyeSort}
}`,
} as const;
