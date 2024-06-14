from flask import Flask, request
from dotenv import load_dotenv
import os
from flask_cors import CORS
import pickle
import numpy as np
import joblib
import pandas as pd
from sklearn.pipeline import Pipeline

load_dotenv()

app = Flask(__name__)
CORS(app)

# app.config['DEBUG']  = os.environ.get['FLASK_DEBUG']

@app.route('/api/v1/predict-base-price', methods=['POST'])
def predict():
    if request.method == 'POST':
        try:
            data = request.json
            data_list = list(data.values())
            # print(data_list)
            sampleX = np.array(data_list,dtype=object).reshape(1,48)
            model = joblib.load('BasePriceModel.pkl')
            # Create a pipeline
            pipeline = Pipeline([
                ('model', model)
            ])
            y_pred = pipeline.predict(sampleX)

            return {"success": True, "code": 200, "data": y_pred.tolist()[0]}   
        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            }

@app.route('/api/v1/predict-room-price', methods=['POST'])
def predict_room_price():
    if request.method == 'POST':
        try:
            data = request.json
            data_list = list(data.values())
            # print(data_list)
            sampleX = np.array(data_list,dtype=object).reshape(1,13)
            model = joblib.load('RoomPrice.pkl')
            # Create a pipeline
            pipeline = Pipeline([
                ('model', model)
            ])
            y_pred = pipeline.predict(sampleX)

            return {"success": True, "code": 200, "data": y_pred.tolist()[0]}   
        except Exception as e:
            return {
                'status': 'error',
                'messsage': str(e)
            }

if __name__ == '__main__':
    app.run(debug=True, port=5077)
