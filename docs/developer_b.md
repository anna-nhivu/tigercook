@@ -0,0 +1,314 @@
# Developer B Guide — AI Recipe Generator System

This guide covers the **AI Recipe Generator System**. Developer B handles all AI-related logic and works in parallel with Developer A.

---

## Feature B1 — Recipe Input Page

### Route

```
/generate-recipe
```

---

### UI Layout

**Form:**

```
--------------------------------

Generate Recipe

Budget ($)

[ 10 ]

Portion

[ 2 ]

Dietary Preference

[ Vegan ▼ ]

Cooking Time (minutes)

[ 20 ]

[ Generate Recipe ]

--------------------------------
```

---

### Form Fields

```
budget
portion
diet
cooking_time
```

---

### Flow

```
User submits form
    ↓
Call API
    ↓
POST /api/generate-recipe
```

---

## Feature B2 — AI Recipe Generator API

**API route:**

```
POST /api/generate-recipe
```

**Input:**

```json
{
  "budget": 10,
  "portion": 2,
  "diet": "vegan",
  "time": 20
}
```

---

### Backend Logic

```
receive input
    ↓
create prompt
    ↓
send to OpenAI
    ↓
receive recipe
    ↓
save recipe to database
    ↓
return recipe
```

---

## Feature B3 — Prompt Engineering

**Prompt sent to AI:**

```
Generate a cooking recipe with:

Budget: $10
Portion: 2
Dietary preference: vegan
Cooking time: 20 minutes

Return:

Recipe name
Ingredients list
Cooking instructions
Estimated cost
```

---

## Feature B4 — Save Recipe to Database

**Database:**

```
Firestore
```

**Collection:**

```
recipes
```

---

### Schema

```
recipes
   id
   userId
   recipeName
   ingredients[]
   instructions[]
   estimatedCost
   createdAt
```

---

## Feature B5 — Recipe Result Page

After AI returns the result.

**UI:**

```
--------------------------------

Garlic Tofu Rice Bowl

Ingredients

• tofu
• garlic
• soy sauce
• rice

Instructions

1. Heat pan
2. Cook tofu
3. Add garlic sauce

Estimated Cost

$7

--------------------------------

Buy Ingredients

[ Buy at Kroger ]
[ Buy at Walmart ]
[ Buy at Aldi ]

--------------------------------
```

---

## Feature B6 — Grocery Store Links

**Buttons:**

```
Kroger
Walmart
Aldi
```

**Redirect:**

Example:

```
https://www.kroger.com/search?query=tofu
```

---

## Summary of Tasks for Developer B

Developer B is responsible for:

```
1. Recipe form page
2. OpenAI API integration
3. Recipe generator API
4. Firestore recipe storage
5. Recipe result UI
6. Grocery store links
```

---

## Day-by-Day Guide

### Day 1 — Setup & Planning

| Task | Details |
|------|---------|
| Setup project | Initialize Next.js project with React and Tailwind |
| Setup Firebase | Configure Firebase project, enable Firestore |
| Setup repo | Create Git repo, coordinate with Developer A |
| Define API | Align with Developer A on `POST /api/generate-recipe` input and `GET /api/user-recipes` implementation |
| Install dependencies | OpenAI SDK, Firebase Admin/SDK, etc. |

---

### Day 2 — Recipe Form & OpenAI (Part 1)

| Task | Details |
|------|---------|
| Recipe form page | Build `/generate-recipe` UI with Budget, Portion, Dietary Preference, Cooking Time fields |
| Form validation | Validate inputs (e.g., budget > 0, portion > 0) |
| Create API route | Create `POST /api/generate-recipe` route structure |
| OpenAI setup | Add OpenAI API key, create basic prompt template |

---

### Day 3 — Recipe Form & OpenAI (Part 2)

| Task | Details |
|------|---------|
| Prompt engineering | Finalize prompt with budget, portion, diet, cooking time |
| OpenAI integration | Call OpenAI API, parse recipe response |
| API input handling | Receive and validate `budget`, `portion`, `diet`, `time` from request body |
| Error handling | Handle API errors, invalid responses |

---

### Day 4 — Database & Result Page (Part 1)

| Task | Details |
|------|---------|
| Firestore setup | Configure Firestore, create `recipes` collection |
| Save recipe to DB | After OpenAI returns recipe, save with `userId`, `recipeName`, `ingredients`, `instructions`, `estimatedCost`, `createdAt` |
| Implement `GET /api/user-recipes` | Return user's recipes for Dashboard (Developer A will call this) |
| Recipe schema | Ensure schema matches: id, userId, recipeName, ingredients[], instructions[], estimatedCost, createdAt |

---

### Day 5 — Result Page & Grocery Links

| Task | Details |
|------|---------|
| Recipe result page | Build UI to display recipe name, ingredients, instructions, estimated cost |
| Redirect after generate | After API success, redirect or show result on same/dedicated page |
| Grocery store buttons | Add "Buy at Kroger", "Buy at Walmart", "Buy at Aldi" buttons |
| Grocery links | Build search URLs with ingredients (e.g., `https://www.kroger.com/search?query=tofu`) |

---

### Day 6 — Integration

| Task | Details |
|------|---------|
| Ensure API compatibility | Verify `GET /api/user-recipes` works for Developer A's dashboard |
| Test full flow | Generate recipe → Save to DB → Appear in dashboard history |
| Fix integration bugs | Resolve any issues between A and B's work |

---

### Day 7 — Deploy & Polish

| Task | Details |
|------|---------|
| Deploy to Vercel | Push to repo, configure OpenAI and Firebase env vars |
| Bug fixing | Fix any remaining bugs |
| Final testing | Test generate recipe, save, display, grocery links end-to-end |