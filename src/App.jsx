import styles from './App.module.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './global.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quos, consectetur in unde eius aliquam, iure nesciunt dicta voluptas culpa illum quas! Ex aspernatur veritatis quasi nobis. Ipsa, consequuntur ea!</p>
          <p>Neque fugit ullam officiis tempora. Perspiciatis consequuntur ratione, aliquid harum recusandae quam excepturi, ea nesciunt a necessitatibus atque voluptas magni voluptatum dolorem quod eum nam aut quaerat architecto explicabo! Nostrum.</p>
        </main>
      </div>
    </>
  )
}
