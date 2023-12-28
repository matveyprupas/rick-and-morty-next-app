import styles from './page.module.scss'

type ICharacter = {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: string[],
  url: string,
  created: string
}

interface CharactersProps {
  characters: ICharacter[];
}

async function getCharacters(): Promise<ICharacter[]> {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return await res.json()
}

export default async function Characters() {
  const characters = await getCharacters();

  console.log(characters);

  return (
    <main className={styles.main}>
      <h1>Characters</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            {character.name}
          </li>
        ))}
      </ul>
    </main>
  )
}
