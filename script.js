
// Planet Data
const planets = {
  mercury: {
    name: "Mercury",
    desc: "The smallest and innermost planet in the Solar System.",
    img: "https://science.nasa.gov/wp-content/uploads/2023/09/mercury-messenger-globe-color-web.jpg",
    stats: [
      "Diameter: 4,879 km",
      "Mass: 3.3 × 10²³ kg",
      "Orbital Period: 88 Earth days",
      "Day Length: 59 Earth days",
      "Distance from Sun: 57.9 million km",
      "Surface Temperature: -173°C to 427°C",
      "Moons: 0",
      "Rings: 0"
    ],
    physical: "Mercury is the smallest planet in our solar system, only slightly larger than Earth's Moon. Its surface is heavily cratered, resembling the Moon's appearance, with large impact basins and long cliff-like scarps. The planet experiences extreme temperature variations due to its lack of atmosphere and proximity to the Sun. Mercury has no atmosphere to retain heat, causing temperatures to plummet during its long nights.",
    composition: "Mercury has a large iron core that makes up about 75% of the planet's radius, surrounded by a thin silicate mantle and crust only about 400 km thick. The core is partially molten and generates a weak magnetic field. The planet's high density suggests it contains more iron relative to rock than any other planet in the solar system, possibly due to a giant impact that stripped away much of its original rocky mantle.",
    fourthTitle: "Facts and Space Exploration",
    fourthContent: "Mercury has been visited by two spacecraft: Mariner 10 (1974-1975) and MESSENGER (2011-2015). MESSENGER provided detailed maps and discovered water ice in permanently shadowed craters at the poles. The BepiColombo mission, launched in 2018, will arrive at Mercury in 2025 to study its magnetic field and surface composition in greater detail."
  },
  venus: {
    name: "Venus",
    desc: "The second planet from the Sun and the hottest planet in our Solar System.",
    img: "https://science.nasa.gov/wp-content/uploads/2023/09/venus-mariner-10-image-web.jpg",
    stats: [
      "Diameter: 12,104 km",
      "Mass: 4.87 × 10²⁴ kg",
      "Orbital Period: 225 Earth days",
      "Day Length: 243 Earth days",
      "Distance from Sun: 108.2 million km",
      "Surface Temperature: 462°C",
      "Moons: 0",
      "Atmospheric Pressure: 92 times Earth's"
    ],
    physical: "Venus is often called Earth's twin due to similar size and mass, but its surface conditions are hellish. The planet is shrouded in thick, toxic clouds of sulfuric acid that completely obscure the surface. Venus has extensive volcanic plains, mountain ranges, and large impact craters. The surface pressure is 92 times that of Earth, equivalent to being 900 meters underwater.",
    composition: "Venus has a similar internal structure to Earth, with an iron core, silicate mantle, and thin crust. However, its dense atmosphere is 96% carbon dioxide with clouds of sulfuric acid, creating a runaway greenhouse effect. The planet likely has a partially molten core but generates no magnetic field, possibly due to its slow rotation.",
    fourthTitle: "Facts and Space Exploration",
    fourthContent: "Venus has been explored by numerous Soviet Venera missions, with several landers successfully reaching the surface despite the extreme conditions. The Magellan spacecraft mapped Venus's surface using radar, revealing extensive volcanic activity. Recent missions include ESA's Venus Express and the planned VERITAS and DAVINCI missions to study the planet's atmosphere and surface."
  },
  earth: {
    name: "Earth",
    desc: "Our home planet, the only known planet to support life.",
    img: "https://science.nasa.gov/wp-content/uploads/2023/09/earth-apollo-17-web.jpg",
    stats: [
      "Diameter: 12,756 km",
      "Mass: 5.97 × 10²⁴ kg",
      "Orbital Period: 365.25 days",
      "Day Length: 24 hours",
      "Distance from Sun: 149.6 million km",
      "Surface Temperature: -89°C to 58°C",
      "Moons: 1 (Luna)",
      "Surface Water: 71%"
    ],
    physical: "Earth is the only known planet with liquid water on its surface and a breathable atmosphere. The planet has diverse landscapes including continents, oceans, polar ice caps, and a dynamic climate system. Earth's surface is constantly changing due to plate tectonics, weathering, and erosion. The planet's magnetic field protects it from harmful solar radiation.",
    composition: "Earth has a layered structure with an iron-nickel core, silicate mantle, and thin crust. The atmosphere is 78% nitrogen and 21% oxygen, with trace amounts of other gases. The planet's core generates a strong magnetic field that extends far into space, creating the magnetosphere that protects life from cosmic radiation.",
    fourthTitle: "Earth's Moon",
    fourthContent: "Earth's Moon is the fifth largest moon in the solar system and plays a crucial role in stabilizing Earth's axial tilt and creating tides. The Moon formed about 4.5 billion years ago, likely from debris after a Mars-sized object collided with early Earth. It has been extensively studied and is the only celestial body beyond Earth that humans have visited."
  },
  mars: {
    name: "Mars",
    desc: "The Red Planet, known for its rusty iron oxide surface.",
    img: "https://science.nasa.gov/wp-content/uploads/2023/09/mars-true-color-web.jpg",
    stats: [
      "Diameter: 6,792 km",
      "Mass: 6.39 × 10²³ kg",
      "Orbital Period: 687 Earth days",
      "Day Length: 24.6 hours",
      "Distance from Sun: 227.9 million km",
      "Surface Temperature: -87°C to -5°C",
      "Moons: 2 (Phobos, Deimos)",
      "Atmosphere: 95% CO₂"
    ],
    physical: "Mars appears red due to iron oxide (rust) on its surface. The planet has the largest volcano in the solar system (Olympus Mons) and the deepest canyon (Valles Marineris). Evidence suggests Mars once had liquid water on its surface, with ancient riverbeds, lake beds, and possible ocean basins. Polar ice caps contain both water ice and frozen carbon dioxide.",
    composition: "Mars has a core of iron, nickel, and sulfur, surrounded by a silicate mantle and crust rich in iron oxide. The thin atmosphere is mostly carbon dioxide with trace amounts of nitrogen and argon. The planet has a weak magnetic field, likely due to a partially solidified core, which allows solar wind to strip away the atmosphere.",
    fourthTitle: "Mars' Moons",
    fourthContent: "Mars has two small, irregularly shaped moons: Phobos and Deimos. Phobos, the larger moon, orbits very close to Mars and is slowly spiraling inward, eventually to crash into the planet or break up into a ring system. Deimos is smaller and more distant. Both moons are likely captured asteroids and are heavily cratered."
  },
  jupiter: {
    name: "Jupiter",
    desc: "The largest planet in our Solar System, a gas giant.",
    img: "https://science.nasa.gov/wp-content/uploads/2023/09/jupiter-juno-web.jpg",
    stats: [
      "Diameter: 142,984 km",
      "Mass: 1.898 × 10²⁷ kg",
      "Orbital Period: 12 Earth years",
      "Day Length: 9.9 hours",
      "Distance from Sun: 778.5 million km",
      "Atmospheric Temperature: -108°C",
      "Moons: 95 confirmed",
      "Rings: 4 main rings"
    ],
    physical: "Jupiter is a gas giant with no solid surface, composed mainly of hydrogen and helium. The planet features distinctive bands of clouds and the famous Great Red Spot, a storm larger than Earth that has raged for centuries. Jupiter's rapid rotation creates strong winds and dynamic weather patterns. The planet acts as a 'cosmic vacuum cleaner,' protecting inner planets from asteroids and comets.",
    composition: "Jupiter is primarily hydrogen (89%) and helium (10%) with traces of methane, ammonia, and water vapor. The planet has a small rocky core surrounded by metallic hydrogen under extreme pressure. The thick atmosphere creates colorful bands due to different chemical compounds at various altitudes and temperatures.",
    fourthTitle: "Jupiter's Moons",
    fourthContent: "Jupiter has 95 confirmed moons, including the four largest Galilean moons: Io (volcanic), Europa (subsurface ocean), Ganymede (largest moon in solar system), and Callisto (heavily cratered). Europa and Ganymede are considered potential habitats for life due to their subsurface oceans. Many of Jupiter's smaller moons are likely captured asteroids."
  },
  saturn: {
    name: "Saturn",
    desc: "Famous for its spectacular ring system.",
    img: "https://science.nasa.gov/wp-content/uploads/2023/09/saturn-cassini-web.jpg",
    stats: [
      "Diameter: 120,536 km",
      "Mass: 5.683 × 10²⁶ kg",
      "Orbital Period: 29 Earth years",
      "Day Length: 10.7 hours",
      "Distance from Sun: 1.432 billion km",
      "Atmospheric Temperature: -139°C",
      "Moons: 146 confirmed",
      "Ring System: Extensive"
    ],
    physical: "Saturn is the second-largest planet and is famous for its prominent ring system made of ice and rock particles. The planet is a gas giant with a less dense composition than water - it would float if placed in a large enough ocean. Saturn has a hexagonal storm at its north pole and displays beautiful golden hues in its atmosphere.",
    composition: "Saturn is composed of about 96% hydrogen and 3% helium, with traces of ammonia, methane, and water vapor. The planet has a small rocky core surrounded by metallic hydrogen and a thick gaseous atmosphere. Saturn's low density is due to its composition and the fact that it's less compressed than Jupiter despite its size.",
    fourthTitle: "Saturn's Moons",
    fourthContent: "Saturn has 146 confirmed moons, with Titan being the largest and most interesting. Titan has a thick atmosphere and liquid methane lakes, making it a target for astrobiology studies. Enceladus has geysers of water ice erupting from its south pole, indicating a subsurface ocean. Other notable moons include Mimas, Rhea, and Iapetus, each with unique characteristics."
  },
  uranus: {
    name: "Uranus",
    desc: "An ice giant that rotates on its side.",
    img: "https://science.nasa.gov/wp-content/uploads/2023/09/uranus-voyager-2-web.jpg",
    stats: [
      "Diameter: 51,118 km",
      "Mass: 8.681 × 10²⁵ kg",
      "Orbital Period: 84 Earth years",
      "Day Length: 17.2 hours",
      "Distance from Sun: 2.867 billion km",
      "Atmospheric Temperature: -197°C",
      "Moons: 27 confirmed",
      "Rings: 13 known rings"
    ],
    physical: "Uranus is unique among planets as it rotates on its side, with an axial tilt of 98 degrees. This ice giant appears blue-green due to methane in its atmosphere. The planet has a relatively featureless appearance with few visible cloud formations. Uranus experiences extreme seasonal variations, with each pole experiencing 42 years of continuous sunlight or darkness.",
    composition: "Uranus is composed of water, methane, and ammonia ices surrounding a rocky core. The atmosphere is about 83% hydrogen, 15% helium, and 2% methane. The planet's unusual magnetic field is tilted 59 degrees from its rotational axis and doesn't originate from the center, suggesting a complex interior structure.",
    fourthTitle: "Uranus' Moons",
    fourthContent: "Uranus has 27 known moons, all named after characters from Shakespeare and Alexander Pope's works. The largest moons are Titania, Oberon, Umbriel, Ariel, and Miranda. Miranda is particularly interesting with its diverse terrain including cliffs, valleys, and unusual surface features that suggest a violent past. Most of Uranus' moons are composed of ice and rock."
  },
  neptune: {
    name: "Neptune",
    desc: "The windiest planet in our Solar System.",
    img: "https://science.nasa.gov/wp-content/uploads/2023/09/neptune-voyager-2-web.jpg",
    stats: [
      "Diameter: 49,528 km",
      "Mass: 1.024 × 10²⁶ kg",
      "Orbital Period: 165 Earth years",
      "Day Length: 16.1 hours",
      "Distance from Sun: 4.515 billion km",
      "Atmospheric Temperature: -201°C",
      "Moons: 16 confirmed",
      "Wind Speeds: Up to 2,100 km/h"
    ],
    physical: "Neptune is the windiest planet in the solar system, with winds reaching speeds of up to 2,100 km/h. This ice giant has a deep blue color due to methane in its atmosphere. The planet has several dark spots, including the Great Dark Spot (similar to Jupiter's Great Red Spot), though these features come and go over time. Neptune radiates more energy than it receives from the Sun.",
    composition: "Neptune is similar to Uranus in composition, with a core of rock and ice surrounded by a mantle of water, ammonia, and methane ices. The atmosphere is about 80% hydrogen, 19% helium, and 1% methane. The planet's deep blue color comes from methane, which absorbs red light and reflects blue wavelengths back to space.",
    fourthTitle: "Neptune's Moons",
    fourthContent: "Neptune has 16 known moons, with Triton being by far the largest. Triton is unique as it orbits in a retrograde direction, suggesting it was a captured Kuiper Belt object. Triton has geysers of nitrogen gas and is slowly spiraling toward Neptune. Other notable moons include Nereid, with its highly eccentric orbit, and Proteus, the second-largest moon."
  }
};

