const Person = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('p', {}, props.occupation),
  ]);
};
const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', { class: 'title' }, 'React IS rendered'),
    React.createElement(
      Person,
      { name: 'Manoj', occupation: 'Employee' },
      null
    ),
    React.createElement(
      Person,
      { name: 'Shankar', occupation: 'Student' },
      null
    ),
    React.createElement(Person, { name: 'Reddy', occupation: 'CEO' }, null),
  ]);
};

// ReactDOM.render(React.createElement(App), document.getElementById('root'));

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
