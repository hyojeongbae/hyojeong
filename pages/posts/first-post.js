import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>My name is Hyojeong Bae. I love my sister. Thank you!</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}