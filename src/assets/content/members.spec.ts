import { MEMBERS } from './members';

describe('member content', () => {
  it('contains only the six current homepage members', () => {
    expect(MEMBERS.map((member) => member.name)).toEqual([
      'Paula Castro',
      'Jhon Gaviria',
      'Sergio Estrella',
      'Juan D. Alvarez',
      'Nohora Cardozo',
      'Juan Rojas',
    ]);
  });

  it('uses optimized portraits and verified social profiles', () => {
    MEMBERS.forEach((member) => {
      expect(member.photoUrl).withContext(member.name).toMatch(/\.webp$/);
      expect(member.socialLinks.length).withContext(member.name).toBeGreaterThan(0);
      member.socialLinks.forEach((link) => {
        expect(link.url).withContext(member.name).toMatch(/^https:\/\//);
      });
    });
  });
});
