import Image from 'next/image';
import Link from 'next/link'

export default function Autor() {
  return (
    <section className="z-0 flex flex-row justify-center max-w-full p-10 mx-auto text-gray-200 bg-gray-800">
      <article className="m-2 p-2">
        <h1 className="text-4xl text-yellow-400 font-extrabold leading-relaxed">    MOJA DROGA</h1>
        <br />
        <p>
          <ul className="text-2xl font-bold list-disc">
            <li><Link href="/blog"><a className="hover:text-yellow-500">MOJE PISANIE.</a></Link></li>
            <li>MOJE PROGRAMOWANIE(cdn).</li>
            <li>MOJA PRODUKTYWNOŚĆ(cdn).</li></ul></p>
      </article>
      <article className="m-2 p-2 shadow ring-yellow-500  ring">
        <Image
          src="/head_1.jpeg"
          // layout="fill"
          width={308}
          height={232}
          alt="Me"
          className="object-fill "
        />
      </article>
    </section>
  );
}

// Cześć,<br />
  //        Nazywam się <span className="text-yellow-300">Michał</span>

