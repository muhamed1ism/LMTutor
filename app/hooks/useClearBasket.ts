'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { SafeUser } from "../types"

interface IUseBasket {
  currentUser: SafeUser | null
}

const useClearBasket = ({ currentUser }: IUseBasket) => {
  const router = useRouter()

  const clearBasket = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    
    try {
      if (currentUser) {
        await axios.put(`/api/basket/`, { basketIds: [] });
        router.refresh();
      }
    } catch (error: any) {
      throw new Error(error)
    }
  }, [currentUser, router])

  return {
    clearBasket,
  }
}

export default useClearBasket