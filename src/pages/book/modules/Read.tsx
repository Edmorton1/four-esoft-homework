import { BookContext } from "@/pages/book/context/BookContext"
import TextSettings from "@/pages/book/modules/settings/TextSettings"
import styles from "@/shared/css/Read.module.scss"
import { useContext } from "react"

function Read() {
  const ctx = useContext(BookContext)!
  // console.log(ctx.textSettings.color)

  return <>
    <p>Текст:</p>
    <TextSettings />
    <div className={styles.text} style={{color: ctx.textSettings.color, fontSize: ctx.textSettings.size, fontWeight: ctx.textSettings.bold ? "bold" : "normal" }}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui provident, adipisci consectetur cupiditate nam numquam minus eum quo fugit illum fuga esse dolores voluptates consequatur aut sunt, vel nesciunt eligendi?
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure accusantium similique quis quia, quas ab. Itaque aspernatur ullam tempora esse at sed iste magnam obcaecati tenetur nisi. Modi, distinctio cumque?
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ipsa fugiat id animi numquam praesentium, ullam quibusdam, natus tenetur aspernatur laboriosam vel molestias cum, quis blanditiis earum quaerat similique nesciunt.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam illum cumque obcaecati corrupti cupiditate soluta commodi neque quos harum dolorem quia dolore placeat maiores, blanditiis fugit nulla explicabo minus repellat!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, optio deserunt? Id nesciunt animi veritatis impedit sed eaque possimus voluptatum iure magni nemo ea, dolorem, excepturi quo facilis voluptates minima.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum explicabo ea architecto ducimus repellendus fugiat, voluptates incidunt voluptatem cum odit officiis dolorum! Aliquid optio amet sit natus ea? Ipsa, necessitatibus.
    </div>
  </>
}

export default Read