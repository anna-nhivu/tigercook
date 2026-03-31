export function buildRecipeGenerationPrompt({
  budget,
  portion,
  diet,
  cuisine,
  cookingTime,
}) {
  return `Generate a suitable cooking recipe with these requirements:
- Budget: $${budget} total
- Servings: ${portion} people
- Dietary preference: ${diet}
- Cuisine type: ${cuisine}
- Cooking time: ${cookingTime} minutes max
- Give exactly 5-7 cooking steps, each step should be short (1 sentence max), clear, and specific like a real recipe book

Return your response in this EXACT JSON format and nothing else:
{
  "title": "Recipe Name",
  "description": "A short 1-2 sentence description",
  "ingredients": [
    { "name": "ingredient name", "amount": "amount with unit" }
  ],
  "steps": [
    "Step 1 short instruction",
    "Step 2 short instruction",
    "Step 3 short instruction",
    "Step 4 short instruction",
    "Step 5 short instruction",
    ....
  ],
  "time": "X min",
  "cost": "$X.XX",
  "servings": ${portion},
  "tag": "one word tag like Vegan or Spicy or Healthy",
  "nutrition": {
    "calories": 000,
    "protein": "Xg",
    "carbs": "Xg",
    "fat": "Xg"
  }
}`;
}
