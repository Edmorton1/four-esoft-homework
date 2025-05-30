import useUpdateParams from "@/shared/hooks/useUpdateParams"
import Button from "@mui/material/Button"

function Reset() {
  const [params, updateParams, removeParams] = useUpdateParams()

  const handleClick = () => removeParams('*')

  return <Button variant="contained" onClick={handleClick}>Сбросить фильтры</Button>
}

export default Reset