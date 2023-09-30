import axios from "axios"
import cheerio from "cheerio"
import Image from "next/image"

export default function Home({ result }) {
  console.log(result)

  return (
    <>
    <form action="" method="post" className="flex flex-row ">
      <input 
        className="bg-gray-300 text-white w-full p-3" 
        placeholder="masukkan episode" />
        <button type="submit">Search</button>
    </form>
      {result.map((data, i) => {
        return (
          <div className="flex flex-col justify-center items-center">
            <Image 
              className="border-2 border-gray-800"
              key={i} src={data.url} height={300} width={400} alt={i} />
          </div>
        )
      })}
    </>
  )
}


export async function getServerSideProps({ req }) {
  console.log(req.body)
  const res = await fetch('http://prazzapis.user.cloudjkt01.com/conan?chapter=50')
  const datas = await res.json()
  let result = datas.data

  return { props: { result } }
}