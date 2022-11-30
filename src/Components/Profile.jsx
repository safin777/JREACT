
const Profile = (props) => {
    return (

        <div className="profile">
           <p>My name is : {props.name}</p>
           <p>My age is : {props.age}</p>
           {props.children}
        </div>
    );
}


export default Profile;