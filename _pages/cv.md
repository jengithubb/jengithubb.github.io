---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

# Education

* **M.S. in Health Data Science**, University of California, San Francisco, 2024 - 2026
* **B.S. in Statistics**, San Francisco State University, 2019 - 2023

# Research Experience

* **Student Researcher**, UCSF Lupo Lab, May 2025 – Present

  * Contribute to glioblastoma imaging research focused on tumor burden, treatment response, and survival outcomes using longitudinal brain MRI data.
  * Work with multiparametric MRI data, including post-contrast T1-weighted imaging, FLAIR imaging, diffusion imaging, and radiopathomic pathology maps.
  * Support NIfTI-based imaging workflows, including data organization, image volume inspection, preprocessing review, and preparation of imaging-derived features for analysis.
  * Use 3D Slicer to visualize brain MRI scans, contrast-enhancing lesions, non-enhancing lesions, and pathology-informed map overlays, including cellularity maps and tumor probability maps.
  * Extract and analyze imaging features from contrast-enhancing and non-enhancing tumor regions across longitudinal clinical timepoints.
  * Apply statistical and computational methods to evaluate associations between imaging-derived features and clinical outcomes, including progression-free survival and overall survival.
  * Contribute to reproducible research workflows through documentation, data visualization, quality control, and communication of imaging analysis results.

# Teaching Experience

* **Teaching Assistant**, Programming for Health Data Science in R II, University of California, San Francisco, Fall 2025

  * Support students in learning R programming for health data science applications.
  * Assist with course exercises, labs, coding assignments, and programming-related questions.
  * Help students apply reproducible data science workflows to health-related datasets.
  * Provide guidance on data cleaning, analysis, visualization, and debugging in R.

# Projects

* **Radiopathomic Pathology Maps and Survival Outcomes in Glioblastoma**

  * Analyzed brain MRI and radiopathomic pathology maps from patients with newly diagnosed glioblastoma.
  * Worked with NIfTI imaging files, cellularity maps, and tumor probability maps derived from multiparametric MRI.
  * Used 3D Slicer to visualize volumetric MRI scans, tumor regions, and pathology-informed map overlays.
  * Extracted imaging-derived features from contrast-enhancing and non-enhancing tumor regions.
  * Evaluated associations between radiopathomic features and clinical outcomes, including progression-free survival and overall survival.

* **Blood Cell Image Classification with Machine Learning and Deep Learning**

  * Classified microscopic blood cell images from the BloodMNIST dataset into eight blood cell types.
  * Compared traditional machine learning and deep learning approaches for biomedical image classification.
  * Implemented a random forest classifier as a baseline model and built a compact convolutional neural network in PyTorch.
  * Applied class-weighted loss to reduce the impact of class imbalance.
  * Evaluated model performance using accuracy, precision, recall, F1-score, and one-vs-rest AUC.
  * Achieved approximately 90.1% test accuracy with the CNN model, outperforming the random forest baseline.

* **Bayesian Modeling of Breast Cancer Treatment Response**

  * Used Bayesian logistic regression to study whether baseline MRI-derived tumor features and molecular subtype variables were associated with pathologic complete response in breast cancer patients.
  * Modeled treatment response using baseline lesion diameter, sphericity, hormone receptor status, and HER2 status.
  * Specified informative priors to support stable Bayesian estimation.
  * Evaluated model convergence and fit using posterior predictive checks, trace plots, R-hat, effective sample size, and MCMC diagnostics.
  * Compared candidate models using leave-one-out cross-validation.

* **Hormone Therapy and Breast Cancer Recurrence**

  * Analyzed the association between hormone therapy and recurrence-free survival among estrogen receptor-positive breast cancer patients using the METABRIC dataset.
  * Conducted survival analysis using unadjusted, adjusted, and stratified Cox proportional hazards models.
  * Used multiple imputation by chained equations to handle missing clinical covariate data.
  * Evaluated proportional hazards assumptions using Schoenfeld residuals and improved model validity through stratification.
  * Created Kaplan-Meier curves to visualize recurrence-free survival by hormone therapy status.

* **Breast Tumor Classification with PCA and Quadratic Discriminant Analysis**

  * Built a statistical classification model to distinguish benign and malignant breast tumors using the Breast Cancer Wisconsin dataset.
  * Analyzed numerical cell nucleus features extracted from digitized fine needle aspirate biopsy images.
  * Applied principal component analysis to reduce feature correlation and improve model stability.
  * Implemented Quadratic Discriminant Analysis to model class-specific covariance structures and nonlinear decision boundaries.
  * Evaluated classification performance using accuracy, precision, recall, F1-score, and ROC AUC.
  * Achieved 93.9% classification accuracy and a ROC AUC of 0.991.

* **Brain Tumor Classification Using Machine Learning**

  * Developed a supervised machine learning project to classify brain tumors as benign or malignant using clinical and diagnostic variables.
  * Preprocessed patient-level data, including demographic, tumor-related, symptom, MRI, and family history variables.
  * Compared logistic regression, random forest, and XGBoost models for binary classification.
  * Evaluated model performance using accuracy, sensitivity, and specificity.
  * Used feature importance analysis to examine predictors contributing to tumor classification.
  * Discussed limitations related to data quality, feature availability, and the clinical importance of false negatives in medical prediction tasks.

# Technical Skills

**Programming & Development**
Python, R, Java, SQL, SAS, MATLAB, Linux, Git/GitHub, Jupyter Notebook, VS Code

**Statistics & Data Science**
Regression and generalized linear modeling, categorical data analysis, survival analysis, Bayesian modeling, experimental design, hypothesis testing, probability theory, multivariate analysis

**Machine Learning & Deep Learning**
Supervised and unsupervised learning, classification modeling, dimensionality reduction, ensemble and tree-based methods, convolutional neural networks, computer vision, medical image analysis, imbalanced data handling, model evaluation

**Biomedical Imaging & Neuroimaging**
Brain MRI, breast MRI, NIfTI-based image analysis, medical image preprocessing, lesion and tumor visualization, radiopathomic mapping, cellularity and tumor probability mapping, neuroimaging workflows

**Software & Libraries**
PyTorch, TensorFlow, scikit-learn, Hugging Face Transformers, pandas, NumPy, tidyverse, brms, tidybayes, NiBabel, SimpleITK, lifelines

**Research & Visualization Tools**
3D Slicer, ITK-SNAP, AFNI, FSL, Tableau, Power BI, Excel, ggplot2, matplotlib, LaTeX, Overleaf, Quarto, R Markdown
