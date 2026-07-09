import {useState, useEffect} from 'react'
import axios from 'axios';

const Feed = () => {

    const [posts, setPosts] = useState([

        {
            _id: '1',
            image:"https://images.unsplash.com/photo-1780399382419-b329036e0662?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption: "Mind scenery"
        }

    ]);

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/posts`)
        .then((res)=>{
            console.log(res.data);
            setPosts(res.data.posts);
        })


    }, [])

  return (
    <section className='feed-section'>
         {

            posts.length > 0 ? (
                posts.map((post)=>(
                    <div key={post._id} className='post-card'>
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))
            ) : (
                <h1>No posts available</h1>
            )

    }
    </section>
  )
}

export default Feed