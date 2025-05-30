import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem"

function Author({ author }: { author: string }) {
  // console.log("params include", params?.authors?.includes(author));

  const handleClick = () => console.log("ZAGLUSHA")

  return (
    <>
      {/* <label htmlFor={author}>{author}</label>
    <input type="checkbox" id={author} onChange={handleClick} checked={params?.authors?.includes(author) ?? false} /> */}
    <MenuItem id={author} onClick={handleClick}>
      <FormControlLabel
        id={author}
        control={<Checkbox />}
        label={author}
        checked={typeof 'params?.authors?.includes(author) ?? false' === 'string'}
      />
    </MenuItem>

      {/* <button onClick={() => console.log(params?.authors?.includes(author))} >log</button> */}
    </>
  );
}

export default Author;
