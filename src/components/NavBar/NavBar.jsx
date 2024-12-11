import { Box, Button, Typography } from "@mui/material"
import { useTheme } from "@emotion/react"
import Logo from "../../assets/logo.svg"
import { Link } from "react-router"





const NavBar = () => {
    let theme = useTheme()

    const linkStyle = {
        textDecoration: "none",
        color: `${theme.palette.primary.light}`,
    }
    return (
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} p={2}>
                <Link to={"/home"} style={{ marginLeft: 0 }}><img src={Logo} alt="Medify LOGO" /></Link>
                <Box display={"flex"} gap={4} alignItems={"center"} >
                    <Link to={"/search"} style={linkStyle}>Find Doctors</Link>
                    <Link style={linkStyle}>Hospitals</Link>
                    <Link style={linkStyle}>Medicines</Link>
                    <Link style={linkStyle}>Surgeries</Link>
                    <Link style={linkStyle}>Software for Provider</Link>
                    <Link style={linkStyle}>Facilities</Link>
                    <Button variant="contained" color="primary">
                        <Link to={"/book"} style={{ color: "#fff", textDecoration: 'none' }}>My Bookings</Link>
                    </Button>
                </Box>
            </Box>
    )
}

export default NavBar