// Dwarf Planet Data
const dwarfPlanets = {
  pluto: {
    name: "Pluto",
    desc: "The most famous dwarf planet, formerly the ninth planet.",
    img: "https://science.nasa.gov/wp-content/uploads/2023/09/pluto-color-image-web.jpg",
    stats: [
      "Diameter: 2,374 km",
      "Mass: 1.303 × 10²² kg",
      "Orbital Period: 248 Earth years",
      "Day Length: 6.4 Earth days",
      "Distance from Sun: 5.9 billion km",
      "Surface Temperature: -375°F to -400°F",
      "Moons: 5 known",
      "Atmosphere: Thin nitrogen"
    ],
    physical: "Pluto is a complex world with a heart-shaped region called Tombaugh Regio, nitrogen plains, methane glaciers, and a thin atmosphere. Its surface shows evidence of geological activity despite its small size and distance from the Sun. The dwarf planet has mountains, plains, and possibly even active geology driven by internal heat.",
    composition: "Pluto has a rocky core surrounded by a mantle of water ice, with a surface composed of frozen nitrogen, methane, and carbon monoxide. Its density suggests it is about 70% rock and 30% ice. The surface composition varies across different regions, with some areas rich in nitrogen ice and others containing methane and carbon monoxide.",
    fourthTitle: "Moons and System",
    fourthContent: "Pluto has five known moons: Charon (the largest), Nix, Hydra, Styx, and Kerberos. Charon is so large relative to Pluto that they form a binary system, orbiting around a common center of mass between them. The New Horizons spacecraft flyby in 2015 revealed incredible details about this distant world and its moons."
  },
  eris: {
    name: "Eris",
    desc: "The most massive dwarf planet in our Solar System.",
    img: "https://science.nasa.gov/wp-content/uploads/2023/09/eris-artist-concept-web.jpg",
    stats: [
      "Diameter: 2,326 km",
      "Mass: 1.66 × 10²² kg",
      "Orbital Period: 557 Earth years",
      "Day Length: 25.9 hours",
      "Distance from Sun: 10.1 billion km",
      "Surface Temperature: -231°C",
      "Moons: 1 (Dysnomia)",
      "Atmosphere: Possibly thin methane"
    ],
    physical: "Eris is one of the most distant known objects in the solar system and appears almost perfectly spherical. Its surface is extremely cold and likely covered in methane ice that gives it a bright, reflective appearance. Eris is slightly smaller than Pluto but more massive, making it the most massive dwarf planet known.",
    composition: "Eris is composed of rock and ice, with a surface covered in frozen methane. The dwarf planet is denser than Pluto, suggesting it has a higher rock-to-ice ratio. Its bright surface reflects about 96% of sunlight, making it one of the most reflective objects in the solar system.",
    fourthTitle: "Discovery and Moon",
    fourthContent: "Eris was discovered in 2005 and its discovery led to the reclassification of Pluto as a dwarf planet. It has one known moon, Dysnomia, which is much smaller than Eris itself. The extreme distance of Eris makes detailed study challenging, and most of our knowledge comes from ground-based telescopic observations."
  },
  ceres: {
    name: "Ceres",
    desc: "The largest object in the asteroid belt between Mars and Jupiter.",
    img: "https://science.nasa.gov/wp-content/uploads/2023/09/ceres-dawn-web.jpg",
    stats: [
      "Diameter: 940 km",
      "Mass: 9.39 × 10²⁰ kg",
      "Orbital Period: 4.6 Earth years",
      "Day Length: 9.1 hours",
      "Distance from Sun: 413.7 million km",
      "Surface Temperature: -106°C",
      "Moons: 0",
      "Contains: 1/3 of asteroid belt's mass"
    ],
    physical: "Ceres is the only dwarf planet in the inner solar system and the largest object in the asteroid belt. Its surface shows evidence of water ice and possible cryovolcanism. Bright spots on its surface, particularly in Occator Crater, are deposits of sodium carbonate and other salts left behind by briny water.",
    composition: "Ceres is composed of a rocky core surrounded by a mantle of water ice and possibly liquid water. Its surface is covered in a mixture of water ice, clay minerals, and carbonates. The dwarf planet may have a subsurface ocean beneath its icy mantle, making it a target for astrobiology research.",
    fourthTitle: "Exploration and Significance",
    fourthContent: "Ceres was extensively studied by NASA's Dawn spacecraft from 2015 to 2018, which revealed its complex geology and potential for harboring conditions suitable for life. As the largest object in the asteroid belt, Ceres represents a bridge between the terrestrial planets and the gas giants, providing insights into early solar system formation."
  },
  makemake: {
    name: "Makemake",
    desc: "One of the largest dwarf planets in the Kuiper Belt.",
    img: "https://science.nasa.gov/wp-content/uploads/2023/09/makemake-artist-concept-web.jpg",
    stats: [
      "Diameter: 1,430 km",
      "Mass: 3.1 × 10²¹ kg",
      "Orbital Period: 310 Earth years",
      "Day Length: 22.5 hours",
      "Distance from Sun: 6.8 billion km",
      "Surface Temperature: -239°C",
      "Moons: 1 (MK 2)",
      "Atmosphere: Thin methane (seasonal)"
    ],
    physical: "Makemake is a reddish-brown dwarf planet with a surface covered in frozen methane and ethane. It lacks the bright nitrogen plains found on Pluto, giving it a darker appearance. The dwarf planet may have a thin atmosphere that appears and disappears as it orbits the Sun.",
    composition: "Makemake is composed of rock and ice, with a surface rich in methane and possibly ethane. Its density suggests it has a higher rock content than many other Kuiper Belt objects. The surface appears to be covered in organic compounds that give it its characteristic reddish color.",
    fourthTitle: "Discovery and Moon",
    fourthContent: "Makemake was discovered in 2005 and is named after the creator deity of the Rapa Nui people of Easter Island. It has one known moon, MK 2, which was discovered in 2016. The moon is much smaller and darker than Makemake itself, and its discovery helped refine estimates of Makemake's mass and density."
  },
  haumea: {
    name: "Haumea",
    desc: "An elongated dwarf planet with a very fast rotation.",
    img: "https://science.nasa.gov/wp-content/uploads/2023/09/haumea-artist-concept-web.jpg",
    stats: [
      "Diameter: 1,632 km (longest axis)",
      "Mass: 4.01 × 10²¹ kg",
      "Orbital Period: 284 Earth years",
      "Day Length: 3.9 hours",
      "Distance from Sun: 6.5 billion km",
      "Surface Temperature: -241°C",
      "Moons: 2 (Hi'iaka, Namaka)",
      "Shape: Elongated ellipsoid"
    ],
    physical: "Haumea is unique among dwarf planets due to its extremely elongated shape and rapid rotation. It spins so fast that it has been stretched into an ellipsoid shape, completing one rotation in just 3.9 hours. This rapid rotation is likely the result of a collision that also created its moons and ring system.",
    composition: "Haumea is composed primarily of rock with a surface covered in crystalline water ice, making it one of the brightest objects in the Kuiper Belt. The dwarf planet's surface composition suggests it underwent a collision that stripped away its outer layers, exposing the icy interior.",
    fourthTitle: "Moons and Ring System",
    fourthContent: "Haumea has two known moons, Hi'iaka and Namaka, both named after Hawaiian goddesses. In 2017, astronomers discovered that Haumea also has a ring system, making it the first known Kuiper Belt object with rings. The collision that created its moons likely also formed this ring system from debris."
  }
};

