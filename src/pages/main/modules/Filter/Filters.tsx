import Authors from "@/pages/main/modules/Filter/components/Authors/Authors"
// import InputRange from "@/pages/main/modules/Filter/components/InputRange/InputRange"
import Reset from "@/pages/main/modules/Filter/components/Reset/Reset"
import ToggleFavorite from "@/pages/main/modules/Filter/components/ToggleFavorite/ToggleFavorite"
import styles from "@/shared/css/Main.module.scss"

function Filters() {

  return <div className={styles.main__filters}>
  {/* <InputRange /> */}
  <Authors />
  <ToggleFavorite />
  <Reset />
  </div>
}

export default Filters

  // <Stack sx={{width: 300}}>

  //   <Typography id={SLIDER} gutterBottom>Год выпуска:</Typography>
  //   <Slider id={SLIDER} />
  //   <Button>asd</Button>
  //   <Button>asd</Button>
  // </Stack>