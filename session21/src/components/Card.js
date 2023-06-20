import { Box, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PostContext } from './PostProvider'
import { ThemeModeContext } from './ThemeProvider'
import { themes } from '../misc/themes'


const Card = ({ job }) => {

  const { updatePost } = useContext(PostContext);
  const { themeMode } = useContext(ThemeModeContext)

  const handleClick = () => {
    updatePost(job)
  }

  return (
    <Grid item xs={12} sm={6} md={4} sx={{}}>
      <Box sx={{ paddingTop: "48px", paddingLeft: "32px",pr:"32px", bgcolor: themes[themeMode].bgColor.component, width: "100%", height: "100%", position: "relative", borderRadius: "10px" }} elevation={3} >
        <Box sx={{ position: "absolute", top: "-25px", left: "32px", height: "60px", width: "60px" }}>
          <img style={{ width: "100%", borderRadius: "10px" }} src={job.thumbnail} alt="#" />
        </Box>
        <Box>
          <Typography sx={{ color: themes[themeMode].text.normal, fontSize: "16px", marginBottom: "16px" }}>{job.detected_extensions.posted_at + " • " + job.detected_extensions.schedule_type}</Typography>
          <Link style={{ textDecoration: "none", color: themes[themeMode].text.header }} to={{ pathname: '/post' }}>
            <Typography onClick={handleClick} sx={{ fontSize: "20px", fontWeight: 'bold', mb: "16px" }}>{job.title}</Typography>
          </Link>
          <Typography sx={{ color: themes[themeMode].text.normal, fontSize: "16px", mb: "44px" }}>{job.company_name} </Typography>
          <Typography sx={{ color: themes.light.text.blue, fontSize: "14px", mb: "36px", fontWeight: "bold" }}>{job.location} </Typography>
        </Box>
      </Box>
    </Grid >
  )
}

export default Card