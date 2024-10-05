export async function GET() {
    return Response.json({
        comments
    })
}

export async function POST(request) {
    const newComment = request.json();
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