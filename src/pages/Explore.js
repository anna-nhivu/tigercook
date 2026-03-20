import { Clock, DollarSign, Users, Heart, Search } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Input } from "../components/ui/input";

export default function Explore() {
  const recipes = [
    {
      id: "1",
      name: "Spicy Thai Noodles",
      image: "https://images.unsplash.com/photo-1707546944460-dda9069b9c1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpJTIwbm9vZGxlcyUyMHJlc3RhdXJhbnQlMjBwbGF0ZXxlbnwxfHx8fDE3NzMwMzYzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      time: "25 min",
      cost: "$8",
      servings: "2",
      category: "Asian"
    },
    {
      id: "2",
      name: "Vegetable Curry Bowl",
      image: "https://images.unsplash.com/photo-1729824159986-376b49c6b7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJyeSUyMGRpc2glMjBmb29kJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzczMDM2MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      time: "30 min",
      cost: "$10",
      servings: "3",
      category: "Indian"
    },
    {
      id: "3",
      name: "Asian Rice Bowl",
      image: "https://images.unsplash.com/photo-1664717698774-84f62382613b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHJpY2UlMjBib3dsJTIwcmVjaXBlfGVufDF8fHx8MTc3MzAzNjM0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      time: "20 min",
      cost: "$7",
      servings: "2",
      category: "Asian"
    },
    {
      id: "4",
      name: "Stir-Fry Vegetables",
      image: "https://images.unsplash.com/photo-1761314025701-34795be5f737?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGlyJTIwZnJ5JTIwdmVnZXRhYmxlcyUyMGRpbm5lcnxlbnwxfHx8fDE3NzMwMzYzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      time: "15 min",
      cost: "$6",
      servings: "2",
      category: "Asian"
    },
    {
      id: "5",
      name: "Healthy Pasta",
      image: "https://images.unsplash.com/photo-1676300184847-4ee4030409c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwcGFzdGElMjBkaXNoJTIwbWVhbHxlbnwxfHx8fDE3NzMwMzYzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      time: "20 min",
      cost: "$9",
      servings: "3",
      category: "Italian"
    },
    {
      id: "6",
      name: "Delicious Food Bowl",
      image: "https://images.unsplash.com/photo-1707897687558-22bdecb2e1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBhc2lhbiUyMGZvb2QlMjBib3dsfGVufDF8fHx8MTc3MzAzNjMzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      time: "25 min",
      cost: "$11",
      servings: "2",
      category: "Asian"
    },
    {
      id: "7",
      name: "Quick Ramen",
      image: "https://images.unsplash.com/photo-1673824085288-ea05299e4f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0dWRlbnQlMjBjb29raW5nJTIwcmFtZW4lMjBub29kbGVzfGVufDF8fHx8MTc3MzAzNjMzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      time: "10 min",
      cost: "$5",
      servings: "1",
      category: "Asian"
    },
    {
      id: "8",
      name: "Fresh Ingredients Mix",
      image: "https://images.unsplash.com/photo-1757332914538-4b5ed7ae95e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZvb2QlMjBpbmdyZWRpZW50cyUyMHZlZ2V0YWJsZXMlMjBjb29raW5nfGVufDF8fHx8MTc3MzAzNjMzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      time: "35 min",
      cost: "$12",
      servings: "4",
      category: "Healthy"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-6 py-8 pb-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2" style={{ fontWeight: 800 }}>Explore Recipes</h1>
          <p className="text-gray-600">Browse through our collection of student-friendly recipes</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search recipes..."
              className="pl-12 h-12 rounded-xl border-2 border-gray-200 focus:border-[#FF7A00] bg-white"
            />
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-[#FF7A00] text-white text-xs px-2 py-1 rounded-lg" style={{ fontWeight: 600 }}>
                      {recipe.category}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-base mb-2" style={{ fontWeight: 700 }}>{recipe.name}</h3>
                  
                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{recipe.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      <span>{recipe.cost}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{recipe.servings}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
