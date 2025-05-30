import useUpdateParams from "@/shared/hooks/useUpdateParams";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem"

function Author({ author }: { author: string }) {
  const [params, updateParams] = useUpdateParams();
  console.log("params include", params?.authors?.includes(author));

  const handleClick = () => updateParams("authors", author, false, true);

  return (
    <>
      {/* <label htmlFor={author}>{author}</label>
    <input type="checkbox" id={author} onChange={handleClick} checked={params?.authors?.includes(author) ?? false} /> */}
    <MenuItem id={author} onClick={handleClick}>
      <FormControlLabel
        id={author}
        control={<Checkbox />}
        label={author}
        checked={params?.authors?.includes(author) ?? false}
      />
    </MenuItem>

      {/* <button onClick={() => console.log(params?.authors?.includes(author))} >log</button> */}
    </>
  );
}

export default Author;
