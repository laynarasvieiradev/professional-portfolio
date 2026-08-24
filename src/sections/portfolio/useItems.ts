import { useState } from 'react'
import getPortfolioInfo from '../../api/portfolio'
import { formatArrayitens } from "./utils"

export default function useItems() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  const getPortfolioItens = async () => {
    setLoading(true);

    try {
      const data = await getPortfolioInfo()
      data.shift()
      const formattedData = formatArrayitens(data)
      setItems(formattedData)
    } finally {
      setLoading(false)
    }
  }

  return {
    items,
    loading,
    getPortfolioItens
  }
}