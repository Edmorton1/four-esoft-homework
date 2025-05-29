import useUpdateParams from "@/shared/hooks/useUpdateParams"

function ToggleFavorite() {
  const [params, updateParams] = useUpdateParams()
  const htmlFor = "input-favorites"

  const handleChange = () => updateParams('favorites', 'true')

  return <>
    <label htmlFor={htmlFor}>Только избранные</label>
    <input type="checkbox" id={htmlFor} onChange={handleChange} checked={params?.favorites === "true"} />
  </>
}

export default ToggleFavorite