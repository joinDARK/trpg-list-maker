import { Router, Route } from '@solidjs/router'

import Header from '../components/widgets/Header'

// Страницы
import CharacterPage from '../components/pages/CharacterPage'

export default function App() {
  return (
    <div className='h-svh p-4 flex flex-col gap-4'>
      <Header/>
      <div className='h-full overflow-auto'>
        <Router>
          <Route path="/" component={CharacterPage} />
        </Router>
      </div>
    </div>
  )
}