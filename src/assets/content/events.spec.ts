import { EVENTS } from './events';

describe('event content', () => {
  it('provides a concise description for every event', () => {
    EVENTS.forEach((event) => {
      expect(event.description.trim().length)
        .withContext(event.title)
        .toBeGreaterThan(0);
      expect(event.description.length)
        .withContext(event.title)
        .toBeLessThanOrEqual(115);
    });
  });

  it('uses the supplied artwork for every event edition', () => {
    const expectedImages = new Map([
      ['Software Freedom Day 2025', 'assets/images/main/sfd-2025.webp'],
      ['FLiSoL 2025', 'assets/images/main/flisol_pereira.webp'],
      ['Software Freedom Day 2024', 'assets/images/main/sfd-2024.webp'],
      ['FLiSoL 2024', 'assets/images/main/flisol_pereira.webp'],
      ['FLiSoL 2023', 'assets/images/main/flisol_pereira.webp'],
      ['Software Freedom Day 2023', 'assets/images/main/sfd-2023.webp'],
    ]);

    expect(EVENTS.length).toBe(expectedImages.size);
    EVENTS.forEach((event) => {
      const expectedImage = expectedImages.get(event.title);

      expect(expectedImage).withContext(event.title).toBeDefined();
      if (expectedImage) {
        expect(event.image).withContext(event.title).toBe(expectedImage);
      }
    });
  });

  it('links FLiSoL events to their canonical external pages', () => {
    const expectedUrls = new Map([
      ['FLiSoL 2025', 'https://flisolpereira.vercel.app/2025'],
      ['FLiSoL 2024', 'https://flisol.info/FLISOL2024/Colombia/Pereira'],
      ['FLiSoL 2023', 'https://flisol.info/FLISOL2023/Colombia/Pereira'],
    ]);

    expectedUrls.forEach((absoluteUrl, title) => {
      const event = EVENTS.find((candidate) => candidate.title === title);

      expect(event?.absoluteUrl).withContext(title).toBe(absoluteUrl);
    });
  });

  it('links SFD events to their matching local event pages', () => {
    const sfd2024 = EVENTS.find(
      (event) => event.title === 'Software Freedom Day 2024',
    );
    const sfd2025 = EVENTS.find(
      (event) => event.title === 'Software Freedom Day 2025',
    );

    expect(sfd2024?.relativeUrl).toBe('/events/software-freedom-day-2024');
    expect(sfd2025?.relativeUrl).toBe('/events/software-freedom-day-2025');
  });

  it('links SFD 2023 to its canonical external recording', () => {
    const sfd2023 = EVENTS.find(
      (event) => event.title === 'Software Freedom Day 2023',
    );

    expect(sfd2023?.absoluteUrl).toBe(
      'https://www.youtube.com/live/b3xiS602YKY',
    );
  });
});
