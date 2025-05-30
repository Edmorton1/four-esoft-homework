import Button from "@mui/material/Button"

function Reset() {

  const handleClick = () => console.log("ZAGLUSHKA")

  return <Button variant="contained" onClick={handleClick}>Сбросить фильтры</Button>
}

export default Reset