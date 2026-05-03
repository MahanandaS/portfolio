# Full Stack React + FastAPI Project

This project contains both a frontend and backend:

## Project Structure

- **frontend/** - React/Vite application
- **backend/** - FastAPI REST API

## Setup Instructions

### Backend Setup (Python) ✅ Done

```bash
cd backend
pip install -r requirements.txt
python main.py
```

Backend runs on: `http://localhost:8000`
API docs: `http://localhost:8000/docs`

### Frontend Setup (React) - Requires Node.js

**First, install Node.js:** https://nodejs.org/

Then run:
```bash
cd frontend
npx create-vite@latest . --template react
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`

## Development

- Start the backend in one terminal: `python backend/main.py`
- Start the frontend in another terminal: `cd frontend && npm run dev`
- Frontend is configured to connect to backend at `localhost:8000`

## Technologies

- **Frontend:** React, Vite, JavaScript
- **Backend:** FastAPI, Python 3.14+
- **API Communication:** REST with CORS enabled
