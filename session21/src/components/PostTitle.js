import { Box, Button, Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { themes } from '../misc/themes'
import { ThemeModeContext } from './ThemeProvider'

const PostTitle = ({ post }) => {

  const { themeMode } = useContext(ThemeModeContext
  )
  return (
    <Container maxWidth="md" sx={{ position: "relative" }}>
      <Box sx={{ bgcolor: themes[themeMode].bgColor.component, display: "flex", borderRadius: "10px", borderTopLeftRadius: "0px", height: "180px", alignItems: "center", justifyContent: "space-between" }}>
        <Box display={{ height: "100%", display: "flex", alignItems: "center" }}>
          <Box sx={{ objectFit: "cover", height: "100%", width: "180px", alignItems: "center", display: "flex" }}>
            <img style={{ width: "100%" }} src={post.thumbnail} alt='#' />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", pl: "40px" ,width:"50%"}}>
            <Typography sx={{ fontSize: "30px", fontWeight: "bold", mb: "12px", color: themes[themeMode].text.header }}>{post.company_name}</Typography>
            <Typography sx={{ fontSize: "18px", color: "#6E8098" }}>{post.related_links[0].text}</Typography>
          </Box>

        </Box>

        <Button href={post.related_links[0].link} sx={{
          backgroundColor: themes[themeMode].button.default, mr: "50px", padding: "15px 20px", fontSize: "16px", textTransform: "capitalize", color: themes[themeMode].button.text,
          '&:hover': { backgroundColor: themes[themeMode].button.hover },whiteSpace:"nowrap"
        }} variant='contained'> Company Site </Button>
      </Box>
    </Container>
  )
}

export default PostTitle