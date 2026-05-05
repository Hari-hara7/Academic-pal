# Notes Q&A Service (Python)

Run locally:

1. Create a venv and install requirements:
   - `python -m venv .venv`
   - `.venv\Scripts\activate`
   - `pip install -r requirements.txt`

2. Set `GEMINI_API_KEY` in your environment.

3. Start the API:
   - `uvicorn main:app --reload --port 8000`

Endpoints:
- `POST /notes-qa/upload` (multipart `file`)
- `POST /notes-qa/ask` (json: `{ noteId, question }`)
