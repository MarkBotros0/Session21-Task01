import { Box, Button, Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { themes } from '../misc/themes'
import { ThemeModeContext } from './ThemeProvider'


const PostContent = ({ post }) => {
    const { themeMode } = useContext(ThemeModeContext)

    return (
        <Container maxWidth="md" sx={{ mb: "70px" }}>

            <Box sx={{ borderRadius: "8px", backgroundColor: themes[themeMode].bgColor.component, marginTop: "35px", padding: "48px 43px 60px 48px" }}>
                <Box sx={{ justifyContent: 'space-between', alignItems: "center", display: "flex", mb: "48px" }}>
                    <Box>
                        <Typography sx={{ fontSize: "16px", color: themes[themeMode].text.normal, mb: "10px" }}>{post.detected_extensions.posted_at + " • " + post.detected_extensions.schedule_type}</Typography>
                        <Typography sx={{ fontweight: "bold", fontSize: "30px", mb: "14px", color: themes[themeMode].text.header }}>{post.title}</Typography>
                        <Typography sx={{ color: "#5964E0", fontSize: "14px", fontweight: "bold" }}>{post.location}</Typography>
                    </Box>
                    <Box>
                        <Button sx={{
                            backgroundColor: "#5964E0", padding: "15px 30px", fontSize: "16px", textTransform: "capitalize",
                            '&:hover': { backgroundColor: "#939bf4" },
                        }} variant='contained'> Apply Now </Button>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{ color: themes[themeMode].text.normal }} variant='p'>{post.description}</Typography>

                    {post.job_highlights?.map((hl, i) => (
                        <Box key={i}>
                            <Typography sx={{ fontweight: "bold", fontSize: "20px", mt: "40px", mb: "28px", color: themes[themeMode].text.header }}>{hl.title}</Typography>
                            {hl.items.map((item, i) => (
                                <Box sx={{ display: "flex" }} key={i}>
                                    <Typography sx={{ color: "#5964E0", fontWeight: "bold", mr: "25px" }}>{i + 1}</Typography>
                                    <Typography sx={{ color: "#6E8098", lineHeight: "26px", mb: "8px" }} variant='p'>{item} </Typography>
                                </Box>
                            ))}

                        </Box>
                    ))}

                </Box>
            </Box>
        </Container>
    )
}

export default PostContent