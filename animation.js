gsap.registerPlugin(SplitText);
let title = new SplitText('.hero-text', { type: 'chars' });

gsap.from('.reveal', { opacity: 0, y: 100, duration: 1, stagger: 0.2 });
gsap.from('.hero-text div', { opacity: 0, y: 100, duration: 1, stagger: 0.1, ease: 'back.out' });

gsap.from('img', { opacity: 0, x: 100, duration: 1 });
