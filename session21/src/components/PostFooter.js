import { Box, Button, Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { themes } from '../misc/themes'
import { ThemeModeContext } from './ThemeProvider'

const PostFooter = ({post}) => {
    const { themeMode } = useContext(ThemeModeContext)

    return (
        <Box sx={{ bgcolor: themes[themeMode].bgColor.component }}>
            <Container maxWidth="md" sx={{ justifyContent: 'space-between', alignItems: "center", display: "flex" ,padding:"20px 0px"}}>
                <Box>
                    <Typography sx={{ fontweight: "bold", fontSize: "20px", mb: "10px" }}>{post.title}</Typography>
                    <Typography sx={{ color: "#6E8098", fontSize: "16px", fontweight: "bold" }}>So Digital inc.</Typography>
                </Box>
                <Box>
                    <Button sx={{
                        backgroundColor: "#5964E0", padding: "15px 30px", fontSize: "16px", textTransform: "capitalize", fontweight: "bold",
                        '&:hover': { backgroundColor: "#939bf4" }
                    }} variant='contained'> Apply Now </Button>
                </Box>
            </Container>
        </Box>

    )
}

export default PostFooter