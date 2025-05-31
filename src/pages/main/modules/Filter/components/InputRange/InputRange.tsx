import { AppContext } from "@/app/context/AppContext"
import Slider from "@mui/material/Slider"
import { useContext, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

function InputRange() {
  const ctx = useContext(AppContext)!
  const [searchParams, setSearchParams] = useSearchParams()

  const years = ctx.books.sort((a, b) => a.year - b.year)
  const minYear = years[0].year
  const maxYear = years[years?.length - 1].year

  console.log(ctx.filters.yearMin, ctx.filters.yearMax)
  const [range, setRange] = useState<[number, number]>([ctx.filters.yearMin || minYear, ctx.filters.yearMax || maxYear])

  const handleChange = (e: {target: {value: [number, number]}}) => {
    const newParams = new URLSearchParams(searchParams)

    const val = e.target.value
    console.log(val, range);
    setRange([val[0], val[1]]);

  if (val[0] !== range[0]) {
    ctx.setFilters({ ...ctx.filters, yearMin: val[0] })
    newParams.set('yearMin', String(val[0]))
  }

  if (val[1] !== range[1]) {
    ctx.setFilters({ ...ctx.filters, yearMax: val[1] })
    newParams.set('yearMax', String(val[1]))
  }
    
    setSearchParams(newParams)
  }
  
  useEffect(() => {
    console.log('SEARCH PARAMS ПОМЕНЯЛСЯ')
    if (!searchParams.get('yearMin') && !searchParams.get('yearMax')) {
      setRange([minYear, maxYear])
    }
  }, [searchParams])

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