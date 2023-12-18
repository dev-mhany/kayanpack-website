import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Home", "About Us", "Products", "Contact", "Create Your Box"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event, page) => {
    event.preventDefault(); // Prevent default link behavior
    setAnchorElNav(null);
    navigate(`/${page.toLowerCase().replace(/\s+/g, "-")}`); // Navigate using react-router-dom
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/kayanpack-logo.png" // Path to your logo image
              alt="KayanPack Logo"
              style={{
                height: "50px", // Adjust the height as needed
                marginRight: "10px",
              }}
            />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => {
                const path =
                  page === "Home"
                    ? "/"
                    : `/${page.toLowerCase().replace(/\s+/g, "-")}`;
                return (
                  <MenuItem
                    key={page}
                    onClick={(event) => handleCloseNavMenu(event, page)}
                  >
                    <Link
                      to={path}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => {
              const path =
                page === "Home"
                  ? "/"
                  : `/${page.toLowerCase().replace(/\s+/g, "-")}`;
              return (
                <Button
                  key={page}
                  component={Link}
                  to={path}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
