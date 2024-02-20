export async function GET(request: Request) {
    return Response.json({ hastag: '#house plants', avatar: 'https://picsum.photos/seed/giraff/200/300' ,postCount: Math.floor(Math.random() * 1000) })
  }