### Cara menjalankan proyek ini for mac
1. jalankan python3 -m venv env
2. jalankan source venv/bin/activate
3. install dependency
4. gunicorn -b :$PORT app:app
5. jalankan python app.py