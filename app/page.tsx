"use client"

import { useEffect, useState } from "react";
import { Food } from "./lib/definitions";

export default function Home() {
  const [foods, setFoods] = useState<Food[]>([]);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/food`)
      .then(response => response.json())
      .then(data => setFoods(data))
  }, []);
  
  console.log(foods)

  return (
    <main>
      <h1>Food List rk-app</h1>
      {foods.map(food => (
        <div key={food.id}>
          <h2>{food.name}</h2>
        </div>
      ))}
    </main>
  )
}
