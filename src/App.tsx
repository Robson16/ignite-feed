import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";

const posts: PostType[] = [
  {
    id: "a7b2c3d4-e5f6-7890-1234-567890abcdef",
    author: {
      avatar_url: "https://i.pravatar.cc/150?img=8",
      name: "Carlos Alberto Silva",
      role: "Arqueólogo Sênior",
    },
    publishedAt: new Date("2025-04-27T11:15:00Z"),
    content: [
      {
        id: "f8a9b0c1-d2e3-4567-89ab-cdef01234567",
        type: "paragraph",
        content:
          "Novas escavações na região amazônica revelaram artefatos de uma civilização pré-colombiana desconhecida.",
      },
      {
        id: "9c7d8e6f-0a1b-2345-67cd-ef0123456789",
        type: "paragraph",
        content:
          "Os objetos cerâmicos e esculturas em pedra sugerem um conhecimento avançado de astronomia.",
      },
    ],
  },
  {
    id: "f1e2d3c4-b5a6-9870-fedc-ba9876543210",
    author: {
      avatar_url: "https://i.pravatar.cc/150?img=5",
      name: "Ana Beatriz Oliveira",
      role: "Bióloga Marinha",
    },
    publishedAt: new Date("2025-04-26T16:30:00Z"),
    content: [
      {
        id: "e4f5d6c7-b8a9-0123-456f-7890abcdef01",
        type: "paragraph",
        content:
          "Pesquisadores observaram um comportamento inédito em baleias jubarte na costa brasileira.",
      },
      {
        id: "12345678-9abc-def0-1234-567890abcdef12",
        type: "paragraph",
        content:
          "Os animais parecem estar utilizando um tipo de 'canto' mais complexo durante a época de reprodução.",
      },
    ],
  },
  {
    id: "09876543-21ba-fedc-0123-456789abcdef0",
    author: {
      avatar_url: "https://i.pravatar.cc/150?img=13",
      name: "Pedro Henrique Souza",
      role: "Engenheiro de Software",
    },
    publishedAt: new Date("2025-04-25T09:45:00Z"),
    content: [
      {
        id: "34567890-abcdef-0123-4567-89abcdef0123",
        type: "paragraph",
        content:
          "Uma nova inteligência artificial capaz de traduzir línguas extintas com alta precisão foi desenvolvida.",
      },
      {
        id: "abcdef01-2345-6789-abcd-ef0123456789a",
        type: "paragraph",
        content:
          "A tecnologia promete revolucionar o estudo de civilizações antigas.",
      },
    ],
  },
  {
    id: "bcdefa01-2345-6789-abcd-ef0123456789",
    author: {
      avatar_url: "https://i.pravatar.cc/150?img=26",
      name: "Mariana Costa Pereira",
      role: "Física Teórica",
    },
    publishedAt: new Date("2025-04-24T19:00:00Z"),
    content: [
      {
        id: "bcdefa01-2345-6789-abcd-ef0123456789b",
        type: "paragraph",
        content:
          "Cientistas anunciaram a detecção de ondas gravitacionais de uma colisão de buracos negros supermassivos.",
      },
      {
        id: "456789ab-cdef-0123-4567-89abcdef01234",
        type: "paragraph",
        content:
          "A descoberta confirma mais uma previsão da teoria da relatividade geral de Einstein.",
      },
    ],
  },
  {
    id: "98765432-10fe-dcba-9012-34567890abcd",
    author: {
      avatar_url: "https://i.pravatar.cc/150?img=59",
      name: "Lucas Ferreira Alves",
      role: "Chef de Cozinha Inovador",
    },
    publishedAt: new Date("2025-04-23T12:40:00Z"),
    content: [
      {
        id: "def01234-5678-9abc-def0-123456789abc",
        type: "paragraph",
        content:
          "Um novo método de impressão 3D de alimentos permite criar pratos com texturas e sabores inéditos.",
      },
      {
        id: "56789abc-def0-1234-5678-9abcdef012345",
        type: "paragraph",
        content:
          "A técnica abre um leque de possibilidades para a gastronomia molecular.",
      },
    ],
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </>
  );
}
