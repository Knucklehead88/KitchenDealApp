import {
  AppBar,
  Badge,
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import KitchenIcon from "@mui/icons-material/Kitchen";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
// import AdbIcon from '@mui/icons-material/Adb';
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";

const midLinks = [
  { title: "products", path: "/products" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];
const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": {
    color: "gray.500",
  },
  "&:active": {
    color: "text.primary",
  },
};

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box display="flex" alignItems="center">
            <KitchenIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              component={NavLink}
              to="/"
              exact
              sx={navStyles}
              variant="h6"
            >
              Kitchen Deal
            </Typography>
            <Switch checked={darkMode} onChange={handleThemeChange} />
          </Box>

          <List sx={{ display: "flex" }}>
            {midLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>

          <Box display="flex" alignItems="center">
            <List sx={{ display: "flex" }}>
              {rightLinks.map(({ title, path }) => (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={navStyles}
                >
                  {title.toUpperCase()}
                </ListItem>
              ))}
            </List>
            <IconButton size="large" sx={{ color: "inherit" }}>
              <Badge badgeContent={4} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
