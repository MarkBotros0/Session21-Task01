import * as React from 'react';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Modal from '@mui/material/Modal';
import { Button, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import { themes } from '../misc/themes';
import { ThemeModeContext } from './ThemeProvider';
import CheckBox from './CheckBox';
import { useContext } from 'react';

// modal style
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column"
};

export default function MyModal({ handleSearch, location, setLocation, open, handleClose, isChecked, setIsChecked }) {

    const { themeMode } = useContext(ThemeModeContext)

    const theme = createTheme({
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                    },
                },
            },
        },
    });

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>
                    <Box sx={style}>
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
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", bgcolor: themes[themeMode].bgColor.component }}>
                                <Box sx={{ display: "flex", alignItems: "center", my: "40px", justifyContent: "flex-start", width: "100%", ml: "80px" }}>
                                    <CheckBox isChecked={isChecked} setIsChecked={isChecked} />
                                    <Typography sx={{ fontWeight: "bold", fontSize: "17px", color: themes[themeMode].text.header }}>Full Time Only</Typography>
                                </Box>
                                <Box sx={{ width: "80%" }}>
                                    <Button fullWidth onClick={handleSearch} sx={{
                                        mb: "20px",
                                        backgroundColor: "#5964E0", padding: "15px 30px", fontSize: "18px", textTransform: "capitalize", fontWeight: "bold",
                                        '&:hover': { backgroundColor: "#939bf4" },
                                    }} variant='contained'> Search </Button>
                                </Box>
                            </Box>
                        </ThemeProvider>

                    </Box>
                </>
            </Modal>
        </div>
    );
}