export async function GET(request,{params}){

    console.log(params.id);

    return Response.json({
        message: "this is dynamic id",
    })
}