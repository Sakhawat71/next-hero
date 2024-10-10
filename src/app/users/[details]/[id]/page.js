const Idpage = ({params}) => {

    console.log(params.id);

    return (
        <div >
            <h1>Id : {params.id}</h1>
        </div>
    );
};

export default Idpage;