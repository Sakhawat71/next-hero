export async function GET({paramas}){

    console.log(paramas);

    return Response.json({
        message: "this is nested route"
    })
}