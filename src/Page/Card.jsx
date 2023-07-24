const Card = () => {
  return (
    <div className="flex gap-10 justify-center py-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://www.careerindia.com/img/2018/07/1-1530939791.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Harvard
            <div className="badge badge-secondary">29/09/2023</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">research history</div>
            <div className="badge badge-outline">sport</div>
          </div>
          <button className="btn btn-info">Details</button>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://www.careerindia.com/img/2018/07/1-1530939791.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Harvard
            <div className="badge badge-secondary">29/09/2023</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">research history</div>
            <div className="badge badge-outline">sport</div>
          </div>
          <button className="btn btn-info">Details</button>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://www.careerindia.com/img/2018/07/1-1530939791.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Harvard
            <div className="badge badge-secondary">29/09/2023</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">research history</div>
            <div className="badge badge-outline">sport</div>
          </div>
          <button className="btn btn-info">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
