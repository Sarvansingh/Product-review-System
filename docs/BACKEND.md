# Backend (Express + MongoDB)

This project includes a simple Express backend in the `server/` folder.

Quick start:

1. Copy `.env.example` to `server/.env` and set `MONGODB_URI` (default: `mongodb://localhost:27017/product-review`).
2. cd into `server` and install dependencies: `npm install`.
3. (Optional) Seed the DB: `npm run seed`.
4. Start server in development: `npm run dev` (uses nodemon).

Frontend configuration:
- Create a `.env` file in the frontend (project root) with:

```
VITE_API_URL=http://localhost:5000
```

The frontend will use `VITE_API_URL` to call the API. If not set, it defaults to `http://localhost:5000`.
