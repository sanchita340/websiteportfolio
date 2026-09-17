import "./App.css";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#0b102b] text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0b102b]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">

          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold tracking-wide"
          >
            SANCHITA<span className="text-[#43d9ff]">.</span>
          </a>

          {/* Menu */}
          <div className="hidden items-center gap-8 md:flex">

            <a href="#home" className="nav-link">
              HOME
            </a>

            <a href="#about" className="nav-link">
              ABOUT ME
            </a>

            <a href="#skills" className="nav-link">
              SKILLS
            </a>

            <a href="#projects" className="nav-link">
              PROJECTS
            </a>

            <a href="#experience" className="nav-link">
              EXPERIENCE
            </a>
            <a href="#contact me "className="nav-link">
              CONTACT ME
            </a>

          </div>

        </div>
      </nav>


      {/* ================= HOME ================= */}
      <section
        id="home"
        className="min-h-screen px-10 pb-20 pt-32 text-white"
      >

        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          {/* Introduction */}
          <div className="intro-animation">

            <p className="mb-3 text-lg text-gray-300">
              I'm a
            </p>

            <h1 className="text-4xl font-bold uppercase leading-tight md:text-5xl">
              Full Stack
              <br />
              Software
              <br />
              Developer
              <span className="text-[#43d9ff]">.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-400">
              I'm a{" "}
              <span className="text-white">BCA student</span> and aspiring{" "}
              <span className="text-[#43d9ff]">
                Full Stack Developer
              </span>{" "}
              passionate about building clean and user-friendly web
              applications. I enjoy turning ideas into practical digital
              experiences using React, Tailwind CSS, and Python.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="#projects"
                className="rounded-full border border-[#43d9ff] px-6 py-3 text-sm font-semibold text-[#43d9ff] transition duration-300 hover:bg-[#43d9ff] hover:text-[#0b102b]"
              >
                View My Work
              </a>

              <a
                href="/resume.pdf"
                download
                className="rounded-full bg-[#43d9ff] px-6 py-3 text-sm font-semibold text-[#0b102b] transition duration-300 hover:scale-105 hover:bg-white"
              >
                Download Resume
              </a>

            </div>

          </div>


          {/* Profile Photo */}
          <div className="flex justify-center">

            <div className="photo-container">

              <div className="rotating-ring"></div>

              <div className="profile-photo">
                <img
                  src="/profile.jpg.jpeg"
                  alt="Sanchita Jain"
                />
              </div>

            </div>

          </div>

        </div>

      </section>


     {/* ================= ABOUT ME ================= */}
<section
  id="about"
  className="relative overflow-hidden px-10 py-28 text-white"
