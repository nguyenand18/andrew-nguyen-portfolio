# Same Heart, Different Device — ECG Similarity

**Wake Forest CAIR AI Build-a-Thon · October 2026 · First place overall (team)**

## Challenge
Can a model score whether two short Lead I ECG recordings, including recordings taken by clinical equipment and Apple Watch, are likely to come from the same patient?

## Team solution
A three-encoder Siamese 1D ResNet ensemble generated ECG similarity scores. The team used patient-disjoint evaluation and documented the scoring process. This was a similarity-ranking challenge, not a medical diagnostic or verified identity tool.

## My contribution
- Independently evaluated saved model checkpoints and reviewed patient-split/leakage safeguards.
- Compared equal-weight versus fitted ensemble weights and different recording durations.
- Documented evaluation methods, reproducibility checks, interpretation and limitations.
- Helped translate the technical evaluation into an understandable project narrative.

Other teammates led model training/architecture, ingestion, and clinical context.

## Reported evidence
- **0.97** official combined competition AUC on 1,000 pairs; **first-place team**.
- **0.9895** AUROC on a separate local clinical-to-Apple-Watch holdout, not the official score.
- Additional local clinical-to-clinical AUROC of **0.9865**, documented in the competition repository.

**Limitations:** These are separate evaluations; do not interpret them as a direct comparison or as proven clinical deployment performance.

The full competition code repository is currently private: https://github.com/nguyenand18/wfu-ecg-buildathon-2026. A draft documentation PR is open at https://github.com/nguyenand18/wfu-ecg-buildathon-2026/pull/1. Review team and data-sharing permissions before making any source public.
