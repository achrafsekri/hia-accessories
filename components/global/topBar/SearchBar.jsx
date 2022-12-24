import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import SearchModule from './SearchModule'
const SearchBar = () => {
  const [search, setSearch] = React.useState(false)
  const handleOpenSearch = () => {
    setSearch(!search)
  }
  return (
    <>
      <button onClick={handleOpenSearch} className="flex items-center gap-1 "><AiOutlineSearch className="text-lg" />rechercher</button>
      <SearchModule isOpen={search} setIsOpen={setSearch} />
      <div className="hidden">
        <input type="text" placeholder="Rechercher" />
      </div>
    </>
  )
}

export default SearchBar