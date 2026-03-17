import { useState } from "react";
import { useNavigate } from "react-router";
import { DollarSign, Users, Clock, Leaf, Globe, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Slider } from "../components/ui/slider";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export default function RecipeGenerator() {
  const navigate = useNavigate();
  const [budget, setBudget] = useState(10);
  const [portion, setPortion] = useState(2);
  const [cookingTime, setCookingTime] = useState(30);
  const [selectedDiet, setSelectedDiet] = useState("any");
  const [selectedCuisine, setSelectedCuisine] = useState("any");
  const [customDiet, setCustomDiet] = useState("");
  const [customCuisine, setCustomCuisine] = useState("");

  const dietOptions = [
    { value: "any", label: "Any", emoji: "🍽️" },
    { value: "vegetarian", label: "Vegetarian", emoji: "🥗" },
    { value: "vegan", label: "Vegan", emoji: "🌱" },
    { value: "glutenfree", label: "Gluten-Free", emoji: "🌾" },
    { value: "other", label: "Other", emoji: "✏️" },
  ];

  const cuisineOptions = [
    { value: "any", label: "Any", emoji: "🌍" },
    { value: "asian", label: "Asian", emoji: "🍜" },
    { value: "italian", label: "Italian", emoji: "🍝" },
    { value: "mexican", label: "Mexican", emoji: "🌮" },
    { value: "other", label: "Other", emoji: "✏️" },
  ];

  const handleGenerate = () => {
    navigate("/generator");
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      <Navigation />
      
      <main className="max-w-3xl mx-auto px-6 py-8 pb-20">
        <div className="mb-8">
          <h1 className="text-3xl mb-2" style={{ fontWeight: 800 }}>AI Recipe Generator ✨</h1>
          <p className="text-gray-600">Tell us your preferences and we'll create the perfect recipe</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
          {/* Budget */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-2 rounded-lg">
                  <DollarSign className="w-4 h-4 text-green-600" />
                </div>
                <label style={{ fontWeight: 600 }}>Budget</label>
              </div>
              <div className="bg-[#FFF9F5] px-3 py-1 rounded-lg">
                <span className="text-[#FF7A00]" style={{ fontWeight: 700 }}>${budget}</span>
              </div>
            </div>
            <Slider value={budget} onChange={setBudget} max={50} min={5} step={1} />
          </div>

          {/* Servings */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Users className="w-4 h-4 text-orange-600" />
                </div>
                <label style={{ fontWeight: 600 }}>Servings</label>
              </div>
              <div className="bg-[#FFF9F5] px-3 py-1 rounded-lg">
                <span className="text-[#FF7A00]" style={{ fontWeight: 700 }}>{portion} people</span>
              </div>
            </div>
            <Slider value={portion} onChange={setPortion} max={8} min={1} step={1} />
          </div>

          {/* Cooking Time */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <label style={{ fontWeight: 600 }}>Cooking Time</label>
              </div>
              <div className="bg-[#FFF9F5] px-3 py-1 rounded-lg">
                <span className="text-[#FF7A00]" style={{ fontWeight: 700 }}>{cookingTime} min</span>
              </div>
            </div>
            <Slider value={cookingTime} onChange={setCookingTime} max={120} min={10} step={5} />
          </div>

          {/* Diet Preference */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-2 rounded-lg">
                <Leaf className="w-4 h-4 text-green-600" />
              </div>
              <label style={{ fontWeight: 600 }}>Diet Preference</label>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {dietOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSelectedDiet(option.value);
                    if (option.value !== "other") setCustomDiet("");
                  }}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    selectedDiet === option.value
                      ? 'border-[#FF7A00] bg-[#FFF9F5]'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="text-2xl mb-1">{option.emoji}</div>
                  <div className="text-xs" style={{ fontWeight: 600 }}>{option.label}</div>
                </button>
              ))}
            </div>
            {selectedDiet === "other" && (
              <Input
                placeholder="Enter your diet preference..."
                value={customDiet}
                onChange={(e) => setCustomDiet(e.target.value)}
                className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#FF7A00] bg-white"
              />
            )}
          </div>

          {/* Cuisine Type */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Globe className="w-4 h-4 text-purple-600" />
              </div>
              <label style={{ fontWeight: 600 }}>Cuisine Type</label>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {cuisineOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSelectedCuisine(option.value);
                    if (option.value !== "other") setCustomCuisine("");
                  }}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    selectedCuisine === option.value
                      ? 'border-[#FF7A00] bg-[#FFF9F5]'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="text-2xl mb-1">{option.emoji}</div>
                  <div className="text-xs" style={{ fontWeight: 600 }}>{option.label}</div>
                </button>
              ))}
            </div>
            {selectedCuisine === "other" && (
              <Input
                placeholder="Enter your cuisine type..."
                value={customCuisine}
                onChange={(e) => setCustomCuisine(e.target.value)}
                className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#FF7A00] bg-white"
              />
            )}
          </div>

          {/* Generate Button */}
          <Button 
            onClick={handleGenerate}
            className="w-full h-12 rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#FFB84D] hover:from-[#E66D00] hover:to-[#FFA73D] text-white"
            style={{ fontWeight: 700 }}
          >
            <Sparkles className="mr-2 w-5 h-5" />
            Generate Recipe with AI
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
