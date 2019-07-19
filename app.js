const desc = 'I just learned how to create a React node and render it to the DOM';
const myTitleId = 'main-title';
const name = 'Guil';

const header = (
  <header>
    <h1 id={myTitleId}>{ name }'s First React Element!</h1>
    <p>{ desc }</p>
  </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);
