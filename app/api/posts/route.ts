export async function GET(request: Request) {
    const posts = new Array(10).fill(0).map((_, index) => {
        return {
            like: Math.floor(Math.random() * 100),
            comments: Math.floor(Math.random() * 100),
            imageUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/300`,
            id: Math.floor(Math.random() * 10000)
        }
    })
    
   
    return Response.json({ posts })
  }