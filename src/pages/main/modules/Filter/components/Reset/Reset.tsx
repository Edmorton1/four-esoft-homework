import useUpdateParams from "@/shared/hooks/useUpdateParams"

function Reset() {
  const [params, updateParams, removeParams] = useUpdateParams()

  const handleClick = () => removeParams('*')

  return <button onClick={handleClick}>Сбросить фильтры</button>
}

export default Reset