import "./App.css";
import ProfileImg from "./logo.svg";
import Profile from "./profile/Profile";

const App = () => {
  const userInfos = {
    fullName: "Youssoupha CASSE",
    bio: "Lorem ipsum...",
    profession: "Front-end developper",
  };

  const handleName = () => {
    alert(`Le fullName est ${userInfos.fullName}`);
  };

  return (
    <div className="App" style={{ padding: "100px" }}>
      <Profile
        fullName={userInfos.fullName}
        bio={userInfos.bio}
        profession={userInfos.profession}
        handleName={handleName}
      >
        <img
          src={ProfileImg}
          alt="Myphoto"
          style={{
            height: "100px",
            width: "100px",
            objectFit: "cover",
            borderRadius: "50px",
          }}
        />
      </Profile>
    </div>
  );
};

export default App;
