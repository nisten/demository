import type { User } from '../interfaces'
import Head from 'next/head'
import { Row, Container, Col } from 'react-bootstrap'
import Link from 'next/link'
import useSwr from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Home() {
  const { data, error } = useSwr<User[]>('/api/users', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  return (
  <Container>

    <Head>
      <title>Perfect Meow</title>
      <meta name="description" content="site built for interview demo"></meta>
      <meta name="theme-color" content="black"></meta>
      <link rel="manifest" href="/manifest.json" />
    </Head>
    {data.map((user) => 
      <Row key={user.id}>
        <Link href="/user/[id]" as={`/user/${user.id}`}>
          {`Cat ${user.id}`}
        </Link>
      </Row>
      )}

  </Container>
  )
}
