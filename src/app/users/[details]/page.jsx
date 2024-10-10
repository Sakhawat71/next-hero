

const UserDetails = ({params}) => {
    
    console.log(params.details);
    
    return (
        <div className="h-80 bg-lime-200 ">
            <h1>hi i am {params.details}</h1>
        </div>
    );
};

export default UserDetails;