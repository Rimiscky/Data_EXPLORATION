# Data_EXPLORATION

#Analyse Exploratoire & A/B Testing – Données E-commerce

## Contexte du projet

Ce projet vise à analyser un jeu de données e-commerce contenant des **événements utilisateurs** (views, addtocart, transactions), une **hiérarchie de catégories** et des **propriétés d’articles**.
L’objectif principal est de comprendre le **comportement des utilisateurs**, d’analyser le **funnel de conversion**, et de réaliser un **test A/B** afin d’évaluer des différences de performance.

---

## 🎯 Objectifs

* Explorer et nettoyer des jeux de données volumineux
* Analyser le funnel de conversion (View → Add to Cart → Transaction)
* Étudier la répartition temporelle des événements
* Analyser la structure des catégories et sous-catégories
* Réaliser un **A/B testing** statistique
* Générer des visualisations claires pour appuyer les analyses
* Formuler des **recommandations business basées sur les données**

---

## 🗂️ Données utilisées

* **events.csv** : événements utilisateurs (view, addtocart, transaction)
* **category_tree.csv** : hiérarchie des catégories
* **item_properties_part1.csv / part2.csv** : propriétés détaillées des articles

---

## 🧰 Technologies & librairies

* Python 3
* pandas
* numpy
* matplotlib
* seaborn
* scipy
* scikit-learn
* Jupyter Notebook

---

## 📁 Structure du projet

```
├── data/
│   ├── processed/
│   │   └── fichiers nettoyés
│   └── fichiers bruts (.csv)
│
├── 01_exploration.ipynb
├── 02_exploration.ipynb
├── 03_exploration.ipynb
├── Untitled.ipynb
├── README.md
```

---

## 🔍 Analyses réalisées

### 1. Analyse exploratoire

* Dimensions des datasets
* Types de variables
* Valeurs manquantes et doublons
* Distribution des événements

### 2. Funnel de conversion

* Taux de conversion View → Add to Cart
* Taux de conversion Add to Cart → Transaction
* Visualisation via bar charts

### 3. Analyse temporelle

* Heures les plus actives
* Jours les plus actifs
* Comportement utilisateur selon le temps

### 4. Analyse des catégories

* Nombre de sous-catégories par parent
* Visualisations (scatter plot, bar charts)
* Comparaison statistique entre groupes

### 5. A/B Testing

* Répartition aléatoire des utilisateurs (Groupes A & B)
* Comparaison des taux d’addtocart
* Test statistique (z-test / t-test)
* Interprétation des p-values

---

## 📊 Résultats clés

* Le funnel présente une **forte déperdition entre la consultation et l’ajout au panier**
* Le taux de transaction reste faible (< 1 %)
* Les heures de pointe se situent majoritairement en soirée
* Le test A/B ne montre **aucune différence statistiquement significative**
* La structure des catégories est déséquilibrée (certains parents dominants)

---

## 💡 Recommandations

* Optimiser les pages produits pour améliorer le passage View → Add to Cart
* Tester des améliorations UX ciblées sur les heures de forte activité
* Simplifier certaines catégories trop complexes
* Mettre en place des tests A/B plus ciblés (UX, pricing, recommandations)
* Segmenter les utilisateurs pour des analyses plus fines

---

## ▶️ Comment exécuter le projet

1. Cloner le dépôt

```bash
git clone <url_du_repo>
```

2. Installer les dépendances

```bash
pip install pandas numpy matplotlib seaborn scipy scikit-learn
```

3. Lancer Jupyter Notebook

```bash
jupyter notebook
```

4. Exécuter les notebooks dans l’ordre :

* `01_exploration.ipynb`
* `02_exploration.ipynb`
* `03_exploration.ipynb`

---

## 👤 Auteur

Projet réalisé par **[Ton Nom]**
Dans le cadre d’un projet d’analyse de données / data science.

---

## 📜 Licence

Ce projet est fourni à des fins pédagogiques et analytiques.
