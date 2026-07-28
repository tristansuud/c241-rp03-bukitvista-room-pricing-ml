# BukitVista Room Pricing ML

Machine learning-powered predictive room price estimation for [BukitVista](https://www.bukitvista.com/), a Bali-based property management company. Built as a 2024 capstone project.

## Overview

Rental pricing for short-term stays depends on dozens of interacting factors: property amenities, location, seasonality, guest ratings, and booking behavior. This project builds two complementary regression models to help BukitVista set data-driven prices:

1. **Base Price Model** — predicts a property's baseline nightly price from its physical attributes (bedrooms, bathrooms, amenities, distance to coastline/airport, area, property type/design).
2. **Earnings Per Day Model** — predicts expected daily earnings for a specific booking, layering in dynamic factors like guest ratings, seasonality, national holidays, stay duration, and booking lead time on top of the baseline price.

Together these models give a full pricing signal: what a unit *should* be worth structurally, and how much it's actually likely to earn on a given booking.

## Team

This was a 4-person capstone team:
- **3 members** (including project lead) — data cleaning, feature engineering, model training/evaluation (this repo)
- **1 member** — cloud architecture and API deployment (serving the trained models), tracked in a separate repo/service

This branch covers the ML side of the project: data pipeline, feature engineering, and model training. It does not include the deployment/API layer.

## Repo Structure

```
bukitvista-room-pricing-ml/
├── docs/
│   └── Dataset Collection Documentation.docx   # How the raw data was sourced/collected
├── notebooks/
│   ├── cleaning/
│   │   └── Latest/
│   │       └── RoomPriceCleaning.ipynb         # Drop NAs, dedupe, KNN-impute rating fields
│   ├── Feature Engineering/
│   │   └── Feature_Engineering_Base_Price.ipynb # Derived features for the base price model
│   └── Training/
│       ├── BasePriceTrain.ipynb                # Model comparison + tuning for base price
│       ├── BasePriceTrainPipeline.ipynb         # Final sklearn Pipeline + serialized model
│       ├── RoomPriceTrain.ipynb                 # Model comparison + tuning for earnings/day
│       └── RoomPriceTrainingPipeline.ipynb      # Final sklearn Pipeline + serialized model
├── src/
│   └── model/                                   # Reserved for exported model artifacts
├── requirements.txt
└── LICENSE
```

Project layout inspired by [Machine-Learning-Project-Structure](https://github.com/ghimiresunil/Machine-Learning-Project-Structure).

## Data Pipeline

1. **Cleaning** (`RoomPriceCleaning.ipynb`)
   Raw booking-level data is filtered to remove rows missing a baseline price, deduplicated on `booking_id`, and rating-related fields (`rating`, `review_sentiment_score`, `communication`, `cleanliness`, `accuracy`) are imputed using a KNN imputer (k=5).

2. **Feature Engineering** (`Feature_Engineering_Base_Price.ipynb`)
   Property-level data is enriched with:
   - `total_fas` — total count of listed amenities (AC, pool, wifi, kitchen, etc.)
   - Ratio features: bedroom-to-bathroom, capacity-to-bedroom
   - Price-normalized features: price per bedroom, per bed, per bathroom, per amenity, and price relative to distance from coastline/airport
   - Area IDs mapped to human-readable area names
   - Outlier removal via z-score thresholding (|z| > 5) on key numerical columns

3. **Training**
   Both pricing problems follow the same pattern: compare Linear Regression, Decision Tree, Random Forest, and XGBoost, then commit to a tuned Random Forest with early stopping on validation MAE, and finally wrap the winning model in an `sklearn.Pipeline` (with `ColumnTransformer` for scaling/encoding) so it can be serialized end-to-end with `joblib` and served without re-implementing preprocessing downstream.

## Models & Results

| Model | Target | Best Approach | Validation MAE |
|---|---|---|---|
| Base Price | `average_baseline_price` (property-level) | Random Forest Regressor | ~76,300 IDR |
| Earnings Per Day | `earnings_per_day` (booking-level) | Random Forest Regressor | ~4,810–4,965 IDR |

Random Forest consistently outperformed Linear Regression, single Decision Trees, and XGBoost on this dataset in both tasks. Final estimator counts were chosen via early stopping against a target MAE threshold rather than fixed to the initial 1,000-tree search space, keeping the models leaner without sacrificing accuracy.

Final pipelines are serialized as:
- `BasePriceModel.pkl`
- `RoomPrice.pkl`

## Setup

```bash
pip install -r requirements.txt
```

Key dependencies: `tensorflow`, `pandas`, `numpy`, `scikit-learn` (via pipeline notebooks), `xgboost`, `matplotlib`, `seaborn`.

Notebooks were originally run in Google Colab (hence `/content/...` paths) and expect the following inputs to be available:
- `RoomPrice_<date>.csv` — raw booking-level export
- `area_names.csv`, `property_designs.csv`, `property_types.csv` — lookup/reference tables
- Cleaned/feature-engineered CSVs produced by earlier notebooks in the pipeline (each notebook's output feeds the next)

To reproduce end-to-end, run the notebooks in order: `cleaning` → `Feature Engineering` → `Training`, updating the `/content/...` paths to your local or Colab environment as needed.

## Known Limitations

- Property-level dataset for the base price model is small (142 rows), which limits how much the model can generalize across property types/areas.
- Notebooks were converted from Colab and use hardcoded local paths (`/content/...`); they'll need path updates to run elsewhere.
- Some pipeline cells reference intermediate files that must be generated by earlier notebooks — there's no single orchestrated script tying the full pipeline together yet.

## License

MIT — see [LICENSE](./LICENSE).
