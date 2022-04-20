import React from "react";
import PropTypes from 'prop-types';

const Profile = (props) => {

  return (
    <div className="card" style={{ display:"flex", flexWrap:"wrap", alignItems:"center", backgroundColor:"#fff", maxWidth:"450px", margin:"auto", padding:"30px 30px 60px", borderRadius:"20px", boxShadow:"0 0 20px rgb(6 72 86 / 15%)", fontSize:"20px" }}>
      {props.children}
      <ul className="user-infos"style={{ marginLeft:"20px", listStyle:"none", paddingLeft:"0" }}>
        <li style={{ marginBottom: "15px" }}>
          <strong>Prenom:</strong> {props.fullName}
        </li>
        <li style={{ marginBottom: "15px" }}>
          <strong>Bio:</strong> {props.bio}
        </li>
        <li style={{ marginBottom: "15px" }}>
          <strong>Profession:</strong> {props.profession}
        </li>
      </ul>

      <a href="/#" onClick={props.handleName} style={{ background: "#000", color: "#fff", padding: "10px 20px", textDecoration: "none", borderRadius:"8px" }} >Clique ici </a>

    </div>
  );
};

Profile.propTypes = {
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio : PropTypes.string,
    handleName: PropTypes.func,
};

Profile.defaultProps = {
    fullName: "Ousmane",
    profession: "Professeur",
    bio : "Lorem ipsum dolor sit amet ...",
}

export default Profile;
