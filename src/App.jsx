import React from "react";
import Card from "./components/card";

function App() {
  return (
    <>
      <div className="flex flex-wrap gap-8 justify-center">
        <Card
          title="Nike Air"
          des="These are the all new nike shoes designed by loius vuiton and gucci .These are...."
          price="PKR 78000"
        />
        <Card
          title="Nike 780"
          des="These are the all new nike shoes designed by loius vuiton and gucci .These are...."
          price="PKR 80000"
        />
        <Card
          title="Nike beast"
          des="These are the all new nike shoes designed by loius vuiton and gucci .These are...."
          price="PKR 780000"
        />
        <Card
          title="Nike force"
          des="These are the all new nike shoes designed by loius vuiton and gucci .These are...."
          price="PKR 95000"
        />
        <Card
          title="Nike terminator"
          des="These are the all new nike shoes designed by loius vuiton and gucci .These are...."
          price="PKR 25000"
        />
        <Card
          title="Nike safari"
          des="These are the all new nike shoes designed by loius vuiton and gucci .These are...."
          price="PKR 5 0000"
        />
      </div>
    </>
  );
}

export default App;
