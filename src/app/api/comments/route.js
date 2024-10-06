export async function GET() {
    return Response.json({
        comments
    })
}

export async function POST(request) {

    const newComment = await request.json();

    comments.push({
        id: comments.length + 1,
        text: newComment.text,
    });

    return Response.json({
        message: "hello world",
        comments
    })
}

const comments = [
    {
        id: 1,
        text: "hello world"
    },
    {
        id: 2,
        text: "hello Bangladesh"
    },
    {
        id: 3,
        text: "hello Sylhet"
    },
]