import React, { useContext, useEffect, useState } from 'react'
import Card from './Card.js'
import { Box, Button, Container, Grid } from '@mui/material'
import FilterBar from './FilterBar.js'
import { ThemeModeContext } from './ThemeProvider.js'
import { themes } from '../misc/themes.js'
import MobileFilterBar from './MobileFilterBar.js'
import MyModal from './MyModal.js'


const Home = () => {
  const [data, setData] = useState([])
  const [offset, setOffset] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { themeMode } = useContext(ThemeModeContext)


  const fetchData = async () => {
    try {
      const apiKey = "3f227aedb9ad2ae83f6342ed25097aa8d0ec8b4b5340a9145e591b180ccd7ee9"
      const url = `https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google_jobs&q=${searchQuery}&start=${offset}&api_key=${apiKey}&location=${location}`
      const response = await fetch(url, { headers: { 'Authorization': 'Bearer your_token_here' }, method: "GET" })
      const jsonData = await response.json()
      setData([...data, ...jsonData.jobs_results])
      setOffset(offset => offset + 10)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearch = () => {
    fetchData()
    resetData()
  }

  const resetData = () => {
    setData([])
  }

  return (
    <div style={{ backgroundColor: themes[themeMode].bgColor.app, minHeight: "1000px" }}>
      <Container maxWidth="xl" sx={{ position: "relative" }}>
        {screenWidth > 768 ?
          <FilterBar handleSearch={handleSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} location={location} setLocation={setLocation} /> :
          <>
            <MobileFilterBar handleOpen={handleOpen} handleSearch={handleSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <MyModal handleSearch={handleSearch} location={location} setLocation={setLocation} open={modalOpen} handleClose={handleClose} />
          </>
        }
        <Grid sx={{ mt: "70px", position: "relative" }} container rowSpacing={15} columnSpacing={10}>
          {Array.isArray(data) ? data.map((job, index) => (
            <Card key={index} job={job} />
          )) : null
          }

        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", py: "50px" }}>
          {data.length != 0 ? <Button onClick={fetchData} sx={{
            backgroundColor: "#5964E0", padding: "15px 30px", my: "50px", fontSize: "16px", textTransform: "capitalize",
            '&:hover': { backgroundColor: "#939bf4" },
          }} variant='contained'> Load More </Button> : null}
        </Box >
      </Container>
    </div>
  )
}

export default Home