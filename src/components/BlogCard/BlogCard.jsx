const BlogCard = ({
  name,
  postedAt,
  poster,
  tag,
  title,
  description,
  avatar,
}) => {
  return (
    <div>
      <div>
        <img src={poster} alt={tag} />
      </div>
      <div>
        <span>{tag}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <div>
          <img src={avatar} alt={name} />
        </div>
        <h3>{name}</h3>
        <span>{postedAt}</span>
      </div>
    </div>
  );
};

export default BlogCard;
