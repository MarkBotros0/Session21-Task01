import { IconButton, InputBase } from '@mui/material'
import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { themes } from '../misc/themes'
import { ThemeModeContext } from './ThemeProvider';
import FilterAltIcon from '@mui/icons-material/FilterAlt';


const MobileFilterBar = ({ handleSearch, searchQuery, setSearchQuery, handleOpen }) => {

    const { themeMode } = useContext(ThemeModeContext)

    return (
        <div style={{
            backgroundColor: themes[themeMode].bgColor.component, display: "flex", justifyContent: "space-between",
            height: "81px", alignItems: "center", paddingLeft: "20px", borderRadius: "10px"
        }}>
            <div style={{ flexGrow: "1" }}>
                <InputBase sx={{ color: themes[themeMode].text.normal }} value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }} fullWidth placeholder="Filter by title..." />
            </div>
            <div style={{ display: "flex" }} >
                <IconButton onClick={handleOpen} aria-label="filter" >
                    <FilterAltIcon sx={{ color: themeMode == "light" ? "#6e8098" : "white" }} />
                </IconButton>
                <IconButton onClick={handleSearch}>
                    <SearchIcon sx={{ bgcolor: themes[themeMode].text.blue, color: "white", borderRadius: "4px", padding: "10px 10px", fontSize: "27px" }} />
                </IconButton>
            </div>
        </div>

    )
}
export default MobileFilterBar