import AvatarImg from "../../assets/images/mohan-muruge.jpg"

function Header () {
    return (
    <header className ="brainflix-header">
        <img className ="brainflix-header__img" src={AvatarImg} alt="mohan-muruge"/>
    </header>
    );
}

export default Header;