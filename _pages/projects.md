---
title: "Projects"
permalink: /projects/
author_profile: true
---

## Blood Cell Image Classification with Machine Learning and Deep Learning

![Sample BloodMNIST blood cell images](/images/bloodmnist.png)


**Collaborator:** Muyun Tsen

**Tools:** Python, PyTorch, scikit-learn, MedMNIST, NumPy, pandas, matplotlib

**Repository:** [GitHub]([https://github.com/your-username/your-repository-name](https://github.com/jengithubb/DermaMNIST-CNN-project))

* Classified microscopic blood cell images from the BloodMNIST dataset into eight blood cell types.
* Compared random forest and convolutional neural network models for biomedical image classification.
* Implemented a random forest classifier in scikit-learn using flattened image arrays.
* Built a compact CNN in PyTorch with convolutional, pooling, and fully connected layers.
* Applied class-weighted loss to reduce the impact of class imbalance.
* Evaluated models using accuracy, precision, recall, F1-score, and one-vs-rest AUC.
* Achieved approximately 90.1% test accuracy with the CNN model, outperforming the random forest baseline.

**Keywords:** biomedical imaging, machine learning, deep learning, CNN, random forest, PyTorch, MedMNIST

### Hormone Therapy and Breast Cancer Recurrence

**Tools:** R, Cox proportional hazards models, Kaplan-Meier analysis, multiple imputation

* Analyzed the association between hormone therapy and recurrence-free survival among estrogen receptor-positive breast cancer patients using the METABRIC dataset.
* Conducted survival analysis with unadjusted, adjusted, and stratified Cox proportional hazards models.
* Used multiple imputation by chained equations to handle missing clinical covariate data.
* Evaluated the proportional hazards assumption using Schoenfeld residuals and improved model validity through stratification.
* Created Kaplan-Meier curves to visualize recurrence-free survival by hormone therapy status.
* Interpreted results in the context of observational clinical data, confounding, proportional hazards assumptions, and treatment heterogeneity.
* Found a trend toward reduced recurrence hazard among hormone therapy recipients after adjustment, although the association was not statistically significant.

**Keywords:** survival analysis, breast cancer, hormone therapy, recurrence-free survival, Cox model, Kaplan-Meier, R


### Brain Tumor Classification Using Machine Learning

**Tools:** R, logistic regression, random forest, XGBoost, model evaluation

* Developed a supervised machine learning project to classify brain tumors as benign or malignant using clinical and diagnostic variables.
* Preprocessed patient-level data, including demographic, tumor-related, symptom, MRI, and family history variables.
* Compared logistic regression, random forest, and XGBoost models for binary classification.
* Evaluated model performance using accuracy, sensitivity, and specificity.
* Used feature importance analysis to examine which variables contributed most to tumor classification.
* Identified tumor size, tumor growth rate, and age as relatively important predictors, while overall model performance remained close to random guessing.
* Discussed limitations related to data quality, feature availability, and the clinical risk of false negatives in medical prediction tasks.

**Keywords:** machine learning, brain tumor classification, clinical data, random forest, XGBoost, logistic regression, R

