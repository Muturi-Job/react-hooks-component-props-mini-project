import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
    <Header />
    <About />
    <ArticleList />

    </div>
  );
}
function Header ({name}) {
  return <>
    <h1 key={name}>{name}</h1>
  </>
}
function About ({imageSrc, aboutText}) {
  const image = imageSrc || 'https://via.placeholder.com/215';

  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}
function ArticleList ({title}) {
  return (
    <main>
      <Article key={title}/>
    </main>
  )
}
function Article ({title, date, preview}) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  )
}

export default App;
