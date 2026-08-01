import { PROJECTS } from './projects';

describe('project content', () => {
  it('contains the three approved projects', () => {
    expect(PROJECTS.map((project) => project.title)).toEqual([
      'Juez Programación',
      'Backbone Page',
      'Open Tech Hackathon',
    ]);
  });

  it('links Judge to both repositories without a live destination', () => {
    const judge = PROJECTS[0];

    expect(judge.repositoryLinks).toEqual([
      {
        label: 'Frontend',
        url: 'https://github.com/Backbone-UTP/judge-front',
      },
      {
        label: 'Backend',
        url: 'https://github.com/Backbone-UTP/judge-back',
      },
    ]);
    expect(judge.liveUrl).toBeUndefined();
  });

  it('provides separate repository and live destinations when available', () => {
    const publishedProjects = PROJECTS.filter((project) => project.liveUrl);

    expect(publishedProjects.length).toBe(2);
    publishedProjects.forEach((project) => {
      expect(project.repositoryLinks.length)
        .withContext(project.title)
        .toBeGreaterThan(0);
      expect(project.liveUrl).withContext(project.title).toMatch(/^https:\/\//);
    });
  });
});
