# Setup : Prisma

## Steps

### Step 1 : Basic Setup

1. Create NodeJS Environment
2. Install server : `npm install express`
3. Setup Environment Variables : `npm install dotenv`

### Step 2 : Database Setup

- Install PostgresSQL
- Open pgadmin
- Create Database

### Step 3 : Setup Prisma

1. Install Prisma : `npm install prisma`
2. `npx prisma init` : This will create a prisma folder with a schema.prisma file.
   - It adds env variable in .env file : `DATABASE_URL="postgresql://postgres:randompassword@localhost:5432/mydb?schema=public"`
3. Install Prisma Client for Database Interactions
   - `npm install @prisma/client`
4. Setup dbconfig

```js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
module.exports = prisma;
```

### Step 4 : Create Migration Files

- Create Models
- Create Migration File
  - `npx prisma migrate dev --name migration_file_name`

### Step 5 : Open Prisma Studio

- `npx prisma studio`

### Format

- Prisma Format `npx prisma format`

### Installation

- `npm install`

### Start the Application

- Production : `npm start`
- Development : `npm run dev`
