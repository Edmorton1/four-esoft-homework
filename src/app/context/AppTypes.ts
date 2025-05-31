import type paramsSchema from "@/app/context/validateParams"
import type { z } from "zod"

export type BookType = {
  id: string,
  title: string,
  author: string,
  year: number,
  isbn?: string
  description?: string,
  img?: string
}

export type FilterType = z.infer<typeof paramsSchema>

export type ThemeType = 'light' | 'dark'
