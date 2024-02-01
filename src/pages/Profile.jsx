
import Registration from "../components/Registration";
function Profile({ username, email }) {
    return ( 
            <div className='bg-white w-4/5 mx-auto h-full'>
       
        <div>
            <h1 className='font-bebas text-blue-300 text-8xl text-center'>{username}</h1>
            <div className='w-4/5 mx-auto'>
            
            <p className='rounded font-bebas text-blue-950 text-3xl mx-auto'>email: {email}</p>
            </div>
       
        </div>
        <br></br>
        <Registration />
        </div>
        
     );
}

export default Profile;