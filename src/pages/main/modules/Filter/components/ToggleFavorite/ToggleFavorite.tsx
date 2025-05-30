import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

function ToggleFavorite() {
  const htmlFor = "input-favorites"

  const handleClick = () => console.log("ZAGLUSHA")

  return <>
    <FormControlLabel
      id={htmlFor}
      label="Только избранные"
      checked={typeof `params?.favorites === "true"` === 'string'}
      control={<Checkbox />}
      onChange={handleClick}
    />

    {/* <label htmlFor={htmlFor}>Только избранные</label>
    <input type="checkbox" id={htmlFor} onChange={handleChange} checked={params?.favorites === "true"} /> */}
  </>
}

export default ToggleFavorite