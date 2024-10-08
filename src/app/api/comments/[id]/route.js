export const GET = async (request, { params }) => {

    console.log(params.id);

    return new Response(JSON.stringify({
        message: `this is dynamic route for : ${params.id}`,
    }))
}