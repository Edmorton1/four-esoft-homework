import useUpdateParams from "@/shared/hooks/useUpdateParams"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

function ToggleFavorite() {
  const [params, updateParams] = useUpdateParams()
  const htmlFor = "input-favorites"

  const handleClick = () => updateParams('favorites', 'true')

  return <>
    <FormControlLabel
      id={htmlFor}
      label="Только избранные"
      checked={params?.favorites === "true"}
      control={<Checkbox />}
      onChange={handleClick}
    />

    {/* <label htmlFor={htmlFor}>Только избранные</label>
    <input type="checkbox" id={htmlFor} onChange={handleChange} checked={params?.favorites === "true"} /> */}
  </>
}

export default ToggleFavorite