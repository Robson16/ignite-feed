import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

const posts = [
  {
    id: "a7b2c3d4-e5f6-7890-1234-567890abcdef",
    author: {
      avatar_url: "https://i.pravatar.cc/150?img=8",
      name: "Carlos Alberto Silva",
      role: "Arqueólogo Sênior"
    },
    publishedAt: new Date("2025-04-27T11:15:00Z"),
    content: [
      { type: "paragraph", content: "Novas escavações na região amazônica revelaram artefatos de uma civilização pré-colombiana desconhecida." },
      { type: "paragraph", content: "Os objetos cerâmicos e esculturas em pedra sugerem um conhecimento avançado de astronomia." }
    ]
  },
  {
    id: "f1e2d3c4-b5a6-9870-fedc-ba9876543210",
    author: {
      avatar_url: "https://i.pravatar.cc/150?img=5",
      name: "Ana Beatriz Oliveira",
      role: "Bióloga Marinha"
    },
    publishedAt: new Date("2025-04-26T16:30:00Z"),
    content: [
      { type: "paragraph", content: "Pesquisadores observaram um comportamento inédito em baleias jubarte na costa brasileira." },
      { type: "paragraph", content: "Os animais parecem estar utilizando um tipo de 'canto' mais complexo durante a época de reprodução." }
    ]
  },
  {
    id: "09876543-21ba-fedc-0123-456789abcdef0",
    author: {
      avatar_url: "https://i.pravatar.cc/150?img=13",
      name: "Pedro Henrique Souza",
      role: "Engenheiro de Software"
    },
    publishedAt: new Date("2025-04-25T09:45:00Z"),
    content: [
      { type: "paragraph", content: "Uma nova inteligência artificial capaz de traduzir línguas extintas com alta precisão foi desenvolvida." },
      { type: "paragraph", content: "A tecnologia promete revolucionar o estudo de civilizações antigas." }
    ]
  },
  {
    id: "bcdefa01-2345-6789-abcd-ef0123456789",
    author: {
      avatar_url: "https://i.pravatar.cc/150?img=26",
      name: "Mariana Costa Pereira",
      role: "Física Teórica"
    },
    publishedAt: new Date("2025-04-24T19:00:00Z"),
    content: [
      { type: "paragraph", content: "Cientistas anunciaram a detecção de ondas gravitacionais de uma colisão de buracos negros supermassivos." },
      { type: "paragraph", content: "A descoberta confirma mais uma previsão da teoria da relatividade geral de Einstein." }
    ]
  },
  {
    id: "98765432-10fe-dcba-9012-34567890abcd",
    author: {
      avatar_url: "https://i.pravatar.cc/150?img=59",
      name: "Lucas Ferreira Alves",
      role: "Chef de Cozinha Inovador"
    },
    publishedAt: new Date("2025-04-23T12:40:00Z"),
    content: [
      { type: "paragraph", content: "Um novo método de impressão 3D de alimentos permite criar pratos com texturas e sabores inéditos." },
      { type: "paragraph", content: "A técnica abre um leque de possibilidades para a gastronomia molecular." }
    ]
  }
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            )
          })}
        </main>
      </div>
    </>
  );
}
