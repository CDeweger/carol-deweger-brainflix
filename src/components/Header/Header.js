import logo from "../../assets/logo/brainFlix-logo.svg";
import avatarImg from "../../assets/images/mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
import searchIcon from "../../assets/icons/search.svg";
import '../../styles/_partials/_global.scss';


function Header() {
    return (
        <header className ="brainflix-header">
            <div className ="brainflix-header__logo-container">
                <img className ="brainflix-header__logo-container--logo" src={logo} alt="BrainFlix logo"/>
            </div>
            <div className ="brainflix-header__search">
                <img className ="brainflix-header__search--icon" src={searchIcon} alt="search"/>
                <input className ="brainflix-header__search--input" type="text" placeholder="Search"></input>
            </div>
            <div className ="brainflix-header__container">
                <img className ="brainflix-header__container--img" src={avatarImg} alt="mohan-muruge"/>
            </div>        
            <div className ="brainflix-header__button">
                <img className ="brainflix-header__button--icon" src={uploadIcon} alt="upload"/>
                <p className ="brainflix-header__button--upload">UPLOAD</p>
            </div> 
        </header>
      
    );
}

export default Header;
  