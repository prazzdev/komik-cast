import axios from "axios"
import cheerio from "cheerio"
import Image from "next/image"

export default function Home({ datas }) {
  console.log(datas)
  return (
    <>
      {datas.map((data, i) => {
        return (
          <div className="flex flex-col justify-center items-center">
            <Image 
              className="border-2 border-gray-800"
              key={i} src={data.imgUrl} height={300} width={400} />
          </div>
        )
      })}
      <p>hehehe</p>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await axios.get('https://komikcast.net/detective-conan-chapter-001/')
  const $ = cheerio.load(data)
  let datas = []
  $('#anjay_ini_id_kh > img').each(function(i, elem) {
      datas[i] = {
          imgUrl: $(this).attr('src')
      }
  })

  return {
    props: { datas }
  }
}

// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:8000/komik')
//   const data = await res.json()

//   return { props: data }
// }