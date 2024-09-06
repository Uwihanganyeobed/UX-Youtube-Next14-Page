
export default async function Post(){
const data = await fetch('https://api.vercel.app/blog', {cache: 'no-store'})
   const posts = await data.json()

   return (
      <ul>
         {posts.map((post: any)=>(
            <li key={post.id}>{post.title}</li>
         ))}
      </ul>
   )
}

// export default async function dbPost(){

// }