// import { AppContext } from "@/app/context/AppContext";
// import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import MenuItem from "@mui/material/MenuItem"
// import { useContext } from "react";
// import { useSearchParams } from "react-router-dom";

// function Author({ author }: { author: string }) {
//   // console.log("params include", params?.authors?.includes(author));
//   const [searchParams, setSearchParams] = useSearchParams()

//   const ctx = useContext(AppContext)!

//   const handleClick = () => {
//     const newParams = new URLSearchParams(searchParams)
//     const inParams = newParams.getAll('author')

//     if (inParams.includes(author)) {
//       newParams.delete('author', author)
//       ctx.setFilters({...ctx.filters, author: [...ctx.filters.author.filter(e => e !== author)]})
      
//     } else {
//       newParams.append('author', author)
//       ctx.setFilters({...ctx.filters, author: [...ctx.filters.author, author]})
//     }

//     setSearchParams(newParams)
//   }

//   return (
//     <>
//       {/* <label htmlFor={author}>{author}</label>
//     <input type="checkbox" id={author} onChange={handleClick} checked={params?.authors?.includes(author) ?? false} /> */}
//     <MenuItem id={author} onClick={handleClick}>
//       <FormControlLabel
//         id={author}
//         control={<Checkbox />}
//         label={author}
//         checked={ctx.filters.author?.includes(author) ?? false}
//       />
//     </MenuItem>

//       {/* <button onClick={() => console.log(params?.authors?.includes(author))} >log</button> */}
//     </>
//   );
// }

// export default Author;
