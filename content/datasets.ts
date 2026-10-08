import { PROJECT_LINKS, RELEASE } from "@/lib/site";

export interface Dataset {
  title: string;
  description: string;
  contents: string[];
  downloadUrl: string;
  license: string;
  cite?: string;
}

export const DATASETS: Dataset[] = [
  {
    title: `EyeSort ${RELEASE.version} Compatible Files`,
    description:
      `The release-hosted compatibility bundle for practicing the EyeSort ${RELEASE.version} workflow before adapting it to your own data.`,
    contents: [
      "EyeSort-compatible sample datasets",
      "Tab-delimited text interest-area file",
    ],
    downloadUrl: PROJECT_LINKS.sampleDataset,
    license: "See the accompanying files and OSF record for data terms",
  },
];
