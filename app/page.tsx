'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

type Post = {
  id: Number;
  imageUrl: string;
  like: Number;
  comments: Number;
}

function Post(props: Post) {
  return <div className=" w-full pb-[100%] h-0 max-h-0 relative">
    <img src={props.imageUrl}></img>
  </div>
}

export default function Home() {
  const [info, setInfo] = useState<Record<string, any>>({})
  const [posts, setPosts] = useState<Post[]>([])
  useEffect( () => {
     fetch('/api/posts').then(resp => {
      return resp.json()
     }).then(resp => {
      setPosts(resp.posts)
      return null
     })
     fetch('/api/info').then(resp => resp.json()).then(resp => setInfo(resp))
  }, [])
  return (
    <main className="w-full h-full bg-white">
      <div className="mx-auto w-full max-w-[935px]">
        <div className="flex items-end space-x-10">
          <div className="rounded-full w-[168px] h-[168px] overflow-hidden">
            <img src={info.avatar} alt="Avatar" />
          </div>
          <div>
            <div className=" font-bold">
              {info?.hastag}
            </div>
            <div>{info?.postCount}</div>
            <div>posts</div>
          </div>
        </div>
        <div className="mt-10">
          <div>top posts</div>
          <div className="grid grid-cols-3 gap-3">
            {posts.map(post => <Post key={`${post.id}`} {...post} />)}
          </div>
        </div>
      </div>
    </main>
  );
}
