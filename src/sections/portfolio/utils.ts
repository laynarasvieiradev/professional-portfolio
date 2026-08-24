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

export const formatArrayitens = (items: []): PortfolioItem[] => {  
  const formatteditems = items.map(item => ({
    id: Math.floor(Math.random() * 100),
    title: item[0],
    coverImage: item[1],
    description: item[2],
    images: item[3].split(','),
    videos: item[4].split(','),
    year: item[5],
    category: item[6],
  }))

  return formatteditems
}