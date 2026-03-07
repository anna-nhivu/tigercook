# TigerCook — Project Overview

## Project Summary

TigerCook is a full-stack web application that helps users generate AI-powered cooking recipes based on budget, dietary preferences, portion size, and cooking time. Users can register, log in, save recipes to their history, and get grocery store links to buy ingredients.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js + React + Tailwind |
| **Backend** | Next.js API Routes |
| **Auth** | Firebase Authentication |
| **Database** | Firebase Firestore |
| **AI** | OpenAI API |
| **Deploy** | Vercel |

Next.js is a **full-stack** framework, allowing both frontend and backend to be built in the same project.

---

## Architecture Overview

### Main Pages

```
/login
/register
/dashboard
/generate-recipe
```

### User Flow

```
Register
    ↓
Login
    ↓
Dashboard
    ↓
Generate Recipe
    ↓
Recipe Result
    ↓
Saved in History
```

---

## Main Features

### 1. User Authentication
- User registration with email and password
- User login and logout
- Protected routes for authenticated users only

### 2. Dashboard
- Welcome message with user email
- "Generate New Recipe" button
- Recent recipes list (name, estimated cost, created date)
- Logout functionality

### 3. AI Recipe Generator
- Input form: budget, portion, dietary preference, cooking time
- AI-generated recipes via OpenAI
- Recipe result page with ingredients, instructions, and estimated cost

### 4. Recipe History
- Recipes saved to Firestore per user
- Display on dashboard

### 5. Grocery Store Links
- Links to Kroger, Walmart, Aldi for buying ingredients

---

## Developer Split

| Developer | Responsibility |
|-----------|----------------|
| **Developer A** | User System + Dashboard (Auth, Protected Routes, Dashboard UI, Recipe History, Logout) |
| **Developer B** | AI Recipe Generator System (Recipe Form, OpenAI API, Recipe API, Firestore Storage, Recipe Result UI, Grocery Links) |

Both developers work in parallel (vertical slice) and only need to align on APIs beforehand.

---

## Documentation

- **[DEVELOPER_A.md](./DEVELOPER_A.md)** — Full guide for Developer A (User Authentication + Dashboard)
- **[DEVELOPER_B.md](./DEVELOPER_B.md)** — Full guide for Developer B (AI Recipe Generator System)

---

## Timeline (1 Week)

| Day | Activities |
|-----|------------|
| **Day 1** | Both: Setup project, Firebase, repo, define APIs |
| **Day 2–3** | A: Login, Register, Auth — B: Recipe form, OpenAI API |
| **Day 4–5** | A: Dashboard, Recipe history — B: Save recipe to DB, Recipe result page |
| **Day 6** | Integration: Dashboard connects to recipe API |
| **Day 7** | Deploy, bug fixing |

---

## Workload Balance

| Developer A | Developer B |
|-------------|-------------|
| UI heavy | AI integration |
| Auth logic | Database |
| Dashboard | API logic |

Workload is roughly equal between both developers.