// DOM Elements
const navBtns = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');
const planetBtns = document.querySelectorAll('.planet-btn');

// Initialize Particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { 
      value: 0.7, 
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.1 }
    },
    size: { 
      value: 3, 
      random: true,
      anim: { enable: true, speed: 2, size_min: 0.1 }
    },
    line_linked: { 
      enable: true, 
      distance: 150, 
      color: "#88d3ce",
      opacity: 0.4, 
      width: 1 
    },
    move: { 
      enable: true, 
      speed: 1.5, 
      direction: "none", 
      random: true, 
      straight: false, 
      out_mode: "bounce" 
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    }
  }
});

// Page Navigation
navBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const targetPage = btn.dataset.page;
    
    navBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(targetPage + '-page').classList.add('active');
  });
});

// Planet Selection for Planets Page
function setupPlanetButtons(containerId, planetData, imgId, nameId, descId, factsId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const buttons = container.querySelectorAll('.planet-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const planet = btn.dataset.planet;
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const data = planetData[planet];
      if (data) {
        document.getElementById(imgId).src = data.img;
        document.getElementById(nameId).textContent = data.name;
        document.getElementById(descId).textContent = data.desc;

        // Handle planets page sections
        if (containerId === 'planets-page') {
          const statsList = document.getElementById('planet-stats');
          statsList.innerHTML = '';
          data.stats.forEach(stat => {
            const li = document.createElement('li');
            const parts = stat.split(': ');
            li.innerHTML = `<strong>${parts[0]}:</strong> ${parts[1]}`;
            statsList.appendChild(li);
          });

          document.getElementById('physical-content').textContent = data.physical;
          document.getElementById('composition-content').textContent = data.composition;
          document.getElementById('fourth-title').textContent = data.fourthTitle;
          document.getElementById('fourth-content').textContent = data.fourthContent;
        }
        // Handle dwarf planets page (existing functionality)
        else if (factsId) {
          const factsList = document.getElementById(factsId);
          factsList.innerHTML = '';
          data.facts.forEach(fact => {
            const li = document.createElement('li');
            li.textContent = fact;
            factsList.appendChild(li);
          });
        }
      }
    });
  });
}

