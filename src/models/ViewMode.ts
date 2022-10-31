
export enum ViewMode {
    RAW = "raw",
    DIFF = "diff"
}

const labels = new Map();
labels.set(ViewMode.RAW, "RAW");
labels.set(ViewMode.DIFF, "DIFF");

export const viewModeLabels = labels;