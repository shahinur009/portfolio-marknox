import styles from './ProjectsStyles.module.css';
import ironFitness from '../../assets/Iron fitness center.png';
import shahintourism from '../../assets/shahin tourism.png';
import successJobs from '../../assets/Success Jobs.png';
import thinkunlimited from '../../assets/Think-Unlimited.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ironFitness}
          Client link="https://github.com/shahinur009/iron-fitness-center"
          h3="Iron Fitness Center"
          p="fitness center related website"
        />
        <ProjectCard
          src={successJobs}
          Client link="https://github.com/shahinur009/Success-job"
          h3="Success Jobs"
          p="Jobs post and hunting platform"
        />
        <ProjectCard
          src={shahintourism}
          link="https://github.com/shahinur009/shahin-tourism"
          h3="Shahin Tourisms"
          p="Travel Web site"
        />
        <ProjectCard
          src={thinkunlimited}
          link="https://github.com/shahinur009/think-unlimited"
          h3="Think Unlimited"
          p="Personal projects for a business portfolio"
        />
      </div>
    </section>
  );
}

export default Projects;
