// import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import styles from './page.module.scss'

// type Repo = {
//   name: string
//   stargazers_count: number
// }

// export const getStaticProps = (async (context) => {
//   const res = await fetch('https://rickandmortyapi.com/api/character')
//   const characters = await res.json()
//   return { props: { repo } }
// }) satisfies GetStaticProps<{
//   repo: Repo
// }>
 
export default function Locations({locations = []}) {
  return (
    <main className={styles.main}>
      <h1>Locations</h1>
    </main>
  )
}
