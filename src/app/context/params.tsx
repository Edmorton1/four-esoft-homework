import type { FilterType } from "@/app/context/AppTypes";
import paramsSchema from "@/app/context/validateParams";
// http://localhost:5173/?search=react&author=Smith&author=Jones&yearMin=2000&yearMax=2020&favorites=true

function parseParams(): FilterType {
  const params = new URLSearchParams(window.location.search);
  const [favorites, author, yearMin, yearMax] = [params.get('favorites'), params.getAll('author'), params.get('yearMin'), params.get('yearMax')]
  const objParams = {favorites, author, yearMin, yearMax}
  console.log('parama', objParams)
  console.log("params", favorites, author, yearMin, yearMax);

  return paramsSchema.parse(objParams)
}

export default parseParams;
