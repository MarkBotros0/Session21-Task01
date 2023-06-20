import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { ThemeModeContext } from './ThemeProvider';

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 35,
    height: 20,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding:"2px 0px 2px 4px",
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#5964E0',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : 'white',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        color:'#5964E0',
        width: 16,
        height: 16,
        borderRadius: 8,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 20 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'white',
        boxSizing: 'border-box',
    },
}));

export default function CustomizedSwitches() {
  const { toggleThemeMode } = React.useContext(ThemeModeContext)

    return (
        <FormGroup>
            <Stack direction="row" spacing={1} alignItems="center">
                <WbSunnyIcon sx={{ color: "white" }} />
                <AntSwitch onChange={toggleThemeMode} inputProps={{ 'aria-label': 'ant design' }} />
                <NightlightRoundIcon sx={{ color: "white" }} />
            </Stack>
        </FormGroup>
    );
}