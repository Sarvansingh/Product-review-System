# Product Review Backend

Simple Express + MongoDB backend for the product review app.

## Setup

1. Copy `.env.example` to `.env` and set `MONGODB_URI` (default is mongodb://localhost:27017/product-review)
2. Install deps: `npm install`
3. (Optional) Seed DB: `npm run seed`
4. Start dev: `npm run dev` (requires `nodemon`)

API endpoints:
- GET /api/products
- GET /api/products/:id
- POST /api/products
- PUT /api/products/:id
- DELETE /api/products/:id
- POST /api/products/:id/reviews

Make sure your frontend uses the `VITE_API_URL` env var or hits `http://localhost:5000` by default.
