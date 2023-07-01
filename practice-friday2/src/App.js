import React from "react"
import Counter from "./components/1. counts";
import Timer from "./components/2. timer";
import CharacterCount from "./components/3. characterCount";
import ToggleTimer from "./components/4. timerToggle";
import CountReducer from "./components/5. countReducer";
import ThemeSwitcher from "./components/6. toggleTheme";

function App() {
  return (
    <div className="App">
      Component lifecycle 이해
      <Counter />
      <Timer />
      <CharacterCount />
      <ToggleTimer />
      <CountReducer />
      <ThemeSwitcher />
    </div>
  );
}

export default App;