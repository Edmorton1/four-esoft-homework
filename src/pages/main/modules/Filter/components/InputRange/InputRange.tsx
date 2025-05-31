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

  const handleChange = (_event: Event, newValue: number | number[]) => {
    if (!Array.isArray(newValue)) return;

    const [min, max] = newValue;
    setRange([min, max]);

    const newParams = new URLSearchParams(searchParams);

    if (min !== range[0]) {
      ctx.setFilters({ ...ctx.filters, yearMin: min });
      newParams.set("yearMin", String(min));
    }

    if (max !== range[1]) {
      ctx.setFilters({ ...ctx.filters, yearMax: max });
      newParams.set("yearMax", String(max));
    }

    setSearchParams(newParams);
  };
  
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