// Setup planet buttons for planets page
setupPlanetButtons('planets-page', planets, 'planet-img', 'planet-name', 'planet-desc', null);

// Setup dwarf planet buttons for beyond page
function setupDwarfPlanetButtons() {
  const container = document.getElementById('beyond-page');
  if (!container) return;
  
  const buttons = container.querySelectorAll('.planet-btn');
  const planetInfo = container.querySelector('.planet-info');
  const dwarfSections = document.getElementById('dwarf-sections');
  const asteroidsSections = document.getElementById('asteroids-comets-sections');
  const beltsSections = document.getElementById('belts-sections');
  const oortSections = document.getElementById('oort-edge-sections');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const planet = btn.dataset.planet;
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Hide all sections first
      dwarfSections.style.display = 'none';
      asteroidsSections.style.display = 'none';
      beltsSections.style.display = 'none';
      oortSections.style.display = 'none';

      // Handle dwarf planets
      if (dwarfPlanets[planet]) {
        const data = dwarfPlanets[planet];
        planetInfo.style.display = 'flex';
        dwarfSections.style.display = 'flex';
        
        document.getElementById('dwarf-img').src = data.img;
        document.getElementById('dwarf-name').textContent = data.name;
        document.getElementById('dwarf-desc').textContent = data.desc;

        // Update statistics
        const statsList = document.getElementById('dwarf-stats');
        statsList.innerHTML = '';
        data.stats.forEach(stat => {
          const li = document.createElement('li');
          const parts = stat.split(': ');
          li.innerHTML = `<strong>${parts[0]}:</strong> ${parts[1]}`;
          statsList.appendChild(li);
        });

        // Update sections
        document.getElementById('dwarf-physical').textContent = data.physical;
        document.getElementById('dwarf-composition').textContent = data.composition;
        document.getElementById('dwarf-fourth-title').textContent = data.fourthTitle;
        document.getElementById('dwarf-fourth-content').textContent = data.fourthContent;
      }
      // Handle special pages
      else if (planet === 'asteroids-comets') {
        planetInfo.style.display = 'none';
        asteroidsSections.style.display = 'flex';
      }
      else if (planet === 'belts') {
        planetInfo.style.display = 'none';
        beltsSections.style.display = 'flex';
      }
      else if (planet === 'oort-edge') {
        planetInfo.style.display = 'none';
        oortSections.style.display = 'flex';
      }
    });
  });
}

setupDwarfPlanetButtons();

// Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}