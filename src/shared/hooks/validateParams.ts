import {z} from "zod"

const toBoolean = (val: unknown) => Boolean(val)

const toNumber= z.preprocess(val => {
    if (Number(val)) {
      return Number(val)
    } return 0
  }, z.number())

const paramsSchema = z.object({
  favorites: z.preprocess(toBoolean, z.boolean()),
  author: z.preprocess(val => {
    if (Array.isArray(val) && val.every(v => typeof v === "string")) {
      return val
    } return []
  }, z.array(z.string())),
  yearMin: toNumber,
  yearMax: toNumber
})

export default paramsSchema