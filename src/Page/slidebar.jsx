const Slidebar = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/1012049016/photo/young-man-writing-college-or-university-application-form-with-pen-and-paper-student-applying.jpg?s=612x612&w=0&k=20&c=i5FyoGkFviATC6E3JQGT5lj8Zmtjv7sRtQ7zUIUYkM8=)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-[#397dfd]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
