import { AppContext } from "@/app/context/AppContext"
import useDebounceParams from "@/shared/hooks/useDebounceParams"
import useUpdateParams from "@/shared/hooks/useUpdateParams"
import Slider from "@mui/material/Slider"
import Typography from "@mui/material/Typography"
// import Button from "@mui/material/Button"
// import Slider from "@mui/material/Slider"
// import Stack from "@mui/material/Stack"
// import Typography from "@mui/material/Typography"
import { useContext, useEffect, useState } from "react"

// const SLIDER = "slider-input"

function InputRange() {
  const ctx = useContext(AppContext)

  const years = ctx!.books.sort((a, b) => a.year - b.year)
  const minYear = years[0].year
  const maxYear = years[years?.length - 1].year

  const [firstDeb, setFirstDeb] = useDebounceParams('min_year', 200)
  const [secondDeb, setSecondDeb] = useDebounceParams('max_year', 200)
  const [params] = useUpdateParams()

  const [range, setRange] = useState<[string | number, string | number]>([params.min_year || minYear, params.max_year || maxYear])

  const handleChange = (e: {target: {value: [number, number]}}) => {
    const val = e.target.value
    console.log(val, range);
    setRange([val[0], val[1]]);
    const val_sorted = val.sort((a, b) => a - b)
    setFirstDeb(val_sorted[0]);
    setSecondDeb(val_sorted[1])
  }

  return <>
    <Slider
      min={minYear}
      max={maxYear}
      getAriaLabel={() => 'Temperature range'}
      value={range}
      onChange={handleChange}
      valueLabelDisplay="auto"

      marks={[
        // {value: minYear, label: minYear}, 
        // {value: maxYear, label: maxYear}, 
        {value: Number(range[0]), label: range[0]}, 
        {value: Number(range[1]), label: range[1]}
      ]}
    />
  </>

}

export default InputRange

  // <Stack sx={{width: 300}}>

  //   <Typography id={SLIDER} gutterBottom>Год выпуска:</Typography>
  //   <Slider id={SLIDER} />
  //   <Button>asd</Button>
  //   <Button>asd</Button>
  // </Stack>