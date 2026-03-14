import Header from './Components/Header';
import RecipeCard from './Components/RecipeCard';
import { mockRecipes } from './mockRecipes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <RecipeCard recipe={mockRecipes[0]} />
    </div>
  );
}

export default App;
