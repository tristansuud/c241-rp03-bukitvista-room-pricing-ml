### Cara menjalankan proyek ini for mac
1. jalankan python3 -m venv env
2. jalankan source venv/bin/activate
3. install dependency
4. gunicorn -b :$PORT app:app
5. jalankan python app.py


# Bukit Vista Room Pricing Prediction API Model

This project is an initiative by Bukit Vista to develop a model that can predict the most appropriate room rates. 
## API Reference

#### Base URL
```http
  https://c241-rp03-bukitvista-room-pricing-ml-a4zfow4vpq-et.a.run.app/
```

#### Predict Base Price
```http
  POST api/v1/predict-base-price
```
Request Body
```javascript
{
    "unit_type_name": "Downstairs Room 2A",
    "property_design": 0.0,
    "property_type": 4.0,
    "number_of_bookings": 54,
    "bedroom": 1.0,
    "bathroom": 1.0,
    "beds": 1.0,
    "capacity": 2.0,
    "ac": 1.0,
    "balcony": 1.0,
    "beachfront": 0.0,
    "breakfast": 1.0,
    "building_staff": 1.0,
    "cable_tv": 1.0,
    "essentials": 1.0,
    "garden": 1.0,
    "gym": 1.0,
    "hair_dryer": 1.0,
    "hanger": 1.0,
    "heating": 1.0,
    "hot_water": 1.0,
    "kitchen": 1.0,
    "linens": 1.0,
    "lock": 1.0,
    "luggage_drop_off": 1.0,
    "parking": 1.0,
    "pool": 1.0,
    "private_entrance": 1.0,
    "shampoo": 1.0,
    "tv": 1.0,
    "washer": 1.0,
    "wifi": 1.0,
    "workspace": 1.0,
    "lat": -7.802683,
    "lng": 110.360967,
    "distance_to_coastline": 14402.1,
    "area_distance_to_airport": 57.25190839694657,
    "property_bedrooms": 6.0,
    "area_name": "Ngupasan",
    "total_fas": 16.0,
    "ratio_bedroom_bathroom": 1.0,
    "ratio_bedroom_cap": 2.0,
    "avg_price_distance_to_coast": 26.09225581364548,
    "avg_price_distance_to_airport": 6563.681246191355,
    "avg_price_bedroom": 375783.2774537036,
    "avg_price_beds": 375783.2774537036,
    "avg_price_bathroom": 375783.2774537036,
    "avg_price_total_fas": 23486.454840856473
}
```

Response 200
This is success response
```javascript
{
    "status": "success",
    "data": {
        "code": 200,
        "data": 466312.2347849636,
        "success": true
    }
}
```


#### Predict Room Price

```http
  POST /api/v1/predict-room-price
```
Request Body
```javascript
{
    "average_baseline_price" : 3000000.39651204075,
    "rating" : 4.61005744012138,
    "review_sentiment_score" : 0.66500405006078,
    "communication" : 4.69545897908313,
    "cleanliness" : 4.57255879484123,
    "accuracy" : 4.67223065250379,
    "month" : "may",
    "contain_national_holiday" : true,
    "stay_duration" : 5000,
    "booking_day_of_week" : 2,
    "booking_lead_time" : 8,
    "price_fluctuation" : 112673.752802764,
    "total_review_score" : 4.63757646663738
}
```

Response 200
This is success response
```javascript
{
    "code": 200,
    "data": 3137606.9280000003,
    "success": true
}
```


## License

License by Bukit Vista

