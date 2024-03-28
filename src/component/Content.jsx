/* eslint-disable react/prop-types */
function Content(props) {
  const { title, content } = props;
  return (
    <section
      className="flex justify-center mt-16 md:px-0 px-3"
    >
      <article className="text-center max-w-[480px] px-3">
        <h2 className="content-header">{title}</h2>
        <p className="py3">{content}</p>
      </article>
    </section>
  );
}
export default Content;
