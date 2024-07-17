import Users from "../../components/AdminComponents/Users/Users";


const UsersView = (props) =>{

    return(
        <div>
            <Users users={props.users} />
        </div>
    )


}


export default UsersView;