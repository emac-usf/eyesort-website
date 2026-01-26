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
    title: "EyeSort Compatible Sample Dataset",
    description:
      "A sample dataset package containing synchronized EEG + eye-tracking data, interest area files, and expected outputs. Use this to validate your EyeSort installation and learn the pipeline.",
    contents: [
      "EEGLAB .set/.fdt files with synchronized eye-tracking events",
      "Tab-delimited text-based interest area file with trial/region definitions",
      "Sample configuration files (text IA config, label config)",
      "Expected output events and BDF file for validation",
      "README with data description and tutorial workflow",
    ],
    downloadUrl:
      "https://github.com/emac-usf/EyeSort/releases/latest/download/EyeSort_compatible_files.zip",
    license: "Creative Commons Attribution 4.0 International (CC BY 4.0)",
    cite:
      "Eye Movements & Cognition Lab, University of South Florida (2025). EyeSort Sample Dataset.",
  },
];


