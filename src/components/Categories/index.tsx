import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

interface Category {
  id: number;
  name: string;
  description: string;
  created_at: Date;
}

export function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    api.get("categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <Container>
      {categories.map((category) => {
        return (
          <div>
            <h2>{category.name}</h2>
          </div>
        );
      })}
    </Container>
  );
}
