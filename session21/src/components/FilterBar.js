import { Box, Grid, TextField, Button, createTheme, ThemeProvider, Typography } from '@mui/material'
import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckBox from './CheckBox';
import { themes } from '../misc/themes'
import { ThemeModeContext } from './ThemeProvider';


const FilterBar = ({ handleSearch, searchQuery, setSearchQuery, location, setLocation, isChecked,setIsChecked }) => {

  const { themeMode } = useContext(ThemeModeContext)

  //first input styles
  const theme1 = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderTopRightRadius: '0px',
            borderBottomRightRadius: "0px"
          },
        },
      },
    },
  });

  //second input styles
  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: '0px'
          },
        },
      },
    },
  });

  return (
    <Box >
      <Grid container spacing={0}>
        <Grid item xs={5} >
          <ThemeProvider theme={theme1}>
            <TextField placeholder="Filter by title, companies, expertise..." fullWidth value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                bgcolor: themes[themeMode].bgColor.component, borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px",
                '& .MuiInputBase-input': {
                  fontSize: '20px',
                  padding: '27px 10px',
                }
              }}
              InputProps={{
                startAdornment: (
                  <SearchIcon sx={{ color: "#5964E0", fontSize: "35px" }} />
                ),
                style: {
                  color: themes[themeMode].text.normal,
                  '&::placeholder': {
                    color: themes[themeMode].text.normal,
                  }
                }
              }} />
          </ThemeProvider>
        </Grid>
        <Grid item xs={3}>
          <ThemeProvider theme={theme}>
            <TextField placeholder="Filter by location" fullWidth value={location} onChange={(e) => setLocation(e.target.value)} sx={{
              bgcolor: themes[themeMode].bgColor.component,
              '& .MuiInputBase-input': {
                fontSize: '20px',
                padding: '27px 10px',
              }
            }}
              InputProps={{
                startAdornment: (
                  <LocationOnIcon sx={{ color: "#5964E0", fontSize: "35px" }} />
                ),
                style: {
                  color: themes[themeMode].text.normal,
                  '&::placeholder': {
                    color: 'red', // Change this color to your desired placeholder color
                  }
                }
              }} />
          </ThemeProvider>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{ pl: "30px", display: "flex", alignItems: "center", justifyContent: "space-evenly", bgcolor: themes[themeMode].bgColor.component, borderTopRightRadius: "4px", borderBottomRightRadius: "4px", height: "81px", border: "1px solid", borderColor: themes[themeMode].input.border }} >
            <CheckBox isChecked={isChecked} setIsChecked={setIsChecked}/>
            <Typography sx={{ fontWeight: "bold", fontSize: "17px", color: themes[themeMode].text.normal }}>Full Time Only</Typography>
            <Button onClick={handleSearch} sx={{
              backgroundColor: "#5964E0", padding: "15px 30px", fontSize: "16px", textTransform: "capitalize",
              '&:hover': { backgroundColor: "#939bf4" },
            }} variant='contained'> Search </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
export default FilterBar