
        const { useState } = React;

        function Profile() {
            return (
                <div className="profile">
                    <img src="img/PASSPORT.png" alt="Student"/>
                    <div>
                        <h1>John Doe</h1>
                        <p>Email: com</p>
                        <div className="skills">
                            <span className="skill">HTML</span>
                            <span className="skill">CSS</span>
                            <span className="skill">JavaScript</span>
                            <span className="skill">React</span>
                        </div>
                    </div>
                </div>
            );
        }

        function ProjectForm({ onAdd }) {
            const [title, setTitle] = useState('');
            const [desc, setDesc] = useState('');

            function handleSubmit(e) {
                e.preventDefault();
                if (title && desc) {
                    onAdd({ title, desc });
                    setTitle('');
                    setDesc('');
                }
            }

            return (
                <form onSubmit={handleSubmit}>
                    <h2>Add Project</h2>
                    <input
                        type="text"
                        placeholder="Project Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Project Description"
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                        required
                    />
                    <button className="add-btn" type="submit">Add Project</button>
                </form>
            );
        }

        function Projects() {
            const [projects, setProjects] = useState([
                { title: "Personal Website", desc: "A responsive personal website built with React and CSS." },
                { title: "Todo App", desc: "A simple todo list app using JavaScript and localStorage." }
            ]);

            function addProject(project) {
                setProjects([project, ...projects]);
            }

            return (
                <div className="projects">
                    <ProjectForm onAdd={addProject} />
                    <h2>Projects</h2>
                    {projects.map((p, i) => (
                        <div className="project-card" key={i}>
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                        </div>
                    ))}
                </div>
            );
        }

        function App() {
            return (
                <div className="container">
                    <Profile />
                    <Projects />
                </div>
            );
        }

        ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    