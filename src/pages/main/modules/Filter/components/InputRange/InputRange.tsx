import { AppContext } from "@/app/context/AppContext"
import useDebounceParams from "@/shared/hooks/useDebounceParams"
// import Button from "@mui/material/Button"
// import Slider from "@mui/material/Slider"
// import Stack from "@mui/material/Stack"
// import Typography from "@mui/material/Typography"
import { useContext, useEffect, useState } from "react"

// const SLIDER = "slider-input"

function InputRange() {
  const [range, setRange] = useState(50)

  const ctx = useContext(AppContext)
  const [debParams, setDebounce] = useDebounceParams('year', 200)

  useEffect(() => {
    if (debParams) {
      setRange(debParams)
    }
  }, [debParams])

  const years = ctx!.books.sort((a, b) => a.year - b.year)
  const minYear = years[0].year
  const maxYear = years[years?.length - 1].year
  // console.log(minYear, maxYear)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {setDebounce(e.target.value); setRange(e.target.value)}
  // console.log(debounce)

  return <>
    <div>
      <span>{minYear}</span>
      <input min={minYear} max={maxYear} value={range} onChange={handleChange} type="range" />
      <span>{maxYear}</span>
    </div>
    <div>Текущий: {debParams}</div>
  </>

}

export default InputRange

  // <Stack sx={{width: 300}}>

  //   <Typography id={SLIDER} gutterBottom>Год выпуска:</Typography>
  //   <Slider id={SLIDER} />
  //   <Button>asd</Button>
  //   <Button>asd</Button>
  // </Stack>