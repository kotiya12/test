
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core"
import { NavLink } from "react-router-dom";

const useStyle= makeStyles({
    root: {
        flexGrow: 1,
      },
    header : {
        background: '#009688'
    },
    tabs: {
        color: '#ffffff', 
        textDecoration : 'none',
        marginRight: 20,
        fontSize: 20
        
    },

    log: {
        color: '#ffffff', 
        textDecoration : 'none',
        marginRight: 20,
        fontSize: 20,
        flexGrow: 2,
        
    }
})
const NavBar = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
        <AppBar className={classes.header}position="static">
            <Toolbar>
            {/* <NavLink className={classes.log} to="/" exact>
                    Home
                </NavLink> */}
                
                <NavLink className={classes.tabs} to= "/login" exact>
                    Login
                </NavLink>
                <NavLink className={classes.tabs} to= "/signup" exact>
                    SignUp
                </NavLink>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar

