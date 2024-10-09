import "./Home.css";

const Home = () => {
  return (
    <main className="content">
      <div className="content-wrap">
        <div className="title">
          Welcome back, <i>User</i>. Here’s what you can watch…
        </div>

        <div className="recent-films">

          <div className="recent-films__title">
            <a href="#" className="">
              Recent films released
            </a>
          </div>

				<ul className="recent-films-grid">
			
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
						<li>6</li>
				
				</ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