>
  <div className="mx-auto max-w-6xl">

    {/* Background Number */}
    <div className="pointer-events-none absolute right-10 top-20 text-[180px] font-black text-[#111735]">
      01
    </div>


    {/* Section Heading */}
    <div className="relative z-10">

      <p className="text-sm uppercase tracking-[4px] text-[#43d9ff]">
        About Me
      </p>

      <h2 className="mt-3 max-w-3xl text-4xl font-bold uppercase leading-tight md:text-6xl">
        More Than Just
        <span className="block text-[#43d9ff]">
          Writing Code.
        </span>
      </h2>

    </div>


    {/* Main About Content */}
    <div className="relative z-10 mt-16 grid gap-12 md:grid-cols-2">


      {/* Left Side */}
      <div>

        <p className="text-xl leading-9 text-gray-300">
          I'm Sanchita, a BCA student and aspiring
          <span className="text-[#43d9ff]">
            {" "}Full Stack Developer
          </span>
          {" "}who enjoys turning ideas into useful digital
          experiences
        </p>

        <p className="mt-6 leading-8 text-gray-400">
          I started my journey with programming and gradually
          explored web development, Python and machine learning
          What interests me most is understanding how different
          technologies work together to solve real-world problems
        </p>

        <p className="mt-6 leading-8 text-gray-400">
          Currently, I'm focused on improving my development skills
          through hands-on projects and real-world experience
          I believe the best way to learn is to build, experiment,
          make mistakes and improve
        </p>


        {/* Small Highlight */}
        <div className="mt-10 flex items-center gap-4">

          <div className="h-px w-16 bg-[#43d9ff]"></div>

          <p className="text-sm uppercase tracking-[3px] text-gray-500">
            Always learning. Always building.
          </p>

        </div>

      </div>


      {/* Right Side - What I Bring */}
      <div className="grid gap-5 sm:grid-cols-2">


        {/* Card 1 */}
        <div className="about-card group">

          <div className="about-icon">
            &lt;/&gt;
          </div>

          <h3 className="mt-5 text-xl font-semibold">
            Build
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            I enjoy transforming ideas into clean,
            responsive and functional applications.
          </p>

        </div>


        {/* Card 2 */}
        <div className="about-card group">

          <div className="about-icon">
            ✦
          </div>

          <h3 className="mt-5 text-xl font-semibold">
            Explore
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            I continuously explore new technologies
            and improve my development approach.
          </p>

        </div>


        {/* Card 3 */}
        <div className="about-card group">

          <div className="about-icon">
            ◇
          </div>

          <h3 className="mt-5 text-xl font-semibold">
            Solve
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            I enjoy breaking problems into smaller
            pieces and finding practical solutions.
          </p>

        </div>


        {/* Card 4 */}
        <div className="about-card group">

          <div className="about-icon">
            ↗
          </div>

          <h3 className="mt-5 text-xl font-semibold">
            Grow
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Every project is an opportunity to learn
            something new and become better.
          </p>

        </div>

      </div>

    </div>


    {/* Journey */}
    <div className="relative z-10 mt-24">

      <p className="text-sm uppercase tracking-[4px] text-[#43d9ff]">
        My Journey
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">


        {/* Journey 1 */}
        <div className="journey-item">

          <span className="text-sm text-[#43d9ff]">
            01
          </span>

          <h3 className="mt-3 text-xl font-semibold">
            BCA
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Building a strong foundation in programming,
            databases and computer science.
          </p>

        </div>


        {/* Journey 2 */}
        <div className="journey-item">

          <span className="text-sm text-[#43d9ff]">
            02
          </span>

          <h3 className="mt-3 text-xl font-semibold">
            Development
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Learning modern web technologies and building
            practical applications.
          </p>

        </div>


        {/* Journey 3 */}
        <div className="journey-item">

          <span className="text-sm text-[#43d9ff]">
            03
          </span>

          <h3 className="mt-3 text-xl font-semibold">
            Real Experience
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Applying my knowledge through projects and
            internship experience.
          </p>

        </div>

      </div>

    </div>

  </div>
</section>
{/* ================= SKILLS ================= */}
<section
  id="skills"
  className="px-10 py-24 text-white"
