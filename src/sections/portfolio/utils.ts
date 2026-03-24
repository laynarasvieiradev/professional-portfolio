import { PortfolioItem } from "./types/portfolio.types"

// Pega as categorias dos itens do portfólio
export const getCategories = (items: PortfolioItem[]): string[] => {
 if(!items || items.length === 0) return []
  return [...new Set(items.map((item) => item.category))]
}

//Filtra itens por categoria
export const filterByCategory = (items: PortfolioItem[], category: string): PortfolioItem[] => {
 if (category === "all") return items
 return items.filter((item) => item.category === category)
}