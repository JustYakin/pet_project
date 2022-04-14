import React from 'react'
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import { Badge } from '@mui/material';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const More = () => {

    

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [anchorElNotice, setAnchorElNotice] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleOpenNoticeMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNotice(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleCloseNoticeMenu = () => {
        setAnchorElNotice(null);
    };

  return (
    <> 

        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }}}>
            <Typography
                noWrap
                sx={{ display: { xs: 'none', md: 'flex' } }}
            >
                <IconButton size="large" aria-label="gift" color="inherit">
                    <Badge badgeContent={5} color="error">
                        <CardGiftcardIcon />
                    </Badge>                    
                </IconButton> 

                <IconButton size="large" aria-label="notification" color="inherit">
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton> 

                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                    </IconButton>
                 </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Typography>
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="show more"
                aria-controls="show-more"
                aria-haspopup="true"
                onClick={handleOpenNoticeMenu}
                color="inherit"
            >
                <MoreIcon />
            </IconButton>
            <Menu
                id="show-more"
                anchorEl={anchorElNotice}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
                keepMounted
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
                open={Boolean(anchorElNotice)}
                onClose={handleCloseNoticeMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
           
               
                    <MenuItem sx={{
                                display: 'flex',
                                alignContent: 'center',
                                justifyContent: 'center'
                                }}
                    >
                        <Typography >
                            <IconButton size="large" aria-label="gift" color="inherit">
                                <CardGiftcardIcon />
                            </IconButton> 
                        </Typography>
                    </MenuItem>
                    <MenuItem
                        sx={{
                            display: 'flex',
                            alignContent: 'center',
                            justifyContent: 'center'
                            }}
                    >
                        <Typography>
                            <IconButton text-align="center" size="large" aria-label="notification" color="inherit">
                                <NotificationsIcon/>
                            </IconButton> 
                        </Typography>
                    </MenuItem>
                    <MenuItem
                        sx={{
                            display: 'flex',
                            alignContent: 'center',
                            justifyContent: 'center'
                            }}
                    >
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </MenuItem>
                
            
            </Menu>
        </Box>
    </>
  )
}

export default More