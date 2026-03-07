# Developer A Guide — User Authentication + Dashboard

This guide covers **User System + Dashboard** features. Developer A works in parallel with Developer B; both should align on APIs beforehand.

---

## Feature A1 — Authentication System

### Goal

Allow users to:

```
register
login
logout
```

---

### Tools to Use

```
Firebase Authentication
Next.js
React
Tailwind
```

Firebase Auth provides a complete authentication system including email/password and social login.

---

### UI to Build

#### Register Page

**Route:**

```
/register
```

**UI:**

```
------------------------
TigerCook

Create Account

Email: [________]

Password: [________]

Confirm Password: [________]

[ Register ]

Already have account?
Login
------------------------
```

---

#### Login Page

**Route:**

```
/login
```

**UI:**

```
------------------------
TigerCook

Login

Email: [________]

Password: [________]

[ Login ]

Don't have account?
Register
------------------------
```

---

### Logic to Implement

#### Register Flow

```
User enters email + password
    ↓
Firebase creates account
    ↓
Redirect → Dashboard
```

---

#### Login Flow

```
User enters email + password
    ↓
Firebase verifies
    ↓
Save session
    ↓
Redirect → Dashboard
```

---

## Feature A2 — Protect Routes

Users **not logged in** cannot access the dashboard.

**Logic:**

```
if user not logged in
    → redirect /login
```

**Protected routes:**

```
/dashboard
/generate-recipe
```

---

## Feature A3 — Dashboard

### Route

```
/dashboard
```

---

### UI Layout

**Dashboard layout:**

```
----------------------------------

TigerCook

Welcome Hoan

[ Generate New Recipe ]

----------------------------------

Recent Recipes

• Garlic Tofu Bowl ($7)
• Vegan Pasta ($6)
• Chicken Rice ($8)

----------------------------------

Logout
```

---

### Components to Build

#### 1. Navbar

```
TigerCook logo
Dashboard
Logout
```

---

#### 2. Welcome Section

```
Welcome {user email}
```

---

#### 3. Generate Recipe Button

**Button:**

```
Generate Recipe
```

**Redirect:**

```
/generate-recipe
```

---

#### 4. Recipe History List

Display:

```
recipe name
estimated cost
created date
```

**Example:**

```
Garlic Tofu Bowl
Cost: $7
Created: Mar 6
```

---

### API to Call

Dashboard will call:

```
GET /api/user-recipes
```

**Response:**

```json
[
  {
    "recipeName": "Garlic Tofu Bowl",
    "cost": 7
  }
]
```

---

## Feature A4 — Logout

**Button:**

```
Logout
```

**Flow:**

```
User clicks logout
    ↓
Firebase signOut
    ↓
Redirect /login
```

---

## Summary of Tasks for Developer A

Developer A is responsible for:

```
1. Login page
2. Register page
3. Firebase authentication
4. Protected routes
5. Dashboard UI
6. Recipe history UI
7. Logout
```

---

## Day-by-Day Guide

### Day 1 — Setup & Planning

| Task | Details |
|------|---------|
| Setup project | Initialize Next.js project with React and Tailwind |
| Setup Firebase | Configure Firebase project, enable Authentication and Firestore |
| Setup repo | Create Git repo, set up branches if needed |
| Define API | Align with Developer B on `GET /api/user-recipes` response structure |
| Install dependencies | Firebase SDK, Tailwind, etc. |

---

### Day 2 — Authentication (Part 1)

| Task | Details |
|------|---------|
| Register page | Build `/register` UI with email, password, confirm password fields |
| Firebase Auth setup | Initialize Firebase Auth in the app |
| Register flow | Implement `createUserWithEmailAndPassword`, redirect to dashboard on success |
| Basic validation | Validate password match, non-empty fields |

---

### Day 3 — Authentication (Part 2)

| Task | Details |
|------|---------|
| Login page | Build `/login` UI with email and password fields |
| Login flow | Implement `signInWithEmailAndPassword`, save session, redirect to dashboard |
| Protected routes | Add logic: if not logged in → redirect to `/login` for `/dashboard` and `/generate-recipe` |
| Error handling | Handle invalid credentials, display error messages |

---

### Day 4 — Dashboard (Part 1)

| Task | Details |
|------|---------|
| Navbar | Build Navbar with TigerCook logo, Dashboard link, Logout button |
| Welcome section | Display "Welcome {user email}" using Firebase Auth current user |
| Generate Recipe button | Add button that redirects to `/generate-recipe` |
| Dashboard layout | Structure the page with sections |

---

### Day 5 — Dashboard (Part 2)

| Task | Details |
|------|---------|
| Recipe history UI | Build list component to display recipe name, cost, created date |
| Call API | Integrate `GET /api/user-recipes` (from Developer B) |
| Logout | Implement Firebase `signOut`, redirect to `/login` |
| Loading & empty states | Handle loading spinner, empty recipe list |

---

### Day 6 — Integration

| Task | Details |
|------|---------|
| Connect dashboard to recipe API | Ensure `GET /api/user-recipes` returns user's recipes correctly |
| Test full flow | Register → Login → Dashboard → See recipes |
| Fix integration bugs | Resolve any issues between A and B's work |

---

### Day 7 — Deploy & Polish

| Task | Details |
|------|---------|
| Deploy to Vercel | Push to repo, connect Vercel, configure env vars |
| Bug fixing | Fix any remaining bugs |
| Final testing | Test auth, dashboard, recipe history end-to-end |
