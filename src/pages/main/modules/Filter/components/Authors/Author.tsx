import useUpdateParams from "@/shared/hooks/useUpdateParams"

function Author({author}: {author: string}) {
  const [params, updateParams] = useUpdateParams()
  console.log('params include', params?.authors?.includes(author))

  const handleClick = () => updateParams('authors', author, false, true)

  return <>
    <label htmlFor={author}>{author}</label>
    <input type="checkbox" id={author} onChange={handleClick} checked={params?.authors?.includes(author) ?? false} />
    {/* <button onClick={() => console.log(params?.authors?.includes(author))} >log</button> */}
  </>
}

export default Author