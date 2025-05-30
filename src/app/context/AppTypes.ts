import type paramsSchema from "@/shared/hooks/validateParams"
import type { z } from "zod"

export type BookType = {
  id: string,
  title: string,
  author: string,
  year: number,
  isbn?: string
  description?: string,
}

export type FilterType = z.infer<typeof paramsSchema>

export type ThemeType = 'light' | 'dark'
