import React, { useContext } from "react";
import { BrowserRouter, Link, useLocation, useNavigate } from "react-router-dom";
import gbpu from "../Images/gbpu.png";
import styles from "./Navbar.module.css";
import person from "../Images/icons8-person-64.png";

const NavbarMain = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('data')
  }
  const [openMenu,setOpenMenu] = React.useState(false);
  const handleMenu = ()=>{
    setOpenMenu(!openMenu)
  }
  const handleProfile = () => {
    // fetchuserdata();
    // fetchUserDetails();
    // console.log(loggedUser);
    const user = JSON.parse(localStorage.getItem('data'))
    if(user.faculty){
      navigate(`/faculty/${user?.faculty?.id}`);
    }
    else if(user.student){
      navigate(`student/${user?.student?.id}`)
    }
    setOpenMenu(false)
  };
  const handleLogout=()=>{
    logout()
    setOpenMenu(false)
  }
  return (
    <>
      
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <img className={styles.navbarImg} src={gbpu} alt="GBPUAT" />
            <div>
              Govind Ballabh Pant University of Agriculture and Technology
            </div>
          </div>
          <div className={styles.authBtn}>
            {!localStorage.getItem("token") ? (
              <Link to="/login" className={styles.btn}>
                Login
              </Link>
            ) : (
              <></>
            )}
            {localStorage.getItem("token") ? (
              <div className={styles.profileBox}>
                <div onClick={handleMenu} className={styles.profileIcon}>
                  <img src={person} alt="" />
                </div>
                {openMenu?<div className={styles.toggleMenu}>
                  {localStorage.getItem("token")?<div className={styles.menuLogindetail}>Signed in as <b>{JSON.parse(localStorage.getItem("data"))?.user?.name}</b> </div>: <div className={styles.menuLogindetail}>Not logged in</div> }
                  {JSON.parse(localStorage.getItem("data"))?.user?.isFaculty && <div onClick={handleProfile} className={styles.menuOption}>Profile</div>}
                  <div className={styles.menuOption} onClick={handleLogout}>Logout</div>
                </div>:<></>}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
    </>
  );
};

export default NavbarMain;