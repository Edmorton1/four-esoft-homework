import { AppContext } from '@/app/context/AppContext';
import useDebounce from '@/shared/hooks/useDebounce';
import { SearchContainer, SearchIconWrapper, StyledInputBase } from '@/shared/ui/Header/components/Search/StyledSearch';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import { useContext, useEffect, useState } from 'react';

function Search() {
  const [debounce, setDebounce] = useDebounce()
  const [value, setValue] = useState('')
  const ctx = useContext(AppContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = e.target.value
    setDebounce(val);
    setValue(val)
  }

  useEffect(() => {
    console.log(debounce)
    ctx!.setSearchQuery(debounce || '')
  }, [debounce])

  return (
    <SearchContainer>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <Tooltip title="Введите запрос для поиска" disableHoverListener disableTouchListener>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={handleChange}
          value={value}
        />
      </Tooltip>
    </SearchContainer>
  );
}

export default Search;
