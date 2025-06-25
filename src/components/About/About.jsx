import React from 'react';

const About = () => {
    return (
        <>
            <div>
                {/* Hero Section */}
                <section
                    className="text-white text-center py-5"
                    style={{
                        backgroundImage: "url('/images/bg_about1.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            zIndex: 1,
                        }}
                    ></div>
                    <div style={{ position: "relative", zIndex: 2 }}>
                        <img
                            src="images/asfak.jpg"
                            alt="Asfak Shahrier"
                            className="rounded-circle mb-3 shadow"
                            style={{ width: "150px", height: "150px", objectFit: "cover" }}
                        />
                        <h1 className="fw-bold">Asfak Shahrier</h1>
                        <p>Software Engineer | @Trickcel</p>
                        <p>Lakshmipur, Bangladesh</p>
                    </div>
                </section>

                {/* About Section */}
                <section className="container py-5">
                    <h2 className="text-primary">About Me</h2>
                    <p>
                        Hello! I'm Asfak Shahrier, a passionate and curious Computer Science & Engineering graduate from Gopalganj Science and Technology University (GSTU). I love building things with code and constantly challenge myself by learning new technologies through hands-on projects. <br />

                        During my time at university, I developed a strong foundation in data structures, algorithms, and software engineering principles. I enjoy working with JavaScript, TypeScript, React, and Node.js, and I'm currently expanding my skills in full-stack development, including Django, Flutter, and modern DevOps tools.

                        My projects include building interactive web apps, exploring APIs, and experimenting with UI/UX using React and Tailwind CSS. I also have a growing interest in Machine Learning, Data Analysis, and open-source development.

                        I believe in continuous learning and collaboration, and I’m actively working on personal projects and contributing to real-world applications to sharpen my skills further.
                    </p>
                </section>

                {/* Experience Section */}
                <section className="container py-5 bg-light">
                    <h2 className="text-primary">Experience</h2>
                    <ul>
                        <li><strong>Software Engineer, Trickcel (Remote)</strong><br />Worked with Angular & Tailwind to build an e-commerce platform. Integrated REST APIs, product data management, and responsive UIs.</li>
                        <li><strong>Participant, Learnathon 3.0</strong><br />Completed industry-level training on Django, Git, and DBMS. Built real-world projects under mentorship.</li>
                    </ul>
                </section>

                {/* Projects Section */}
                <section className="container py-5">
                    <h2 className="text-primary">Projects</h2>
                    <ul>
                        <li><strong>CareHUB - Salon Booking Platform:</strong> Built a web app with real-time booking and search filtering. Tech: Django, PostgreSQL, Tailwind.</li>
                        <li><strong>Railway Ticket Booking:</strong> Django project with PDF ticket generation. Simplified train reservations for users.</li>
                    </ul>
                </section>

                {/* Skills Section */}
                <section className="container py-5 bg-light">
                    <h2 className="text-primary">Skills</h2>
                    <ul>
                        <li><strong>Languages:</strong> C/C++, Python, JavaScript, TypeScript</li>
                        <li><strong>Libraries:</strong> Pandas, NumPy, OpenCV</li>
                        <li><strong>Web Stack:</strong> HTML, CSS, Tailwind CSS, Django, Angular</li>
                        <li><strong>Tools:</strong> Git, GitHub, VS Code, Figma, LaTeX</li>
                        <li><strong>CS Fundamentals:</strong> DSA, OOP, OS, MySQL, REST API</li>
                    </ul>
                </section>

                {/* Research Section */}
                <section className="container py-5">
                    <h2 className="text-primary">Research</h2>
                    <ul>
                        <li><strong>Link Usage in Tweets by npm Maintainers:</strong> Analyzed 18K+ tweet links to find decay rate and purpose. Found 5% dead links and 80% unique sources.</li>
                        <li><strong>Career Prediction of CSE Students:</strong> Surveyed 468 students and applied ML algorithms like Random Forest for job preference prediction (highest accuracy).</li>
                    </ul>
                </section>

                {/* Achievements Section */}
                <section className="container py-5 bg-light">
                    <h2 className="text-primary">Achievements</h2>
                    <ul>
                        <li>🟣 Codeforces Specialist (Max Rating: 1462)</li>
                        <li>🟠 CodeChef 4★ (Max Rating: 1812) – Ranked 1st in Bangladesh, June 2021</li>
                        <li>🥉 3rd Place - UGV SOUTH ZONE Programming Contest</li>
                        <li>🏅 4th Place - KU Programming Contest</li>
                    </ul>
                </section>

                {/* Footer */}
                <footer className="bg-dark text-white text-center p-4">
                    <h5>Let’s Connect</h5>
                    <div className="mb-2">
                        <a href="https://github.com/asfak27" className="text-info me-3">GitHub</a>
                        <a href="https://linkedin.com/in/asfak-shahrier" className="text-info me-3">LinkedIn</a>
                        {/* <a href="https://leetcode.com/AsfakShahrier/" className="text-info me-3">LeetCode</a> */}
                        {/* <a href="https://codeforces.com/profile/Asfak_Shahrier" className="text-info">Codeforces</a> */}
                    </div>
                    <p className="mt-3">© 2025 Asfak Shahrier</p>
                </footer>
            </div>
        </>
    );
};

export default About;