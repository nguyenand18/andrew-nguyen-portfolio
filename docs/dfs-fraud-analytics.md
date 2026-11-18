# Fraud Risk Modeling & Decision Support

**Deacon Financial Services Analytics Challenge · Simulated academic banking case · Fall 2026**

## Business problem
Identify suspicious new-account applications while balancing fraud capture, manual-review capacity, false positives, and legitimate customer experience.

## My work
- Specified application-time fraud signals and checked relational joins, data grain, and point-in-time availability.
- Engineered **35 predictors from 12 data exports**, then built five classification pipelines on **190,517 mature, resolved applications**: regularized logistic approaches, decision tree, random forest, and XGBoost.
- Compared models with applicant-grouped evaluation; the XGBoost test result was **0.872 ROC-AUC** and **0.489 average precision** on 57,192 test applications.
- Tested an illustrative top-10% review queue, capturing **62.7%** of fraud at **36.5%** precision in that specific scenario.
- Participated in team recommendations addressing review policy, monitoring and campaign decisions.

## Why the distinction matters
A separate team LightGBM experiment reported **0.889 ROC-AUC** under a different temporal validation design. The two scores should **not** be described as a direct head-to-head improvement.

**Limitations:** The case is an academic simulation. Results are not production fraud controls or realized financial savings. No banking/customer data is included here.

Portfolio case study: https://andrew-nguyen-portfolio-vercel-1.vercel.app/project-evidence.html#fraud
