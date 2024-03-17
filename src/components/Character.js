const Character = ({ character }) => {
  const { url, name } = character;
  return (
    <article className="Character">
      <a href={url}>{name}</a>
    </article>
  );
};

export default Character;
