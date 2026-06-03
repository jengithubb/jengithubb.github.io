---
title: "Projects"
permalink: /projects/
author_profile: true
---

## Blood Cell Image Classification with Machine Learning and Deep Learning

![Sample BloodMNIST blood cell images](/images/bloodmnist.png)

**Tools:** Python, PyTorch, scikit-learn, MedMNIST, NumPy, pandas, matplotlib

**Repository:** [GitHub](https://github.com/jengithubb/DermaMNIST-CNN-project)

Developed a biomedical image classification project using the BloodMNIST dataset to classify microscopic blood cell images into eight cell types. This project compared traditional machine learning and deep learning approaches for multi-class image classification.

* Preprocessed BloodMNIST image data and prepared flattened image representations for traditional machine learning models.
* Implemented a random forest classifier as a baseline model for biomedical image classification.
* Built a compact convolutional neural network in PyTorch using convolutional, pooling, and fully connected layers.
* Applied class-weighted loss to reduce the impact of class imbalance across blood cell categories.
* Evaluated model performance using accuracy, precision, recall, F1-score, and one-vs-rest AUC.
* Achieved approximately 90.1% test accuracy with the CNN model, outperforming the random forest baseline.

**Keywords:** biomedical image classification, deep learning, convolutional neural networks, random forests, imbalanced data, PyTorch, MedMNIST

## Radiopathomic Pathology Maps for Glioblastoma MRI Analysis

<img src="{{ '/images/PM.png' | relative_url }}" alt="GBM" width="350">

**Tools:** Python, 3D Slicer, NIfTI, NiBabel, NumPy, pandas, lifelines, scikit-learn

Analyzed radiopathomic pathology maps derived from multiparametric brain MRI in patients with newly diagnosed glioblastoma. This project focused on NIfTI-based medical image processing, tumor-region visualization, radiopathomic feature extraction, and survival analysis.

* Processed and visualized volumetric brain MRI data, including cellularity maps and tumor probability maps.
* Used 3D Slicer to inspect contrast-enhancing lesions, non-enhancing lesions, and pathology-informed map overlays.
* Extracted imaging-derived features from tumor regions across longitudinal imaging timepoints.
* Examined associations between radiopathomic tumor features and clinical outcomes, including progression-free survival and overall survival.
* Applied survival analysis methods to evaluate imaging biomarkers in relation to patient outcomes.
* Used multiple-comparison correction to support more careful interpretation of exploratory imaging results.
* Strengthened experience in brain tumor imaging, NIfTI workflows, radiopathomic mapping, and Python-based biomedical analysis.

**Keywords:** glioblastoma, brain MRI, radiopathomic mapping, medical image analysis, NIfTI, 3D Slicer, survival analysis, Python

## Hormone Therapy and Breast Cancer Recurrence

<img src="{{ '/images/HTBCR.png' | relative_url }}" alt="Hormone Therapy and Breast Cancer Recurrence" width="350">

**Tools:** R, survival analysis, Cox regression, Kaplan-Meier analysis, multiple imputation

Investigated the association between hormone therapy and recurrence-free survival among estrogen receptor-positive breast cancer patients using the METABRIC dataset. This project focused on survival modeling, missing data handling, and interpretation of observational clinical data.

* Prepared clinical covariates and recurrence-free survival outcomes for statistical analysis.
* Conducted unadjusted, adjusted, and stratified survival models to evaluate hormone therapy status.
* Used multiple imputation by chained equations to handle missing clinical covariate data.
* Assessed the proportional hazards assumption using Schoenfeld residuals and improved model validity through stratification.
* Created Kaplan-Meier curves to visualize recurrence-free survival by hormone therapy status.
* Interpreted findings in the context of confounding, treatment heterogeneity, and observational study limitations.
* Found a trend toward reduced recurrence hazard among hormone therapy recipients after adjustment, although the association was not statistically significant.

**Keywords:** breast cancer, hormone therapy, recurrence-free survival, survival analysis, Cox regression, multiple imputation, R

## Bayesian Modeling of Breast Cancer Treatment Response

<img src="{{ '/images/BT.png' | relative_url }}" alt="Breast MRI Bayesian Modeling" width="350">

**Tools:** R, brms, tidyverse, tidybayes, bayesplot, Bayesian logistic regression

Built Bayesian logistic regression models to study whether baseline MRI-derived tumor features and molecular subtype variables were associated with pathologic complete response in breast cancer patients. This project emphasized Bayesian modeling, posterior inference, and model comparison.

* Merged clinical and MRI-derived feature datasets to create a complete-case analysis dataset.
* Modeled pathologic complete response as a binary outcome using imaging features and molecular subtype predictors.
* Included baseline lesion diameter, sphericity, hormone receptor status, and HER2 status as candidate predictors.
* Specified informative priors to support stable Bayesian estimation.
* Evaluated model convergence and fit using posterior predictive checks, R-hat, effective sample size, trace plots, and MCMC diagnostics.
* Compared candidate models using leave-one-out cross-validation.
* Found that hormone receptor and HER2 status showed stronger associations with treatment response than baseline tumor size or sphericity.

**Keywords:** Bayesian modeling, breast cancer, MRI features, treatment response, pathologic complete response, brms, R

## Breast Tumor Classification with PCA and Quadratic Discriminant Analysis

**Tools:** Python/R, PCA, Quadratic Discriminant Analysis, classification modeling, dimensionality reduction, ROC AUC

Built a statistical classification model to distinguish benign and malignant breast tumors using the Breast Cancer Wisconsin dataset. This project applied dimensionality reduction and supervised classification methods to cell nucleus features extracted from digitized biopsy images.

* Analyzed 569 breast tumor samples with 30 numerical cell nucleus features.
* Applied principal component analysis to reduce feature correlation and improve model stability.
* Retained 10 principal components that explained over 95% of the cumulative variance.
* Implemented Quadratic Discriminant Analysis to model class-specific covariance structures and nonlinear decision boundaries.
* Evaluated classification performance using accuracy, precision, recall, F1-score, and ROC AUC.
* Achieved 93.9% classification accuracy and a ROC AUC of 0.991.
* Strengthened experience in statistical classification, dimensionality reduction, model evaluation, and biomedical data analysis.

**Keywords:** breast cancer, tumor classification, PCA, Quadratic Discriminant Analysis, dimensionality reduction, statistical classification, biomedical data analysis

## Brain Tumor Classification Using Machine Learning

**Tools:** R, logistic regression, random forest, XGBoost, model evaluation

Developed a supervised machine learning project to classify brain tumors as benign or malignant using clinical and diagnostic variables. This project compared multiple classification models and emphasized performance evaluation in a medical prediction setting.

* Preprocessed patient-level data, including demographic, tumor-related, symptom, MRI, and family history variables.
* Compared logistic regression, random forest, and XGBoost models for binary classification.
* Evaluated model performance using accuracy, sensitivity, and specificity.
* Used feature importance analysis to examine which variables contributed most to tumor classification.
* Identified tumor size, tumor growth rate, and age as relatively important predictors.
* Found that overall model performance remained close to random guessing, highlighting limitations in data quality and feature availability.
* Discussed the clinical importance of false negatives and the need for cautious interpretation in medical prediction tasks.

**Keywords:** brain tumor classification, supervised learning, clinical data analysis, tree-based modeling, logistic regression, model evaluation, R
