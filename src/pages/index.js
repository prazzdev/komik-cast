import Image from "next/image"

export default function Home({ data }) {
  console.log(data)
  return (
    <>
      {data.map((data, i) => {
        return (
          <div className="flex flex-col justify-center items-center">
            <Image 
              className="border-2 border-gray-800"
              key={i} src={data.imgUrl} height={300} width={400} />
          </div>
        )
      })}
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:8000/komik')
  const data = await res.json()

  return { props: data }
}