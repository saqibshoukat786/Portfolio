        // JavaScript for animating elements on scroll
        const projects = document.querySelectorAll('.project-card');
        const skillsSection = document.getElementById('skills');
        const skillFills = document.querySelectorAll('.skill-fill');

        const projectObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    projectObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        projects.forEach(project => {
            projectObserver.observe(project);
        });

        const skillObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillFills.forEach(skill => {
                        const percent = skill.textContent;
                        skill.style.width = percent;
                    });
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        skillObserver.observe(skillsSection);
        zz