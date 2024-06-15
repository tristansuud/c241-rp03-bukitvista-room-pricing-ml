
# Bukit Vista Room Pricing Prediction API

This project is an initiative by Bukit Vista to develop a model that can predict the most appropriate room rates. 
## API Reference

#### Base URL
```http
  http://34.101.103.89:3077
```

#### Get all properties

```http
  GET /properties
```

Response 200
This the success response
```javascript
{
    "status": "success",
    "data": [
        {
            "id": "PR0052",
            "property_name": "Raka & Rai Guesthouse",
            "property_design": 0,
            "property_type": 4,
            "createdAt": "2024-06-15T02:20:16.000Z",
            "updatedAt": "2024-06-15T02:20:16.000Z"
        },
        {
            "id": "PR0055",
            "property_name": "Griya Wirosaban",
            "property_design": 0,
            "property_type": 1,
            "createdAt": "2024-06-15T02:20:16.000Z",
            "updatedAt": "2024-06-15T02:20:16.000Z"
        },
        ...
    ]
}
```

#### Get Detail Property

```http
  GET /properties/${property_id}
```

Response 200
This the success response
```javascript
{
    "status": "success",
    "data": {
        "id": "PR0198",
        "property_name": "Pondok Lulik",
        "property_design": 4,
        "property_type": 4,
        "createdAt": "2024-06-15T02:20:16.000Z",
        "updatedAt": "2024-06-15T02:20:16.000Z",
        "rooms": [
            {
                "id": 397685,
                "unit_type_name": "Deluxe",
                "number_of_bookings": 73,
                "bedroom": 1,
                "bathroom": 1,
                "beds": 1,
                "capacity": 2,
                "ac": true,
                "balcony": true,
                "beachfront": false,
                "breakfast": false,
                "building_staff": true,
                "cable_tv": false,
                "essentials": true,
                "garden": true,
                "gym": false,
                "hair_dryer": false,
                "hanger": true,
                "heating": false,
                "hot_water": true,
                "kitchen": true,
                "linens": true,
                "lock": true,
                "luggage_drop_off": false,
                "parking": true,
                "pool": true,
                "private_entrance": true,
                "shampoo": false,
                "tv": false,
                "washer": false,
                "wifi": true,
                "workspace": true,
                "lat": -9,
                "lng": 115,
                "distance_to_coastline": 2259,
                "area_distance_to_airport": 60,
                "property_bedrooms": 27,
                "average_baseline_price": "426526",
                "area_name": "Canggu",
                "total_fas": 15,
                "ratio_bedroom_bathroom": "1",
                "ratio_bedroom_cap": "2",
                "avg_price_distance_to_coast": "189",
                "avg_price_distance_to_airport": "7109",
                "avg_price_bedroom": "426526",
                "avg_price_beds": "426526",
                "avg_price_bathroom": "426526",
                "avg_price_total_fas": "28435",
                "rating": "5",
                "review_sentiment_score": "1",
                "communication": "5",
                "cleanliness": "5",
                "accuracy": "5",
                "price_fluctuation": "-26451",
                "total_review_score": "5",
                "id_property": "PR0198",
                "createdAt": "2024-06-15T02:20:16.000Z",
                "updatedAt": "2024-06-15T02:20:16.000Z"
            },
            ...
        ]
    }
}
```

#### Predict Base Price
```http
  GET /predict-room-price/${room_id}
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
  POST /predict-room-price/${room_id}
```
Request Body
```javascript
{
    "booking_day_of_week": 3,
    "booking_lead_time": 0,
    "contain_national_holiday": true,
    "month": "june",
    "stay_duration": 9
}
```

Response 200
This is success response
```javascript
{
    "status": "success",
    "data": {
        "code": 200,
        "data": 407453.5021048023,
        "success": true
    }
}
```


## License

License by Bukit Vista

