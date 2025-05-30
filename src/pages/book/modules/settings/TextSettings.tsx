import BoldFont from "@/pages/book/modules/settings/components/BoldFont"
import Color from "@/pages/book/modules/settings/components/Color"
import FontSize from "@/pages/book/modules/settings/components/FonrSize"
import styles from "@/shared/css/Settings.module.scss"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"

function TextSettings() {


  return <Box className={styles.main}>
    <FontSize />
    <Divider />
    <Color />
    <Divider />
    <BoldFont />
  </Box>
}

export default TextSettings