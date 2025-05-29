import Authors from "@/pages/main/modules/Filter/components/Authors/Authors"
import InputRange from "@/pages/main/modules/Filter/components/InputRange/InputRange"
import Reset from "@/pages/main/modules/Filter/components/Reset/Reset"
import ToggleFavorite from "@/pages/main/modules/Filter/components/ToggleFavorite/ToggleFavorite"

function Filters() {

  return <>
  <InputRange />
  <Authors />
  <ToggleFavorite />
  <Reset />
  </>
}

export default Filters

  // <Stack sx={{width: 300}}>

  //   <Typography id={SLIDER} gutterBottom>Год выпуска:</Typography>
  //   <Slider id={SLIDER} />
  //   <Button>asd</Button>
  //   <Button>asd</Button>
  // </Stack>