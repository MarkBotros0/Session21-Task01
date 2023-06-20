import { Box, Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import bgimage from '../images/Group 10.png'
import Switch from './Switch.js'
import { ThemeModeContext } from './ThemeProvider'
import { themes } from '../misc/themes'

const Header = (props) => {
    const { themeMode } = useContext(ThemeModeContext)

    return (
        <div style={{ backgroundColor: themes[themeMode].bgColor.app }}>
            <Box sx={{ position: 'absolute', width: "100%", height: "175px" }} >
                <img style={{ width: "100%", height: "100%" }} src={bgimage} alt="#" />
            </Box>
            <Container maxWidth="xl" sx={{ position: "relative" }}>
                <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: "center" }}>
                    <Typography variant='h4' sx={{ color: "white", mt: "45px", mb: "45px" }}>devjobs</Typography>
                    <Switch />
                </Box>
            </Container>

            {props.children}

        </div>
    )
}

export default Header