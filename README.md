# Demo-Insta

Full-stack photo sharing and community feed application built with Node.js, Express, MongoDB, ImageKit, and React.

Demo-Insta provides an end-to-end media sharing platform inspired by Instagram. It features cloud-hosted media uploads, responsive feed browsing, post creation with caption support, and seamless single-page application routing.

---

## Key Features

- Photo Feed: Responsive community feed displaying photo posts, captions, and real-time content updates.
- Post Creation: Upload images directly from your device with captions using multipart form streaming.
- Cloud Media Storage: High-performance image storage and global CDN delivery via ImageKit.
- Metadata Persistence: MongoDB document storage for post records, timestamps, and media references.
- Single Page Navigation: Client-side routing with React Router DOM and deployment redirects for clean URL refreshes.
- Cross-Origin Architecture: Configurable CORS support connecting the frontend client to the backend REST API.

---

## System Architecture

The project is structured as a decoupled full-stack architecture:

- Frontend: Built with React 19 and Vite. Utilizes Axios for RESTful API calls and React Router for client-side view management.
- Backend: REST API built on Express 5 and Node.js. Handles file streaming in memory via Multer and proxies media assets to ImageKit.
- Database: MongoDB via Mongoose for post schema modeling and query execution.
- Storage: ImageKit cloud media management and content delivery network.

---

## Directory Structure

```text
Demo-Insta/
|-- Backend/
|   |-- src/
|   |   |-- db/
|   |   |   \-- db.js
|   |   |-- models/
|   |   |   \-- post.model.js
|   |   |-- services/
|   |   |   \-- storage.service.js
|   |   \-- app.js
|   |-- .env.example
|   |-- package.json
|   |-- package-lock.json
|   \-- server.js
|-- Frontend/
|   |-- public/
|   |   |-- _redirects
|   |   |-- favicon.svg
|   |   \-- icons.svg
|   |-- src/
|   |   |-- assets/
|   |   |-- pages/
|   |   |   |-- CreatePost.jsx
|   |   |   \-- Feed.jsx
|   |   |-- App.css
|   |   |-- App.jsx
|   |   |-- index.css
|   |   \-- main.jsx
|   |-- .env.example
|   |-- .gitignore
|   |-- index.html
|   |-- package.json
|   |-- package-lock.json
|   \-- vite.config.js
|-- .gitignore
|-- LICENSE
\-- README.md
```

---

## Prerequisites

- Node.js (version 18.0.0 or higher)
- npm (version 9.0.0 or higher)
- MongoDB database (local instance or MongoDB Atlas cluster)
- ImageKit account (for image upload credentials)

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/jitendra-io/Demo-Insta.git
cd Demo-Insta
```

### 2. Backend Setup

Navigate to the `Backend` directory:

```bash
cd Backend
npm install
```

Create a `.env` configuration file based on `.env.example`:

```bash
cp .env.example .env
```

Configure your environment variables:

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/demo-insta
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key_here
```

Start the backend server:

```bash
npm start
```

The backend server runs on `http://localhost:3000`.

### 3. Frontend Setup

In a separate terminal, navigate to the `Frontend` directory:

```bash
cd ../Frontend
npm install
```

Create a `.env` configuration file based on `.env.example`:

```bash
cp .env.example .env
```

Set the backend API endpoint:

```env
VITE_API_URL=http://localhost:3000
```

Start the Vite development server:

```bash
npm run dev
```

The frontend application runs on `http://localhost:5173`.

---

## API Endpoints

The backend exposes the following RESTful endpoints:

| Method | Endpoint | Description | Content-Type |
| --- | --- | --- | --- |
| GET | `/posts` | Retrieves all photo posts | `application/json` |
| POST | `/create-post` | Uploads an image and creates a new post | `multipart/form-data` |

### POST /create-post Payload

- `image`: Image file (jpeg, png, webp, etc.)
- `caption`: String caption for the post

---

## Environment Variables Reference

### Backend

| Variable | Required | Description | Example |
| --- | --- | --- | --- |
| `PORT` | No | Port on which the Express server listens | `3000` |
| `MONGO_URI` | Yes | MongoDB connection URI string | `mongodb+srv://user:pass@cluster.mongodb.net/dbname` |
| `IMAGEKIT_PRIVATE_KEY` | Yes | Private API key for ImageKit storage authentication | `private_xxx...` |

### Frontend

| Variable | Required | Description | Example |
| --- | --- | --- | --- |
| `VITE_API_URL` | Yes | Base URL of the backend API service | `http://localhost:3000` |

---

## Deployment

### Frontend (Netlify, Vercel, Render)

1. Set the root directory or build directory to `Frontend`.
2. Build command: `npm run build`.
3. Output directory: `dist`.
4. The `public/_redirects` file ensures single-page application routing handles path refreshes without 404 errors.
5. Set `VITE_API_URL` in the hosting dashboard to your deployed backend URL.

### Backend (Render, Railway, Heroku)

1. Set the root directory to `Backend`.
2. Start command: `npm start`.
3. Configure `PORT`, `MONGO_URI`, and `IMAGEKIT_PRIVATE_KEY` in your environment settings.
4. Ensure CORS origin matches your production frontend URL.

---

## Security Practices

- Secret Isolation: Database credentials and ImageKit private keys are isolated to server environment variables and excluded from version control.
- In-Memory Buffers: Image uploads are processed via memory storage buffers rather than stored on local server disks.
- Cross-Origin Resource Sharing: Strict origin constraints protect API access.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for complete details.

---

## Author

- Jitendra Kumar Mishra
- GitHub: [jitendra-io](https://github.com/jitendra-io)
