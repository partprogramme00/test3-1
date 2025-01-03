import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <section>
         <h1 className="text-base font-bold ">HALLO BANG</h1>
             <Link href="/albums">ALBUMS PAGE</Link>
             <br/>
            <Link href="./posts/webtest">POSTS PAGE</Link>
    </section>
    
  )
}

export default Home