>
  <div className="mx-auto max-w-6xl">

    {/* Heading */}
    <div className="text-center">
      <p className="text-sm uppercase tracking-[4px] text-[#43d9ff]">
        My Skills
      </p>

      <h2 className="mt-3 text-4xl font-bold uppercase md:text-5xl">
        Technologies I <span className="text-[#43d9ff]">Use</span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400">
        I continuously improve my technical skills by learning new
        technologies and building practical projects.
      </p>
    </div>

    {/* Skills Grid */}
    <div className="skills-grid mt-14">

      {/* Skill 1 */}
      <div className="skill-card">
        <div className="skill-top">
          <span className="skill-icon">🐍</span>
          <span className="skill-percentage">85%</span>
        </div>

        <h3>Python</h3>

        <div className="skill-bar">
          <div className="skill-progress python-progress"></div>
        </div>
      </div>

      {/* Skill 2 */}
      <div className="skill-card">
        <div className="skill-top">
          <span className="skill-icon">⚛️</span>
          <span className="skill-percentage">75%</span>
        </div>

        <h3>React</h3>

        <div className="skill-bar">
          <div className="skill-progress react-progress"></div>
        </div>
      </div>

      {/* Skill 3 */}
      <div className="skill-card">
        <div className="skill-top">
          <span className="skill-icon">🎨</span>
          <span className="skill-percentage">85%</span>
        </div>

        <h3>HTML / CSS</h3>

        <div className="skill-bar">
          <div className="skill-progress html-progress"></div>
        </div>
      </div>

      {/* Skill 4 */}
      <div className="skill-card">
        <div className="skill-top">
          <span className="skill-icon">⚡</span>
          <span className="skill-percentage">75%</span>
        </div>

        <h3>JavaScript</h3>

        <div className="skill-bar">
          <div className="skill-progress javascript-progress"></div>
        </div>
      </div>

      {/* Skill 5 */}
      <div className="skill-card">
        <div className="skill-top">
          <span className="skill-icon">🗄️</span>
          <span className="skill-percentage">75%</span>
        </div>

        <h3>MySQL</h3>

        <div className="skill-bar">
          <div className="skill-progress mysql-progress"></div>
        </div>
      </div>

      {/* Skill 6 */}
      <div className="skill-card">
        <div className="skill-top">
          <span className="skill-icon">📊</span>
          <span className="skill-percentage">80%</span>
        </div>

        <h3>Pandas / NumPy</h3>

        <div className="skill-bar">
          <div className="skill-progress pandas-progress"></div>
        </div>
      </div>

      {/* Skill 7 */}
      <div className="skill-card">
        <div className="skill-top">
          <span className="skill-icon">🤖</span>
          <span className="skill-percentage">70%</span>
        </div>

        <h3>Machine Learning</h3>

        <div className="skill-bar">
          <div className="skill-progress ml-progress"></div>
        </div>
      </div>

      {/* Skill 8 */}
      <div className="skill-card">
        <div className="skill-top">
          <span className="skill-icon">🌐</span>
          <span className="skill-percentage">70%</span>
        </div>

        <h3>Tailwind CSS</h3>

        <div className="skill-bar">
          <div className="skill-progress tailwind-progress"></div>
        </div>
      </div>

    </div>
  </div>
</section>
<section className="projects" id="projects">
      <h2 className=" text-[#43d9ff]">My Projects</h2>

      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-card">
          <div className="project-image">
            📊
          </div>

          <h3>Student Performance Prediction</h3>

          <p>
            A machine learning project that predicts student
            performance using study hours, attendance and previous marks
          </p>

          <p className="project-tech">
            Python | Pandas | NumPy | Scikit-learn
          </p>

          <button>View Project</button>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="project-image">
            🍎
          </div>

          <h3>Food Calorie Tracker</h3>

          <p>
            A Python project that calculates calories, protein,
            carbohydrates and fat based on food quantity
          </p>

          <p className="project-tech">
            Python | Pandas | Matplotlib | Streamlit
          </p>

          <button>View Project</button>
        </div>

      </div>
    </section>
    
<section className="experience" id="experience">
  <h2>My Experience</h2>

  <div className="experience-card">
    <h3>Full Stack Developer Intern</h3>

    <h4>Kuchoriya TechSoft</h4>

    <p className="experience-duration">
      1 Month Experience
    </p>

    <p>
      Worked as a Full Stack Developer Intern,
      gaining practical experience in web development
      and improving my technical skills.
    </p>

    <div className="experience-skills">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>React</span>
    </div>

  </div>
</section>
<>
{/* Your Navbar */}
      {/* Your Home */}
      {/* Your About */}
      {/* Your Skills */}
      {/* Your Projects */}

      <Contact />
</>


  
  
  

    

      

      

    </div>
  );
}

export default App;