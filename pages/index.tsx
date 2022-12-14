import { NextPage } from 'next'
import Link from 'next/link'

/*
  La home page doit être accessible seulement pour les personnes authentifiées (voir /api).
  La home page doit contenir un input.
  Cet input doit nous permettre de rechercher des cocktails, par nom (voir https://www.thecocktaildb.com/api.php).
  Afficher les cocktails trouvés sous forme de liste.
  Une fois cette partie terminée, tu es libre de rajouter d'autres fonctionnalités bonus, comme la recherche par ingrédient, page détail, etc. (voir https://www.thecocktaildb.com/api.php)

  Si tu bloques sur une partie, ne t'attarte pas dessus et passe à la suivante !

  Have fun !
*/

const Home: NextPage = () => {
  return (
    <Link href={'/welcome'}>
      <a className="text-primary hover:underline">Welcome</a>
    </Link>
  )
}

export default Home
